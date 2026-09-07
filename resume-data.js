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
        ru: "Руководство продуктовым, конструкторским и саппорт-направлениями разработки Роботизированного Массажного Комплекса (бренды [Роден](https://beautylinergroup.ru/roden/)/ [RoboSculptor](https://www.robo-sculptor.com/)).\nРоботизированный Массажный Комплекс «Роден» (HealthTech / MedTech, B2B/B2C) — аппаратно-программный комплекс (Hardware + Software + Robotics + AI/CV): облачное ПО, внутреннее ПО для разработки, 2 Android-приложения.\nСтек: Python, C++, C#, JavaScript, CUDA, Unity.",
        en: "Leading product, engineering and support tracks for a robotic massage complex (HealthTech). Dev team — 30 people, markets: Russia, UAE, Italy, USA.",
      },
      highlights: [
        { group: { ru: "Ключевые результаты", en: "Key Results" }, open: true },
        { key: true, ru: "Вывел B2B/B2C продукт на международный рынок (ОАЭ, Италия, США) и рынок РФ (два разных бренда) от исследования ЦА до первых B2B-контрактов и обучения 30+ сотрудников. На текущий момент 6 контрактов в стадии согласования с потенциальной выручкой 120+ млн руб c окупаемостью 3 года", en: "Launched B2B/B2C product internationally (UAE, Italy, USA) and in Russia — from audience research to first B2B contracts and training 30+ employees. Currently 6 contracts in negotiation with potential revenue of 120M+ ₽ over 3 years." },
        { key: true, ru: "За 6 месяцев сформировал и вывел на выставки и пилотные проекты первый стабильный коммерческий MVP для B2B", en: "In 6 months formed and brought to exhibitions and pilots the first stable commercial B2B MVP." },
        { key: true, ru: "Сформировал продуктовую культуру и понятный цикл разработки от discovery до релиза с последующей тех. поддержкой и сервисом - Сократил средний TTM на 50% - ввёл метрику с нуля (до прихода цикл разработки превышал 6 месяцев)", en: "Built product culture and a clear dev cycle from discovery to release with tech support and service. Cut average TTM by 50% — introduced the metric from scratch (before my arrival, the dev cycle exceeded 6 months)." },
        { ru: "Вырос от Руководителя продуктового направления до Директора по продукту - На старте 1 прямой подчиненный, через 6 месяцев в моей зоне ответственности 3 отдельных подразделения (product, hardware, tech support) с 8 сотрудниками в подчинении", en: "Grew from Head of Product to Director of Product — starting with 1 direct report, within 6 months overseeing 3 departments (product, hardware, tech support) with 8 direct reports." },
        { group: { ru: "Обязанности", en: "Responsibilities" } },
        { key: true, ru: "Разработка продуктовой стратегии, анализ рынка, поиск PMF - Сформировал ценностное предложение, определил целевые сегменты B2B и B2C. 50+ контактов и 2 пилотных проекта после готовности MVP", en: "Product strategy development, market analysis, PMF search — defined value proposition and target B2B/B2C segments. 50+ contacts and 2 pilot projects after MVP readiness." },
        { ru: "Реализация продуктовой стратегии, построение рабочих процессов - Внедрил структурированный бэклог, релизный пайплайн для разработки, регламенты и процессы технической поддержки, а также сформировал роадмап на 6 кварталов", en: "Product strategy execution, process building — introduced a structured backlog, release pipeline, tech support regulations, and a 6-quarter roadmap." },
        { key: true, ru: "Управление работой кросс-функциональной команды до 30 чел. (R&D, маркетинг, коммерция), 8 из которых под прямым руководством - Выстроил взаимодействие между бизнесом, продуктом и разработкой. TTM -50%, доля неплановых задач в спринтах 40% → 10%", en: "Managing a cross-functional team of up to 30 people (R&D, marketing, commerce), 8 direct reports — built business-product-dev collaboration. TTM -50%, unplanned tasks in sprints 40% → 10%." },
        { ru: "Формирование требований к продукту, декомпозиция до задач для R&D, сопровождение релизной разработки, координация команд, приемка - Выпущено 3 стабильных релиза", en: "Defining product requirements, decomposing into R&D tasks, supporting release development, coordinating teams, acceptance — 3 stable releases shipped." },
        { key: true, ru: "Взаимодействие с клиентами, проведение исследований, анализ обратной связи - Собрал и организовал ОС от 400+ B2C-клиентов, которую завалидировал на 20+ CustDev-интервью. Результат: рост CSI с 8.3 до 8.9 и NPS +10%", en: "Client engagement, research and feedback analysis — gathered and organised feedback from 400+ B2C clients, validated on 20+ CustDev interviews. Result: CSI grew from 8.3 to 8.9, NPS +10%." },
        { ru: "Разработка пользовательских UI/UX-сценариев и CJM - Оптимизировал экраны клиентских приложений, добавил недостающие функции. B2B обучение сократилось на 20 минут (-25%), а B2C онбординг - на 1 минуту (-50%)", en: "UI/UX user journey and CJM design — optimised client app screens, added missing features. B2B training reduced by 20 min (-25%), B2C onboarding by 1 min (-50%)." },
        { ru: "Проведение клиентских обучений (оффлайн/онлайн и рус/eng), подготовка материалов, инструкций - Организовал и провел обучение по работе с Комплексом для 30+ сотрудников B2B", en: "Client training (offline/online, RU/EN), preparing materials and instructions — organised and delivered training for 30+ B2B employees." },
        { ru: "Поиск поставщиков по ключевым компонентам и аксессуарам, коммуникация и построение рабочих процессов с ними (Китай, ОАЭ, РФ) - Организовал работу с 5+ новыми контрагентами", en: "Sourcing suppliers for key components and accessories, building workflows (China, UAE, Russia) — set up work with 5+ new contractors." },
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
        { group: { ru: "Обязанности", en: "Responsibilities" } },
        { ru: "Управление проектами полного цикла по разработке и доработке устройств от идеи до запуска серийного производства", en: "Full-cycle project management for device development and refinement from idea to serial production launch." },
        { ru: "Планирование (MS Project/MS Excel/GanttPro), декомпозиция и приоритезация задач", en: "Planning (MS Project/MS Excel/GanttPro), decomposition and task prioritisation." },
        { ru: "Взаимодействие со смежными командами внутри компании (до 10 чел.) и с фабриками/сторонними подрядчиками, контроль работ", en: "Coordinating internal teams (up to 10 people) and factories/contractors, work control." },
        { ru: "Участие в тестировании устройств, а также в процессах логистики и сертификации", en: "Participating in device testing, logistics and certification processes." },
        { ru: "Составление стандартов качества и инструкций для проведения инспекций для 15+ продуктов", en: "Drafting quality standards and inspection instructions for 15+ products." },
        { ru: "Обработка, оптимизация представления и анализ финансовых затрат отдела", en: "Processing, optimising and analysing department financial costs." },
        { ru: "Выполнение функций категорийного менеджера в Китае: поиск новых фабрик, конкурентный анализ, построение коммуникации с партнерами на разных уровнях (владельцы, CEO, менеджеры)", en: "Category management in China: sourcing new factories, competitive analysis, building partner relationships at all levels (owners, CEOs, managers)." },
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
        { group: { ru: "Обязанности", en: "Responsibilities" } },
        { ru: "Разработка электронных устройств", en: "Electronic device development." },
        { ru: "Анализ и корректировка требований к продукту, сбор обратной связи от тестовой группы пользователей", en: "Analysing and adjusting product requirements, collecting feedback from test user groups." },
        { ru: "Подготовка пакета конструкторской документации", en: "Preparing design documentation packages." },
        { ru: "Тестирование устройств на всех этапах", en: "Device testing at all stages." },
        { ru: "Коммуникация с поставщиками компонентов", en: "Component supplier communications." },
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
        { group: { ru: "Обязанности", en: "Responsibilities" } },
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
