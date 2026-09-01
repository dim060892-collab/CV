/* =============================================================================
   CONTENT  -  это ЕДИНСТВЕННЫЙ файл, который редактирует владелец резюме.
   This is the ONLY file the resume owner normally edits.
   -----------------------------------------------------------------------------
   • Каждый текст - объект { ru: "...", en: "..." }. Заполняй оба языка.
   • Пустая строка "" допустима - сайт не сломается.
   • Медиа НЕ перечисляются здесь: указывается только mediaDir,
     файлы собирает `node build-media.js` в media-index.js.
   ============================================================================= */

window.RESUME = {

  /* --- ГЛОБАЛЬНЫЕ НАСТРОЙКИ / GLOBAL SETTINGS ------------------------------ */
  settings: {
    defaultLang: "ru",
    accent:      "#00A878",
    initials:    "ДК",
    initialsEn:  "DK",
  },

  /* --- ШАПКА / HERO -------------------------------------------------------- */
  hero: {
    name:    { ru: "Дмитрий Качалов", en: "Dmitry Kachalov" },
    role:    { ru: "Product / Project Manager · R&D / IoT / Hardware", en: "Product / Project Manager · R&D / IoT / Hardware" },
    photo:       "media/portrait.png",
    photoAvatar: "media/portrait.png",
    tagline: {
      ru: "9+ лет в разработке электронных устройств:\nот Инженера-конструктора до Директора по продукту",
      en: "9+ years in electronic devices:\nfrom Hardware Engineer to Director of Product",
    },
    location: { ru: "Москва, Россия", en: "Moscow, Russia" },
    status:   { ru: "Открыт к предложениям", en: "Open to opportunities" },
    stats: [
      { value: "10+",   label: { ru: "лет в продуктах и железе", en: "years in product & hardware" } },
      { value: "20",    label: { ru: "человек в команде",        en: "people in the team" } },
      { value: "140M₽", label: { ru: "бюджет проектов",         en: "projects budget" } },
    ],
  },

  /* --- ССЫЛКИ / LINKS ------------------------------------------------------ */
  links: [
    { label: "Email",    value: "Kachalov.dm@yandex.ru", href: "mailto:Kachalov.dm@yandex.ru" },
    { label: "Telegram", value: "@kachalov_dm",           href: "https://t.me/kachalov_dm", icon: "telegram" },
  ],

  /* --- О СЕБЕ / ABOUT ------------------------------------------------------ */
  about: {
    ru: "Product/ Project Manager с 9+ годами опыта в разработке хардверных продуктов. Прошёл путь от медоборудования и бытовой техники до роботизированного массажного комплекса - ==умею вести хардверный продукт в разных отраслях.==\n==Проектные команды - до 30 человек, в прямом подчинении - до 8 человек.==\n==Вёл проекты с бюджетами до 400 млн ₽.==\nЛегко переключаюсь между контекстами: с инженерами обсуждаю технические детали, с маркетингом и продажами - коммуникацию ценности клиентам, с бизнесом - экономику и стратегию. Это помогает ==синхронизировать команды без потери смысла.==\n==Строил процессы с командами в России, Китае и ОАЭ.==\nПрименяю AI-инструменты в повседневной работе.",
    en: "Product and Project Manager with 10+ years in hardware and R&D product development. Built a career from hardware engineer to Head of Product in a HealthTech startup - launching medical device lines, leading teams of up to 20 people, and running projects with budgets up to 140M₽. I bridge engineering, product, and business: I understand hardware from the inside and know how to bring it to market. Built workflows with teams in Russia, China, UAE, Europe, and the USA. Actively apply AI tools in day-to-day work.",
  },

  /* --- ОПЫТ / EXPERIENCE --------------------------------------------------- */
  experience: [
    {
      company: "Beautyliner Group",
      logo:    "media/companies/beautyliner.jpeg",
      url:     "https://beautylinergroup.ru/",
      role:    { ru: "Product Lead /\nHead of Product", en: "Product Lead /\nHead of Product" },
      location:{ ru: "Москва", en: "Moscow" },
      period:  { ru: "Апрель 2025 — Июль 2026 · 1 г 4 мес", en: "Apr 2025 — Jul 2026 · 1 yr 4 mo" },
      summary: {
        ru: "Руководство продуктовым, конструкторским и саппорт-направлениями разработки Роботизированного Массажного Комплекса (бренды [Роден](https://beautylinergroup.ru/roden/)/ [RoboSculptor](https://www.robo-sculptor.com/)).\nКоманда проекта - 30 человек, в прямом подчинении - 8.\nРынки: РФ, ОАЭ, Италия, США.",
        en: "Leading product, engineering and support tracks for a robotic massage complex (HealthTech). Dev team — 30 people, markets: Russia, UAE, Italy, USA.",
      },
      highlights: [
        { group: { ru: "Реализованные проекты", en: "Projects" }, open: true },
        { key: true, ru: "Разработка B2B/B2C платформы роботизированного массажного комплекса (HealthTech): ПАК (Hardware+Software+Robotics+AI/CV), облачное ПО, внутреннее ПО для разработки, 2 мобильных приложения; вывод на рынки РФ, ОАЭ, Италии, США", en: "Developed B2B/B2C platform for a robotic massage complex (HealthTech): PAK (Hardware+Software+Robotics+AI/CV), cloud software, internal dev tools, 2 mobile apps; launched in Russia, UAE, Italy, USA." },
        { key: true, ru: "Построение продуктовой культуры и delivery процессов в команде разработки роботизированного массажного комплекса (30 чел.)", en: "Built product culture and delivery processes in the robotic massage complex dev team (30 people)." },
        { group: { ru: "Функциональные обязанности", en: "Responsibilities" } },
        { ru: "Общая организация работы продуктовой, конструкторской и саппорт команд", en: "Overall coordination of product, engineering and support teams." },
        { ru: "Построение продуктовой стратегии, формирование roadmap, приоритизация глобальных направлений и внутренних фич, планирование релизов и продуктовых изменений", en: "Building product strategy, forming roadmap, prioritising global directions and internal features, planning releases and product changes." },
        { ru: "Управление бэклогом, формирование требований, сопровождение релизной разработки, координация смежных команд, приемка", en: "Backlog management, requirements, release development support, cross-team coordination, acceptance." },
        { ru: "Проработка пользовательских сценариев приложений UI/UX", en: "User journey and UI/UX design for apps." },
        { ru: "Разработка массажных сессий - создание основной ценности, проработка смысловой логики протоколов, их состав, зоны воздействия, длительность", en: "Designing massage sessions — core value creation, protocol logic, composition, impact zones, duration." },
        { ru: "Организация сбора ОС, ее обработка, визуализация и анализ, прямая коммуникация с B2B и B2C клиентами", en: "Organising feedback collection, processing, visualisation and analysis, direct communication with B2B and B2C clients." },
        { ru: "Запуск и ведение пилотных внедрений как отдельных проектов", en: "Launching and running pilot deployments as standalone projects." },
        { ru: "Проведение клиентских обучений (офлайн/онлайн и рус/eng) и подготовка материалов для них", en: "Conducting client training (offline/online, RU/EN) and preparing materials." },
        { ru: "Фиксация и актуализация продуктовой документации - ТЗ и критерии для разработки, пользовательские инструкции, презентации, обучающие и инфоматериалы, сопровождение маркетинга и продаж", en: "Maintaining product documentation: specs and dev criteria, user guides, presentations, training materials, marketing and sales support." },
        { ru: "Поиск поставщиков по ключевым компонентам и аксессуарам, коммуникация и построение рабочих процессов с ними", en: "Sourcing suppliers for key components and accessories, building workflows with them." },
        { group: { ru: "Достижения", en: "Achievements" } },
        { key: true, ru: "Рост в должности от Руководителя продуктового направления до Директора по продукту", en: "Grew from Head of Product Direction to Director of Product." },
        { key: true, ru: "За 6 месяцев сформировал и вывел на выставки и пилотные проекты первый стабильный коммерческий MVP. На текущий момент 6 контрактов в стадии согласования в потенциальной выручкой 100+ млн руб", en: "In 6 months formed and brought to exhibitions and pilots the first stable commercial MVP. Currently 6 contracts in negotiation with potential revenue of 100M+ ₽." },
        { key: true, ru: "Параллельный вывод B2B продукта на международный рынок (ОАЭ, Италия, США) и рынок РФ от исследования ЦА до заключения первых контрактов до обучения 30+ сотрудников в разных географиях", en: "Simultaneously launched B2B product internationally (UAE, Italy, USA) and in Russia — from audience research to first contracts and training 30+ employees across geographies." },
        { ru: "Построил процессы взаимодействия между Бизнесом, продуктом и отдельными командами, внедрил структурированный Product Backlog, сделал T2M прозрачной для всех участников метрикой", en: "Built interaction processes between Business, Product and individual teams, introduced a structured Product Backlog, made T2M a transparent metric for all participants." },
      ],
      skills: ["Product Strategy", "Roadmap", "Backlog", "UI/UX", "HealthTech", "Hardware", "B2B", "B2C", "Release Management", "Agile"],
      mediaDir: "media/experience/beautyliner",
    },

    {
      company: "BORK",
      logo:    "media/companies/bork.png",
      url:     "https://www.bork.ru",
      role:    { ru: "Hardware Project / Product Manager", en: "Hardware Project / Product Manager" },
      location:{ ru: "Москва", en: "Moscow" },
      period:  { ru: "Июль 2022 — Апрель 2025 · 2 г 10 мес", en: "Jul 2022 — Apr 2025 · 2 yr 10 mo" },
      summary: {
        ru: "Управление полным циклом разработки хардверных продуктов — от идеи до серийного производства.\nРабота с фабриками в Китае, внутренними командами и сторонними подрядчиками.\nКоманда проекта - до 10 человек.",
        en: "Full-cycle hardware product development management — from idea to serial production. Working with Chinese factories, internal teams (up to 10 people) and third-party contractors.",
      },
      highlights: [
        { group: { ru: "Реализованные проекты", en: "Projects" }, open: true },
        { key: true, ru: "Доработка и запуск производства капсульной кофемашины, которая попала в топ-5 продуктов на запуске", en: "Refined and launched a capsule coffee machine that entered the top-5 products at launch." },
        { key: true, ru: "Перенос производства утюга (топ-20 модель по продажам за 7 лет)", en: "Transfer of production of an iron (top-20 model by sales for 7 years)." },
        { ru: "Поиск и выбор фабрик в Китае: построение процессов с нуля до серийного производства", en: "Sourcing and selecting factories in China: building processes from scratch to serial production." },
        { ru: "Автоматизация управления проектами на базе YouGile и Notion - сокращение трудоемкости мониторинга статуса портфеля в 2 раза", en: "Automated project management with YouGile and Notion — cut portfolio status monitoring effort by 2×." },
        { ru: "Построение внутренних процессов управления расходами отдела, взаиморасчетов с подрядчиками", en: "Built internal department expense management processes and contractor settlement workflows." },
        { group: { ru: "Функциональные обязанности", en: "Responsibilities" } },
        { ru: "Управление проектами полного цикла по разработке и доработке устройств от идеи до запуска серийного производства", en: "Full-cycle project management for device development and refinement from idea to serial production launch." },
        { ru: "Планирование (MS Project/MS Excel/GanttPro), декомпозиция и приоритезация задач", en: "Planning (MS Project/MS Excel/GanttPro), decomposition and task prioritisation." },
        { ru: "Взаимодействие со смежными командами внутри компании (до 10 чел.) и с фабриками/сторонними подрядчиками, контроль работ", en: "Coordinating internal teams (up to 10 people) and factories/contractors, work control." },
        { ru: "Участие в тестировании устройств, а также в процессах логистики и сертификации", en: "Participating in device testing, logistics and certification processes." },
        { ru: "Составление стандартов качества и инструкций для проведения инспекций для 15+ продуктов", en: "Drafting quality standards and inspection instructions for 15+ products." },
        { ru: "Обработка, оптимизация представления и анализ финансовых затрат отдела", en: "Processing, optimising and analysing department financial costs." },
        { ru: "Выполнение функций категорийного менеджера в Китае: поиск новых фабрик, конкурентный анализ, построение коммуникации с партнерами на разных уровнях (владельцы, CEO, менеджеры)", en: "Category management in China: sourcing new factories, competitive analysis, building partner relationships at all levels (owners, CEOs, managers)." },
        { group: { ru: "Достижения", en: "Achievements" } },
        { ru: "Подобрал новую фабрику в Китае и провел успешные переговоры по переносу производства нашего продукта и его модификации", en: "Found a new factory in China and successfully negotiated the transfer of production and product modification." },
        { key: true, ru: "Успешно сопровождал процесс переноса производства и модификации устройства, что позволило сократить процент брака продукта с 4.8% до 2.1%", en: "Managed the production transfer and device modification process, reducing the defect rate from 4.8% to 2.1%." },
        { key: true, ru: "Провел успешные переговоры с новой фабрикой в Китае по модификации продукта, в результате чего удалось снизить стоимость на 20%, сроки изготовления – на 30%, а MOQ на 60%", en: "Negotiated product modification with a new Chinese factory: reduced unit cost by 20%, lead time by 30%, MOQ by 60%." },
        { ru: "Сформировал единую базу всех расходов отдела за последние 10 лет, что позволило сформировать нормы расходов и на 20% сократило трудоемкость оценки новых проектов", en: "Built a 10-year department expense database, enabling cost norms and reducing new project estimation effort by 20%." },
        { ru: "Провел успешные переговоры с ключевым партнёром в Китае, благодаря чему удалось согласовать отсрочку платежа до 3 месяцев", en: "Successfully negotiated a 3-month payment deferral with a key partner in China." },
      ],
      skills: ["Hardware PM", "Производство", "Китай", "MS Project", "YouGile", "Notion", "GanttPro", "Переговоры", "Контроль качества"],
      mediaDir: "media/experience/bork",
    },

    {
      company: { ru: "АО «Геософт-Дент»", en: "Geosoft-Dent JSC" },
      logo:    "media/companies/geosoft.png",
      url:     "https://geosoft-dent.ru/",
      role:    { ru: "Инженер-конструктор / Product Manager", en: "Hardware Engineer / Product Manager" },
      location:{ ru: "Москва", en: "Moscow" },
      period:  { ru: "Июнь 2017 — Июнь 2022 · 5 л 1 мес", en: "Jun 2017 — Jun 2022 · 5 yr 1 mo" },
      summary: {
        ru: "Разработка электронных медицинских устройств и управление продуктом. Оборудование для врачей-эндодонтов.",
        en: "Electronic medical device development and product management. Equipment for endodontic dentists.",
      },
      highlights: [
        { group: { ru: "Функциональные обязанности", en: "Responsibilities" } },
        { ru: "Разработка электронных устройств", en: "Electronic device development." },
        { ru: "Анализ и корректировка требований к продукту, сбор обратной связи от тестовой группы пользователей", en: "Analysing and adjusting product requirements, collecting feedback from test user groups." },
        { ru: "Подготовка пакета конструкторской документации", en: "Preparing design documentation packages." },
        { ru: "Тестирование устройств на всех этапах", en: "Device testing at all stages." },
        { ru: "Коммуникация с поставщиками компонентов", en: "Component supplier communications." },
        { group: { ru: "Достижения", en: "Achievements" } },
        { key: true, ru: "Запустил серийное производство и выпуск на рынок полностью новой продуктовой линейки, состоящей из 12 устройств для врачей-эндодонтов", en: "Launched serial production and market release of a completely new product line of 12 devices for endodontists." },
        { key: true, ru: "Способствовал созданию основного канала прибыли, доход от продажи новой линейки до сих пор является ключевым для компании", en: "Contributed to creating the main revenue channel — the new line's sales remain the company's key income to this day." },
      ],
      skills: ["Electronics", "Hardware", "Product Management", "Документация", "Тестирование", "R&D"],
      mediaDir: "media/experience/geosoft",
    },

    {
      company: { ru: "МГТУ им. Н.Э. Баумана · НОЦ «Поршневое двигателестроение»", en: "Bauman MSTU · R&D Center" },
      logo:    "media/education/bmstu.webp",
      role:    { ru: "Инженер\n ", en: "Engineer\n " },
      location:{ ru: "Москва", en: "Moscow" },
      period:  { ru: "Октябрь 2015 — Май 2017 · 1 г 8 мес", en: "Oct 2015 — May 2017 · 1 yr 8 mo" },
      summary: {
        ru: "Проектирование и расчёты конструктивных элементов двигателей в научно-образовательном центре кафедры.",
        en: "Design and engineering calculations for engine structural elements at the university's research and education center.",
      },
      highlights: [
        { group: { ru: "Функциональные обязанности", en: "Responsibilities" } },
        { ru: "Разработка 3D моделей", en: "3D model development." },
        { ru: "Создание расчетных математических моделей для оптимизации параметров установок", en: "Building computational models to optimise installation parameters." },
        { ru: "Проведение прочностных и тепловых расчетов конструктивных элементов", en: "Conducting strength and thermal calculations of structural elements." },
        { ru: "Реинжиниринг", en: "Reengineering." },
        { ru: "Подготовка отчетов", en: "Report preparation." },
      ],
      skills: ["3D-моделирование", "CAD", "Инженерные расчёты", "Реинжиниринг"],
      mediaDir: "media/experience/bauman-noc",
    },
  ],

  /* --- ПРОЕКТЫ / PROJECTS -------------------------------------------------- */
  projects: [
    {
      title:   { ru: "Дашборд для пилотных проектов", en: "Dashboard" },
      url:     "https://fb-rs-o6.rsc-dev.tech/",
      summary: { ru: "Дашборд по работе Массажного Комплекса, агрегирующий информацию из клиентских форм обратной связи. Наглядная визуализация, автогенерация первичных выводов, автопоиск корреляций, широкий спектр фильтраций для собственного анализа.\nMAU=15", en: "Description" },
      skills:  ["Google Forms", "Claude Code", "JavaScript", "Chart.js", "CSS"],
      mediaDir: "",
    },
    {
      title:   { ru: "Приложение для покерного клуба", en: "Project Title" },
      url:     "https://72off.netlify.app/",
      summary: { ru: "Проведение оффлайн покерных турниров, сбор и визуализация статистики, рейтинговая система, система достижений и наград.\nMAU=20", en: "Project description." },
      skills:  ["Claude Code", "Claude Design", "React", "TypeScript", "Vite", "Tailwind CSS", "GitHub", "Supabase", "Netlify"],
      mediaDir: "media/projects/poker-club",
    },
    {
      title:   { ru: "Приложение для онлайн покера", en: "Project Title" },
      url:     "https://mttracker.netlify.app/",
      summary: { ru: "Послеигровой анализ собственной игры и визуализация статистики для турнирного онлайн покера.\nMAU=5", en: "Project description." },
      skills:  ["Claude Code", "Claude Design", "React", "TypeScript", "Vite", "GitHub", "Netlify"],
      mediaDir: "media/projects/mttracker",
    },
    // Добавь ещё проекты по аналогии выше
  ],

  /* --- НАВЫКИ / SKILLS ----------------------------------------------------- */
  skills: [
    { group: { ru: "Управление проектами",  en: "Project Management"  }, items: ["Agile", "Scrum", "p3express", "Waterfall", "Построение процессов", "Кросс-функциональная координация", "Постановка задач", "Контроль результатов и сроков"] },
    { group: { ru: "Управление продуктом",  en: "Product Management"  }, items: ["Разработка нового продукта", "Jobs To Be Done", "Разработка бизнес-требований", "Разработка технических заданий", "Управление бэклогом", "Продуктовые метрики и аналитика", "Исследования рынка и пользователей", "Unit-экономика", "Финмоделирование"] },
    { group: { ru: "Инженерия и железо",    en: "Engineering & Hardware" }, items: ["Организация конструкорской команды", "Ведение R&D проектов", "3D Моделирование", "Прототипирование", "Выпуск КД"] },
    { group: { ru: "Лидерство и коммуникация", en: "Leadership & Communication" }, items: ["Управление командой", "Управление ресурсами", "Управление стейкхолдерами", "Переговоры", "Деловая коммуникация", "Аналитическое мышление", "Проведение презентаций", "Работа с Китаем"] },
    { group: { ru: "Инструменты и сервисы",              en: "Tools"                      }, items: ["MS Office", "Claude Code", "Claude Design", "ChatGPT", "Figma", "Яндекс Трекер", "Яндекс Вики", "Notion", "Miro", "Yougile", "SimplyBook", "Stripe"] },
  ],

  /* --- ОБРАЗОВАНИЕ / EDUCATION --------------------------------------------- */
  education: [
    {
      logo:   "media/education/bmstu.webp",
      org:    { ru: "МГТУ им. Н.Э. Баумана", en: "Bauman Moscow State Technical University" },
      degree: { ru: "Специалист — Энергомашиностроение, Двигатели внутреннего сгорания", en: "Specialist — Power Engineering, Internal Combustion Engines" },
      period: { ru: "2009 — 2015", en: "2009 — 2015" },
    },
  ],

  courses: [
    { ru: "Управление проектами с p3express — PMclub, 2023",   en: "Project Management with p3express — PMclub, 2023" },
    { ru: "«Как делать продукт» — Иван Замесин, 2023",         en: "\"How to Build a Product\" — Ivan Zamesin, 2023" },
    { ru: "Финансовая академия — SF Education, 2020",          en: "Financial Academy — SF Education, 2020" },
  ],

  /* --- ЯЗЫКИ / SPOKEN LANGUAGES -------------------------------------------- */
  languages: [
    { name: { ru: "Русский",    en: "Russian" }, level: { ru: "Родной",           en: "Native" } },
    { name: { ru: "Английский", en: "English" }, level: { ru: "C1 — Продвинутый", en: "C1 — Advanced" } },
  ],

  footer: {
    ru: "Живое резюме — обновляется правкой одного файла content.js.",
    en: "A living resume — updated by editing a single file, content.js.",
  },
};
