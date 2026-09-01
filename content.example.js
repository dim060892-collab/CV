/* =============================================================================
   CONTENT  -  это ЕДИНСТВЕННЫЙ файл, который тебе нужно редактировать.
   This is the ONLY file you normally edit.
   -----------------------------------------------------------------------------
   ПРАВИЛА / RULES
   • Каждый текст - это объект { ru: "...", en: "..." }. Заполняй оба языка.
     Every text is an object { ru: "...", en: "..." }. Fill both languages.
   • Пустую строку "" оставляй, если перевода пока нет - сайт не сломается.
     Leave "" if a translation is missing yet - the site won't break.
   • Запятая после каждого пункта в списке [ ... ] обязательна.
     Keep the trailing comma after each list item.

   КАК ДОБАВИТЬ ФОТО/ВИДЕО / HOW TO ATTACH MEDIA
   У каждого раздела (место работы / проект) есть СВОЯ ПАПКА. В content.js указан
   только путь к ней: mediaDir: "media/experience/robosculptor-lead". Сами файлы
   там НЕ перечисляются - их собирает скрипт. Чтобы добавить медиа в раздел:
     1) ФАЙЛ  -> положи фото/видео в его папку media/.../<раздел>/
                 (порядок показа = по имени, удобно нумеровать: 01-, 02-, ...);
     2) ССЫЛКА -> допиши строку в файл links.txt в той же папке
                 (YouTube / Vimeo / Google Drive, по одной на строку);
     3) подпись (необязательно) -> в captions.json той же папки:
                 { "01-foto.jpg": { "ru": "Подпись", "en": "Caption" } }
     4) ПЕРЕСОБЕРИ индекс одной командой:   node build-media.js
   Файл media-index.js пересоберётся сам - его и content.js руками не трогай.
   (Можно и по-старому: задать у раздела media: [ { src, caption }, ... ] вручную.)
   ============================================================================= */

window.RESUME = {

  /* --- ГЛОБАЛЬНЫЕ НАСТРОЙКИ / GLOBAL SETTINGS ------------------------------ */
  settings: {
    defaultLang: "en",            // "ru" или "en" - язык по умолчанию
    accent:      "#E8482B",       // акцентный цвет (поменяй на любой HEX)
    initials:    "ИГ",            // монограмма в шапке (RU). EN ниже.
    initialsEn:  "IG",
  },

  /* --- ШАПКА / HERO -------------------------------------------------------- */
  hero: {
    name:    { ru: "Игорь Горяинов", en: "Igor Goriainov" },
    role:    { ru: "Senior Robotics Engineer / Head of Software Engineering", en: "Senior Robotics & Autonomous Systems Engineer" },
    // фото в шапке (удали строки - фото исчезнет):
    photo:       "media/portrait.jpg",        // полное фото - открывается по клику на аватар
    photoAvatar: "media/portrait-avatar.jpg", // кадрированный кружок в шапке (если нет - берётся photo)
    // одна сильная строка-слоган:
    tagline: {
      ru: "7+ лет в робототехнике: от дронов до терапевтических роботов",
      en: "7+ years building decision-making systems for autonomous robots: drones, vehicles, manipulators",
    },
    location:   { ru: "Москва, Россия", en: "Moscow, Russia" },
    // статус-плашка с пульсирующей точкой:
    status:     { ru: "Открыт к предложениям", en: "Open to opportunities" },
    // ключевые цифры (показываются крупно под слоганом):
    stats: [
      { value: "7+", label: { ru: "лет в робототехнике", en: "years in robotics" } },
      { value: "11",  label: { ru: "человек в команде",    en: "people in the team" } },
      { value: "3",   label: { ru: "акселератора пройдено", en: "accelerators passed" } },
    ],
  },

  /* --- ССЫЛКИ / LINKS (шапка + футер) ------------------------------------- */
  links: [
    { label: "Email",     value: "likeiigor@gmail.com",                 href: "mailto:likeiigor@gmail.com" },
    { label: "Telegram",  value: "@copter_igor",                        href: "https://t.me/copter_igor", icon: "telegram" },
    { label: "LinkedIn",  value: "in/igor-goriainov",                   href: "https://www.linkedin.com/in/igor-goriainov/", icon: "linkedin" },
    { label: "Portfolio", value: { ru: "Портфолио pet-проектов", en: "Pet-projects portfolio" }, href: "https://t.me/+UxTJ03jsy01kNDFi", icon: "portfolio" },
  ],

  /* --- О СЕБЕ / ABOUT ------------------------------------------------------ */
  about: {
    ru: "Инженер-программист с опытом разработки и интеграции робототехнических систем. Прошёл путь, включая разработку и развёртывание комплексных R&D решений в стабильные продукты, заканчивая руководством команды разработки. Занимался проектами в области БПЛА, мобильной робототехники, манипуляторами и комплексными робототехническими системами.",
    en: "Software engineer with experience in developing and integrating robotic systems. My path spans R&D through production deployment to leading an 11-person engineering team. Worked on projects in UAVs, mobile robotics, manipulators, and complex robotic systems. Specializing in decision-making architectures for autonomous systems: designed and deployed behavior trees and hierarchical state machines for safety-critical robotic complexes, autonomous drones, and self-driving vehicles. Built hybrid systems combining ML models with rule-based logic. Hands-on with C++, Python, ROS/ROS2.",
  },

  /* --- ОПЫТ / EXPERIENCE -------------------------------------------------- *
   * Каждый блок раскрывается по клику и показывает highlights + медиа-плёнку. *
   * Чтобы добавить место работы - скопируй один { ... } блок и поправь.       */
  experience: [
    {
      company: "roboSculptor",
      url:      "https://robo-sculptor.com",
      logo:     "media/companies/robosculptor.png",
      role:     { ru: "Руководитель отдела проектирования и разработки", en: "Head of Software Engineering" },
      location: { ru: "ОАЭ", en: "UAE" },
      period:   { ru: "Июль 2025 - наст. время", en: "Jul 2025 - present" },
      summary: {
        ru: "Руководство отделом разработки (11 человек) ПО робототехнического комплекса для персонализированного восстановления мышц и контурной коррекции тела.",
        en: "Leading the software department (11 people) for a robotic complex for personalized muscle recovery and body contouring.",
      },
      highlights: [
        { group: { ru: "Обязанности:", en: "Responsibilities:" } },
        { ru: "Управление: выстраивание и ведение процессов разработки и релизной политики, постановка задач, менторство.", en: "Management: building and running development processes and release policy, task-setting, mentoring." },
        { key: true, ru: "Трансформация R&D-разработок в стабильный клиентский продукт: стандартизация процессов, внедрение CI/CD, управление релизами и деплоем на production-роботах.", en: "Turning R&D into a stable customer product: process standardization, CI/CD adoption, release management and deployment to production robots." },
        { ru: "Системная аналитика: проектирование и развитие программной архитектуры контура ПО, постановка функциональных и нефункциональных требований, оптимизация облачной инфраструктуры (AWS).", en: "Systems analysis: designing and evolving the software architecture, defining functional and non-functional requirements, optimizing cloud infrastructure (AWS)." },
        { key: true, ru: "Координация всех инженерных направлений в единую систему: компьютерное зрение и машинное обучение, робототехника, backend-системы, DevOps-инфраструктура и интерфейсная разработка.", en: "Orchestrating all engineering domains into one system: computer vision & ML, robotics, backend, DevOps and frontend." },
        { ru: "Решение административных вопросов по команде.", en: "Handling administrative matters across the team." },
        { group: { ru: "Что сделал ещё:", en: "What else I did:" } },
        { ru: "Выстроил процессы взаимодействия между 'продуктом, бизнесом, технической поддержкой' и разработкой.", en: "Set up workflows between product, business, support and engineering." },
        { ru: "Модифицировал и оптимизировал внутренние процессы: синк-встречи, демонстрации, 1-1, перфоманс-ревью.", en: "Reworked and optimized internal rituals: syncs, demos, 1-1s, performance reviews." },
        { ru: "Интегрировал полный контур авто-тестирования.", en: "Integrated a full automated-testing loop." },
        { ru: "Разработал мотивационную программу для команды.", en: "Built a team motivation program." },
        { ru: "Выстроил личный управленческий инструмент на базе Obsidian.", en: "Built a personal management toolkit on top of Obsidian." },
        { ru: "Получил опыт проблемных увольнений и сокращения команды.", en: "Gained experience with difficult terminations and team downsizing." },
        { key: true, ru: "Заменил двух сотрудников ИИ-агентами.", en: "Optimized the team by replacing two roles with AI agents." },
      ],
      skills: ["Управление командой", "System design", "Системная аналитика", "CI/CD", "Release management", "AWS", "Менторство", "AI-агенты"],
      mediaDir: "media/experience/robosculptor-lead",
    },

    {
      company: "roboSculptor",
      url:      "https://robo-sculptor.com",
      logo:     "media/companies/robosculptor.png",
      role:     { ru: "Robotics Software Engineer", en: "Robotics Software Engineer" },
      location: { ru: "ОАЭ", en: "UAE" },
      period:   { ru: "Март 2023 - Июль 2025 · 2 г 5 мес", en: "Mar 2023 - Jul 2025 · 2 yr 5 mo" },
      summary: {
        ru: "Разработка системы управления комплексом, включающим робота-манипулятора, линейный привод и множество элементов пневматики и автоматики.",
        en: "Development of the control system for a complex comprising a robotic manipulator, a linear drive, and numerous pneumatic and automation elements.",
      },
      highlights: [
        { key: true, ru: "Разработка и внедрение программной архитектуры для всего робототехнического комплекса на базе MQTT-топиков. Полное документирование, проработка связей и деление на функциональные независимые модули, разработка API и родительских (базовых) классов.", en: "Designed and implemented the software architecture for the entire robotic complex on top of MQTT topics. Full documentation, mapping of dependencies and split into independent functional modules, development of the API and parent (base) classes." },
        { ru: "Написание модулей для планирования пути и генерации траекторий для роботов Han's и AUBO.", en: "Wrote path-planning and trajectory-generation modules for Han's and AUBO robots." },
        { ru: "Внедрение и развёртывание ПО системы на базе Docker Compose.", en: "Integrated and deployed the system software with Docker Compose." },
        { key: true, ru: "Внедрение алгоритмов управления по силе и real-time коррекции траектории движения.", en: "Implemented force-control algorithms and real-time motion-trajectory correction." },
        { key: true, ru: "Проектирование и реализация системы безопасности на базе BehaviorTree.CPP (через BehaviorTree.ROS2). Дерево с приоритетным Fallback: аварийная остановка, контроль силомоментного датчика, контроль рабочей зоны, watchdog коммуникации, штатная работа. Отладка в реальном времени через Groot2.", en: "Designed and implemented the safety system using BehaviorTree.CPP (via BehaviorTree.ROS2). Priority-based Fallback tree: emergency stop, force-torque limit monitoring, workspace boundary checking, communication watchdog, normal operation. Real-time debugging with Groot2." },
        { ru: "Интеграция системы мониторинга Zabbix.", en: "Integrated the Zabbix monitoring system." },
        { ru: "Руководство junior-разработчиками (разработка сервиса для тестирования на Flask и алгоритмов управления).", en: "Mentored junior developers (a Flask-based testing service and control algorithms)." },
        { key: true, ru: "Разработка драйверов для устройств (поддерживающих MODBUS, UART, RS-485 и др.).", en: "Developed device drivers (supporting MODBUS, UART, RS-485 and others)." },
        { ru: "Разработка имитационной модели комплекса в среде PyBullet. Моделирование и детектирование столкновений.", en: "Developed a simulation model of the complex in PyBullet. Collision modelling and detection." },
        { ru: "Развёртывание и администрирование корпоративного GitLab.", en: "Deployed and administered the corporate GitLab." },
      ],
      skills: ["Python", "ROS", "MQTT", "BehaviorTree.CPP", "Groot2", "PyBullet", "Docker Compose", "Modbus", "Motion planning", "Force control"],
      mediaDir: "media/experience/robosculptor-engineer",
    },

    {
      company: { ru: "«В Теме»", en: "V Teme (fashion-tech)" },
      role:     { ru: "CTO / Co-founder", en: "CTO / Co-founder" },
      location: { ru: "Москва", en: "Moscow" },
      period:   { ru: "Апрель 2022 - Декабрь 2022", en: "Apr 2022 - Dec 2022" },
      summary: {
        ru: "Fashion-tech стартап: рекомендательная система и виртуальная AI-примерка для маркетплейса. Прошли 3 акселератора.",
        en: "Fashion-tech startup: recommendation engine and AI try-on for a marketplace. Passed 3 accelerators.",
      },
      highlights: [
        { ru: "Управление проектом.", en: "Project management." },
        { ru: "Продвижение проекта, инвестиционные и грантовые заявки.", en: "Project promotion, investment and grant applications." },
        { ru: "Тестирование и разработка технологий рекомендаций и виртуальной примерки.", en: "R&D of the recommendation and virtual try-on tech." },
      ],
      skills: ["PyTorch", "OpenCV", "Figma"],
      mediaDir: "media/experience/v-teme",
    },
  ],

  /* --- ПРОЕКТЫ И СОРЕВНОВАНИЯ / PROJECTS & COMPETITIONS -------------------- *
   * Хакатоны и олимпиады с дронами. Карточки с медиа.                        */
  projects: [
    {
      title:  { ru: "Pet-project: Коммуницирующий робот-гуманоид с физическим выполнением команд", en: "Pet-project: A communicating humanoid robot that physically executes commands" },
      period: { ru: "2026", en: "2026" },
      summary: {
        ru: "Гуманоидный робот Unitree G1 в реальности или в Isaac Sim (+ Zoom) ведёт живой голосовой разговор. При просьбе выполнить физическое движение робот выполняет его. Реализован real-time конвейер STT - LLM-агент - Actions + TTS. На GPU-машине две нейросетевые политики: ProtoMotions (mimic для жестов) и базовая RL-модель (для locomotion) плавно смешиваются и управляют роботом. Отдельно собрал инструмент-вьюер для подготовки и редактирования библиотеки motion-клипов и диспетчерскую панель для контроля и ручной отладки.",
        en: "A Unitree G1 humanoid robot in the real world or in Isaac Sim (+ Zoom) holds a live voice conversation. When asked to perform a physical movement, the robot does it. I built a real-time pipeline: STT - LLM agent - Actions + TTS. On a GPU machine, two neural-network policies ProtoMotions (mimic, for gestures) and base RL-model (locomotion) are blended smoothly to control the robot. I also built a separate viewer tool to prepare and edit a library of motion clips, plus a control panel for monitoring and manual debugging.",
      },
      skills: ["Isaac Sim", "Isaac Lab", "ProtoMotions", "RL", "ElevenLabs", "Unitree G1"],
      media: [
        { src: "https://drive.google.com/file/d/1K9a53JldampiuKYQr5acrxaegn_zEDEt/view?usp=sharing", caption: { ru: "Танец с роботом", en: "Dancing" } },
      ],
      mediaDir: "media/projects/humanoid-zoom-demo",
    },
    {
      title:  { ru: "Дипломная работа (бакалавриат): Управление беспилотным автомобилем методом поведенческого клонирования.", en: "Bachelor's Thesis: Autonomous Vehicle Control via Behavioral Cloning." },
      period: { ru: "2023", en: "2023" },
      summary: {
        ru: "В рамках работы реализован CV end-to-end пайплайн с целью управление автомобилем в симуляторе CARLA. Система объединяла нейросетевые модели (детекция на базе YOLO, сегментационные нейросети для понимания сцены) с собственной CNN, обученной воспроизводить поведение водителя-эксперта по записанным демонстрациям. Низкоуровневое управление выполнял MPC-регулятор, а нейросеть принимала поведенческие решения верхнего уровня. Оркестрация режимов через SMACC2.",
        en: "Hybrid autonomous driving system in CARLA. A behavioral-cloning CNN (trained on expert recordings) made high-level steering decisions, while SMACC2 served as the top-level orchestrator managing operating modes and safety. The state machine handled mode transitions (manual/autonomous/emergency), while the neural network handled perception-to-action control. Low-level actuation via MPC. Perception stack: YOLO detection + U-Net segmentation.",
      },
      skills: ["PyTorch", "YOLO", "U-Net", "OpenCV", "CARLA", "MPC", "SMACC2"],
      media: [
        { src: "media/projects/diploma-behavioral-cloning/presentation.pdf", type: "pdf", poster: "assets/img/diploma-cover.jpg", caption: { ru: "Презентация диплома (PDF)", en: "Thesis presentation (PDF)" } },
      ],
      mediaDir: "media/projects/diploma-behavioral-cloning",
    },
    {
      title:  { ru: "Кванториада 2020 - VTOL-курьер", en: "Quantoriada 2020 - courier convertoplane" },
      period: { ru: "2020", en: "2020" },
      summary: {
        ru: "VTOL для доставки медицинских анализов с автономной навигацией indoor и outdoor. Дрон подключён к мобильной сети, получает точки полёта; управление через бота в ВК по геоточке. Поведенческая система полёта построена на иерархической машине состояний SMACC2: суперсостояния MISSION (PREFLIGHT → TAKEOFF → NAVIGATE → EXECUTE_TASK → RETURN → LANDING) и EMERGENCY (HOVER, EMERGENCY_LAND). Ортогональная зона мониторинга параллельно отслеживает батарею, качество локализации и watchdog связи.",
        en: "A convertoplane for medical sample delivery with autonomous indoor and outdoor navigation. Connected to a cellular network, receives flight waypoints; controlled via a VK bot by geolocation. Flight behavior system built on SMACC2 hierarchical state machine: MISSION superstate (PREFLIGHT → TAKEOFF → NAVIGATE → EXECUTE_TASK → RETURN → LANDING) and EMERGENCY superstate (HOVER, EMERGENCY_LAND) reachable from any mission state. An orthogonal monitoring zone tracks battery level, localization quality, and communication watchdog in parallel, handling off-nominal scenarios.",
      },
      skills: ["PX4", "MavROS", "ROS1", "SMACC2", "State machines", "telebot", "SQL"],
      mediaDir: "media/projects/quantoriada-2020",
    },
    {
      title:  { ru: "НТИ «Интеллектуальные робототехнические системы» 2020", en: "NTI “Intelligent Robotic Systems” 2020" },
      period: { ru: "2020", en: "2020" },
      summary: {
        ru: "Дрон ищет шарики и корзины на полигоне и распределяет их по цвету.",
        en: "A drone finds balls and baskets on a field and sorts them by color.",
      },
      skills: ["PX4", "MavROS", "ROS1", "OpenCV"],
      mediaDir: "media/projects/nti-irs-2020",
    },
    {
      title:  { ru: "CopterHack 2019 - дрон-граффити", en: "CopterHack 2019 - graffiti drone" },
      period: { ru: "2019", en: "2019" },
      summary: {
        ru: "Пользователь шлёт боту в ВК рисунок - дрон повторяет его RGB-матрицей; изображение проявляется на длинной выдержке (freeze light).",
        en: "A user sends a drawing to a VK bot - the drone reproduces it with an RGB matrix; the image appears via long-exposure (freeze light).",
      },
      skills: ["ArduPilot", "MavLink", "vk-api", "ROS1"],
      mediaDir: "media/projects/copterhack-2019",
    },
    {
      title:  { ru: "НТИ «Автономные транспортные системы» 2019", en: "NTI “Autonomous Transport Systems” 2019" },
      period: { ru: "2019", en: "2019" },
      summary: {
        ru: "Система автоуправления моделью беспилотного автомобиля: удержание полосы, повороты на перекрёстках, реакция на светофор.",
        en: "Self-driving model car control: lane keeping, intersection turns, traffic-light response.",
      },
      skills: ["ROS1", "OpenCV", "PyTorch"],
      mediaDir: "media/projects/nti-ats-2019",
    },
  ],

  /* --- НАВЫКИ / SKILLS (сгруппированы) ------------------------------------ */
  skills: [
    { group: { ru: "ЯП", en: "Programming" }, items: ["*Python", "*C++"] },
    { group: { ru: "Системы принятия решений", en: "Decision-making" }, items: ["*BehaviorTree.CPP", "*SMACC2", { ru: "*Деревья поведений", en: "*Behavior trees" }, { ru: "*Конечные автоматы / HSM", en: "*State machines / HSM" }, { ru: "Гибридные системы (ML + правила)", en: "Hybrid systems (AI/ML + rules)" }, "Groot2"] },
    { group: { ru: "Робототехника и управление", en: "Robotics & control" }, items: ["*ROS2", "MQTT", "*Motion / Path planning", "Manipulation", "*MoveIt", "ProtoMotion", "Force-torque control", "*PX4", "ArduPilot", "MavROS", "Modbus", "UART / RS-485", { ru: "ТАУ / Control Theory", en: "Control Theory" }, { ru: "БПЛА / UAV", en: "UAV" }] },
    { group: { ru: "ML и CV", en: "ML & CV" }, items: ["*PyTorch", "OpenCV", "YOLO", "Roboflow", "Pandas"] },
    { group: { ru: "Симуляторы и другие инструменты", en: "Simulators & other tools" }, items: ["PyBullet", "*Isaac Sim", "Isaac Lab", "MATLAB", "Autodesk Inventor", { ru: "3D-печать", en: "3D printing" }] },
    { group: { ru: "Инфраструктура и DevOps", en: "Infra & DevOps" }, items: ["Docker", "Docker Compose", "*GitLab CI/CD", "*AWS", "Zabbix", "Prometheus", "Grafana", "Proxmox", "Linux", "Git"] },
    { group: { ru: "Web", en: "Web" }, items: ["HTML", "CSS", "Django", "Flask"] },
  ],

  /* --- ОБРАЗОВАНИЕ / EDUCATION -------------------------------------------- */
  education: [
    {
      logo:   "media/bauman-logo.png",
      org:    { ru: "МГТУ им. Н.Э. Баумана", en: "Bauman Moscow State Technical University" },
      degree: { ru: "Магистр - Управление и информатика в технических системах", en: "Master's - Informatics & Control Systems" },
      period: { ru: "2023 - 2025", en: "2023 - 2025" },
    },
    {
      logo:   "media/bauman-logo.png",
      org:    { ru: "МГТУ им. Н.Э. Баумана", en: "Bauman Moscow State Technical University" },
      degree: { ru: "Бакалавр - Управление и информатика в технических системах", en: "Bachelor's - Informatics & Control Systems" },
      period: { ru: "2019 - 2023", en: "2019 - 2023" },
    },
  ],

  /* Доп. курсы (одной строкой каждый) / Extra courses */
  courses: [
    { ru: "Профессиональная переподготовка «Web-разработчик» - МГТУ им. Баумана, 2023", en: "Web Developer retraining - Bauman MSTU, 2023" },
    { ru: "Нейронные сети и компьютерное зрение - Samsung, 2022", en: "Neural networks & computer vision - Samsung, 2022" },
    { ru: "Нейронные сети - Bioinformatics Institute, 2022", en: "Neural networks - Bioinformatics Institute, 2022" },
    { ru: "Введение в ROS - СПбГЭТУ «ЛЭТИ», 2020", en: "Intro to ROS - LETI, 2020" },
  ],

  /* --- ЯЗЫКИ / SPOKEN LANGUAGES ------------------------------------------- */
  languages: [
    { name: { ru: "Английский", en: "English" }, level: { ru: "B2 - выше среднего", en: "B2 - upper-intermediate" } },
    { name: { ru: "Русский", en: "Russian" }, level: { ru: "Родной", en: "Native" } },
  ],

  /* Подпись в самом низу страницы / footer note */
  footer: {
    ru: "Сделано как «живое» резюме - обновляется правкой одного файла content.js.",
    en: "Built as a living resume - updated by editing a single file, content.js.",
  },
};
