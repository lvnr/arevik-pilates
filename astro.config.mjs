import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://arevik-pilates.vercel.app',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
