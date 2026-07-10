from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:4321"
OUT = Path("artifacts/visual")
OUT.mkdir(parents=True, exist_ok=True)


def inspect(page, path: str, name: str, width: int, height: int, full_page: bool = True):
    errors = []
    page.on("console", lambda msg: errors.append(f"console:{msg.type}:{msg.text}") if msg.type == "error" else None)
    page.on("pageerror", lambda exc: errors.append(f"pageerror:{exc}"))
    page.set_viewport_size({"width": width, "height": height})
    page.goto(f"{BASE}{path}", wait_until="networkidle")
    page.evaluate(
        """async () => {
          const step = Math.max(500, window.innerHeight * 0.8);
          for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((resolve) => setTimeout(resolve, 45));
          }
          window.scrollTo(0, 0);
          await new Promise((resolve) => setTimeout(resolve, 120));
        }"""
    )
    page.screenshot(path=str(OUT / f"{name}.png"), full_page=full_page)
    metrics = page.evaluate(
        """() => ({
          title: document.title,
          lang: document.documentElement.lang,
          viewport: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          h1: document.querySelector('h1')?.innerText,
          bookingFrames: document.querySelectorAll('iframe[src*="setmore.com"]').length,
          overflow: [...document.querySelectorAll('*')].filter((el) => {
            const r = el.getBoundingClientRect();
            return r.right > document.documentElement.clientWidth + 1 || r.left < -1;
          }).slice(0, 8).map((el) => ({
            tag: el.tagName,
            className: String(el.className || ''),
            text: (el.textContent || '').trim().slice(0, 80),
            rect: { left: el.getBoundingClientRect().left, right: el.getBoundingClientRect().right }
          })),
        })"""
    )
    assert metrics["scrollWidth"] <= metrics["viewport"], f"Horizontal overflow on {path}: {metrics}"
    assert metrics["h1"], f"Missing h1 on {path}"
    print(name, metrics, "errors=", errors)


with sync_playwright() as p:
    browser = p.chromium.launch(
        headless=True,
        executable_path="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    )
    page = browser.new_page(reduced_motion="reduce")
    inspect(page, "/", "home-en-desktop", 1440, 1000)
    inspect(page, "/ru/", "home-ru-desktop", 1440, 1000)
    inspect(page, "/hy/", "home-hy-desktop", 1440, 1000)
    inspect(page, "/", "home-en-mobile", 390, 844)
    inspect(page, "/hy/", "home-hy-mobile", 390, 844)
    inspect(page, "/book/", "book-en-desktop", 1440, 1000, full_page=False)
    inspect(page, "/hy/book/", "book-hy-mobile", 390, 844, full_page=False)
    browser.close()
