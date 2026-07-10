export type Locale = 'en' | 'ru' | 'hy';

export const locales: Locale[] = ['en', 'ru', 'hy'];

export const copy = {
  en: {
    meta: {
      title: 'Arevik Pilates — Private & Group Pilates in Yerevan',
      description: 'Mindful private and small-group Pilates sessions with Arevik in Yerevan. Book your session online.',
    },
    languageLabel: 'Language',
    skip: 'Skip to content',
    nav: { method: 'Method', sessions: 'Sessions', about: 'Arevik', faq: 'FAQ', book: 'Book a session' },
    hero: {
      eyebrow: 'Mindful movement · Yerevan',
      title: 'Build strength.\nKeep your ease.',
      lead: 'Personal and small-group Pilates with Arevik—clear guidance, considered pacing, and space to move at your level.',
      primary: 'Find a session',
      secondary: 'Meet Arevik',
      note: 'Private + small groups',
      imageAlt: 'Arevik practicing a side bend on a Pilates mat',
    },
    method: {
      eyebrow: 'The practice',
      title: 'Move with attention.',
      body: 'The BASI Pilates method builds deep core and back strength while improving posture, balance, coordination, mobility and body control. Precise, adaptable movement helps release tension and develop healthier patterns for everyday life.',
      principles: [
        { title: 'Control', text: 'Steady, deliberate movement over speed.' },
        { title: 'Breath', text: 'A rhythm that gives every movement space.' },
        { title: 'Continuity', text: 'Progress that meets you where you are.' },
      ],
    },
    sessions: {
      eyebrow: 'Ways to practice',
      title: 'Choose the room you need.',
      private: {
        kicker: 'One-to-one',
        title: 'Private session',
        time: '60 minutes',
        text: 'A focused session shaped around your body, experience and goals—with time for detailed cues and questions.',
        cta: 'Book private',
      },
      group: {
        kicker: 'Shared energy',
        title: 'Small group',
        time: '60 minutes',
        text: 'Move together in a considered, encouraging class while still receiving personal guidance from Arevik.',
        cta: 'View group times',
      },
      note: 'Mat + reformer · All levels welcome.',
    },
    about: {
      eyebrow: 'Your teacher',
      title: 'Hi, I’m Arevik.',
      credential: 'BASI Pilates trained · Spain',
      body: 'I trained in Spain at BASI Pilates, one of the world’s leading Pilates schools, where the focus is on seeing each person’s individual needs and building an effective, safe practice.',
      details: 'I teach on the mat and reformer. My goal is for every session to bring real progress and the pleasure of movement—more strength, balance, mobility and ease in everyday life.',
      quote: 'Strong doesn’t have to feel hurried.',
      imageAlt: 'Arevik holding a controlled side plank',
    },
    gallery: {
      label: 'A practice of precision, breath and flow',
      alts: ['Arevik practicing a teaser', 'Arevik practicing a shoulder bridge', 'Arevik holding a Pilates boat pose'],
    },
    booking: {
      eyebrow: 'Book online',
      title: 'Ready when you are.',
      body: 'Choose a private session or a group class, find a time that works, and receive your confirmation from Setmore.',
      cta: 'See available sessions',
      note: 'No payment is taken online.',
    },
    faq: {
      eyebrow: 'Good to know',
      title: 'Before your first session.',
      items: [
        { q: 'Do I need Pilates experience?', a: 'Not at all. Choose the format that feels right and Arevik will guide you from your current level.' },
        { q: 'What should I bring?', a: 'Wear comfortable clothes you can move in and bring water. Any session-specific details will be included with your booking.' },
        { q: 'Can beginners join a group?', a: 'Yes. Group sessions are designed to be clear and adaptable, with options offered along the way.' },
        { q: 'Where are sessions held?', a: 'Location details are shared during the booking process and in your confirmation.' },
      ],
    },
    footer: { line: 'Move well. Feel at home in your body.', booking: 'Booking powered by Setmore', rights: 'Arevik Pilates' },
    bookPage: {
      eyebrow: 'Live availability',
      title: 'Choose your session.',
      body: 'Select private Pilates or a group class below. Your booking and confirmation are handled securely by Setmore.',
      back: 'Back to the studio',
      iframeTitle: 'Book an Arevik Pilates session',
      fallback: 'Open booking in a new tab',
    },
  },
  ru: {
    meta: {
      title: 'Arevik Pilates — индивидуальный и групповой пилатес в Ереване',
      description: 'Осознанные индивидуальные занятия и пилатес в малых группах с Аревик в Ереване. Онлайн-запись.',
    },
    languageLabel: 'Язык',
    skip: 'К содержанию',
    nav: { method: 'Подход', sessions: 'Занятия', about: 'Аревик', faq: 'Вопросы', book: 'Записаться' },
    hero: {
      eyebrow: 'Осознанное движение · Ереван',
      title: 'Становитесь сильнее.\nСохраняйте лёгкость.',
      lead: 'Индивидуальные занятия и пилатес в малых группах с Аревик — понятные объяснения, продуманный темп и возможность двигаться на своём уровне.',
      primary: 'Выбрать занятие',
      secondary: 'Об Аревик',
      note: 'Индивидуально + малые группы',
      imageAlt: 'Аревик выполняет боковой наклон на коврике для пилатеса',
    },
    method: {
      eyebrow: 'Практика',
      title: 'Двигайтесь внимательно.',
      body: 'Метод BASI Pilates укрепляет мышцы кора, глубокие мышцы живота и спины, улучшает осанку, баланс, координацию, подвижность и контроль над телом. Точные и адаптивные движения снимают напряжение и помогают формировать здоровые привычки на каждый день.',
      principles: [
        { title: 'Контроль', text: 'Спокойное, осознанное движение вместо спешки.' },
        { title: 'Дыхание', text: 'Ритм, который даёт каждому движению пространство.' },
        { title: 'Постоянство', text: 'Прогресс, который начинается с вашего уровня.' },
      ],
    },
    sessions: {
      eyebrow: 'Форматы занятий',
      title: 'Выберите своё пространство.',
      private: {
        kicker: 'Один на один',
        title: 'Индивидуальное занятие',
        time: '60 минут',
        text: 'Практика с учётом вашего тела, опыта и целей — с подробными подсказками и временем на вопросы.',
        cta: 'Записаться индивидуально',
      },
      group: {
        kicker: 'Общая энергия',
        title: 'Малая группа',
        time: '60 минут',
        text: 'Двигайтесь вместе в спокойной, поддерживающей атмосфере, получая личные рекомендации Аревик.',
        cta: 'Посмотреть расписание',
      },
      note: 'Мат + реформер · Любой уровень подготовки.',
    },
    about: {
      eyebrow: 'Ваш преподаватель',
      title: 'Привет, я Аревик.',
      credential: 'Обучение BASI Pilates · Испания',
      body: 'Я обучалась в Испании в BASI Pilates — одной из ведущих школ пилатеса в мире, где учат видеть индивидуальные особенности каждого человека и выстраивать эффективную и безопасную практику.',
      details: 'Я провожу занятия на мате и реформере. Моя цель — чтобы каждая тренировка давала результат и удовольствие от движения, а тело становилось сильнее, устойчивее и свободнее в повседневной жизни.',
      quote: 'Сила не требует спешки.',
      imageAlt: 'Аревик удерживает боковую планку',
    },
    gallery: {
      label: 'Практика точности, дыхания и плавности',
      alts: ['Аревик выполняет тизер', 'Аревик выполняет плечевой мост', 'Аревик удерживает позу лодки'],
    },
    booking: {
      eyebrow: 'Онлайн-запись',
      title: 'Когда будете готовы.',
      body: 'Выберите индивидуальное или групповое занятие, найдите удобное время и получите подтверждение от Setmore.',
      cta: 'Посмотреть свободное время',
      note: 'Онлайн-оплата не требуется.',
    },
    faq: {
      eyebrow: 'Полезно знать',
      title: 'Перед первым занятием.',
      items: [
        { q: 'Нужен ли опыт в пилатесе?', a: 'Совсем нет. Выберите подходящий формат, а Аревик поможет начать с вашего текущего уровня.' },
        { q: 'Что взять с собой?', a: 'Наденьте удобную одежду и возьмите воду. Детали конкретного занятия придут вместе с подтверждением записи.' },
        { q: 'Можно ли новичкам в группу?', a: 'Да. Групповые занятия понятны и адаптивны, а упражнения можно выполнять в разных вариантах.' },
        { q: 'Где проходят занятия?', a: 'Адрес будет указан во время записи и в подтверждении.' },
      ],
    },
    footer: { line: 'Двигайтесь свободно. Чувствуйте себя дома в своём теле.', booking: 'Запись через Setmore', rights: 'Arevik Pilates' },
    bookPage: {
      eyebrow: 'Актуальное расписание',
      title: 'Выберите занятие.',
      body: 'Выберите индивидуальный пилатес или групповое занятие ниже. Запись и подтверждение безопасно обрабатывает Setmore.',
      back: 'Вернуться на главную',
      iframeTitle: 'Запись на занятие Arevik Pilates',
      fallback: 'Открыть запись в новой вкладке',
    },
  },
  hy: {
    meta: {
      title: 'Arevik Pilates — անհատական և խմբային պիլատես Երևանում',
      description: 'Անհատական և փոքր խմբերով գիտակցված պիլատես՝ Արևիկի հետ Երևանում։ Ամրագրեք առցանց։',
    },
    languageLabel: 'Լեզու',
    skip: 'Անցնել բովանդակությանը',
    nav: { method: 'Մոտեցում', sessions: 'Պարապմունքներ', about: 'Արևիկ', faq: 'Հարցեր', book: 'Ամրագրել' },
    hero: {
      eyebrow: 'Գիտակցված շարժում · Երևան',
      title: 'Կերտեք ուժ։\nՊահեք թեթևությունը։',
      lead: 'Անհատական և փոքր խմբերով պիլատես՝ Արևիկի հետ․ հստակ ուղղորդում, մտածված տեմպ և ձեր մակարդակով շարժվելու ազատություն։',
      primary: 'Ընտրել պարապմունքը',
      secondary: 'Արևիկի մասին',
      note: 'Անհատական + փոքր խմբեր',
      imageAlt: 'Արևիկը կողային թեքում է կատարում պիլատեսի գորգի վրա',
    },
    method: {
      eyebrow: 'Պրակտիկան',
      title: 'Շարժվեք ուշադրությամբ։',
      body: 'BASI Pilates մեթոդն ամրացնում է կորի, որովայնի ու մեջքի խորքային մկանները, բարելավում է կեցվածքը, հավասարակշռությունը, համակարգումը, շարժունակությունն ու մարմնի վերահսկումը։ Ճշգրիտ և հարմարեցվող շարժումները թուլացնում են լարվածությունն ու ձևավորում առողջ շարժողական սովորություններ։',
      principles: [
        { title: 'Վերահսկում', text: 'Հանգիստ, մտածված շարժում՝ արագության փոխարեն։' },
        { title: 'Շնչառություն', text: 'Ռիթմ, որը տարածություն է տալիս յուրաքանչյուր շարժմանը։' },
        { title: 'Շարունակականություն', text: 'Առաջընթաց, որը սկսվում է ձեր մակարդակից։' },
      ],
    },
    sessions: {
      eyebrow: 'Պարապելու ձևաչափեր',
      title: 'Ընտրեք ձեզ հարմար ձևաչափը։',
      private: {
        kicker: 'Մեկ առ մեկ',
        title: 'Անհատական պարապմունք',
        time: '60 րոպե',
        text: 'Պարապմունք՝ կառուցված ձեր մարմնի, փորձի և նպատակների շուրջ, մանրամասն ուղղորդմամբ և հարցերի համար ժամանակով։',
        cta: 'Ամրագրել անհատական',
      },
      group: {
        kicker: 'Ընդհանուր էներգիա',
        title: 'Փոքր խումբ',
        time: '60 րոպե',
        text: 'Շարժվեք միասին՝ հանգիստ և քաջալերող միջավայրում, միաժամանակ ստանալով Արևիկի անհատական ուղղորդումը։',
        cta: 'Տեսնել խմբային ժամերը',
      },
      note: 'Մատ + ռեֆորմեր · Բոլոր մակարդակները ողջունելի են։',
    },
    about: {
      eyebrow: 'Ձեր մարզիչը',
      title: 'Ողջույն, ես Արևիկն եմ։',
      credential: 'BASI Pilates ուսուցում · Իսպանիա',
      body: 'Ես սովորել եմ Իսպանիայում՝ BASI Pilates դպրոցում՝ պիլատեսի աշխարհի առաջատար դպրոցներից մեկում։ Այնտեղ սովորեցնում են նկատել յուրաքանչյուր մարդու առանձնահատկությունները և կառուցել արդյունավետ ու անվտանգ պրակտիկա։',
      details: 'Ես պարապմունքներ եմ անցկացնում մատի և ռեֆորմերի վրա։ Իմ նպատակն է, որ յուրաքանչյուր պարապմունք տա արդյունք ու շարժման հաճույք, իսկ մարմինը դառնա ավելի ուժեղ, կայուն և ազատ առօրյա կյանքում։',
      quote: 'Ուժը չի պահանջում շտապել։',
      imageAlt: 'Արևիկը պահում է կողային պլանկը',
    },
    gallery: {
      label: 'Ճշգրտության, շնչառության և սահունության պրակտիկա',
      alts: ['Արևիկը կատարում է թիզեր վարժությունը', 'Արևիկը կատարում է ուսային կամուրջ', 'Արևիկը պահում է նավակի դիրքը'],
    },
    booking: {
      eyebrow: 'Առցանց ամրագրում',
      title: 'Երբ պատրաստ լինեք։',
      body: 'Ընտրեք անհատական կամ խմբային պարապմունք, գտեք հարմար ժամ և ստացեք Setmore-ի հաստատումը։',
      cta: 'Տեսնել ազատ ժամերը',
      note: 'Առցանց վճարում չի պահանջվում։',
    },
    faq: {
      eyebrow: 'Օգտակար է իմանալ',
      title: 'Առաջին պարապմունքից առաջ։',
      items: [
        { q: 'Պիլատեսի փորձ պե՞տք է։', a: 'Ոչ։ Ընտրեք ձեզ հարմար ձևաչափը, իսկ Արևիկը կուղղորդի՝ սկսելով ձեր ներկա մակարդակից։' },
        { q: 'Ի՞նչ բերել ինձ հետ։', a: 'Հագեք շարժման համար հարմարավետ հագուստ և բերեք ջուր։ Պարապմունքի մանրամասները կստանաք ամրագրման հաստատման հետ։' },
        { q: 'Սկսնակը կարո՞ղ է միանալ խմբին։', a: 'Այո։ Խմբային պարապմունքները հստակ և հարմարեցվող են, իսկ վարժությունները առաջարկվում են տարբեր տարբերակներով։' },
        { q: 'Որտե՞ղ են անցկացվում պարապմունքները։', a: 'Հասցեն կնշվի ամրագրման ընթացքում և հաստատման մեջ։' },
      ],
    },
    footer: { line: 'Շարժվեք ազատ։ Զգացեք ձեզ տանը՝ ձեր մարմնում։', booking: 'Ամրագրումը՝ Setmore-ի միջոցով', rights: 'Arevik Pilates' },
    bookPage: {
      eyebrow: 'Թարմացվող ժամեր',
      title: 'Ընտրեք ձեր պարապմունքը։',
      body: 'Ստորև ընտրեք անհատական պիլատես կամ խմբային պարապմունք։ Ամրագրումն ու հաստատումը անվտանգ իրականացնում է Setmore-ը։',
      back: 'Վերադառնալ գլխավոր էջ',
      iframeTitle: 'Ամրագրել Arevik Pilates-ի պարապմունք',
      fallback: 'Բացել ամրագրումը նոր ներդիրում',
    },
  },
} as const;

export function localePath(locale: Locale, path = '') {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  if (!path || path === '/') return prefix || '/';
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`;
}
