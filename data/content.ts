export const navItems = ["ДИЗАЙН", "СЕРВЕРЫ", "ПЛАНЫ", "О НАС"];

export const heroCards = [
  { title: "Motion Tools", image: "/images/hero-motion-tools.jpg" },
  { title: "House Promo", image: "/images/hero-house.jpg" },
  { title: "Concert Promo", image: "/images/hero-concert.jpg" },
  { title: "Dental Promo", image: "/images/hero-braces.jpg" },
  { title: "Travel Egypt", image: "/images/hero-egypt.jpg" },
  { title: "Moto Event", image: "/images/hero-moto.jpg" },
  { title: "Garden Promo", image: "/images/hero-garden.jpg" },
  { title: "Avatar Promo", image: "/images/hero-avatar.jpg" },
  { title: "Karakol Tour", image: "/images/hero-karakol.jpg" },
  { title: "Family Promo", image: "/images/hero-parents.jpg" },
  { title: "Uzbekistan Tour", image: "/images/hero-tour.jpg" },
  { title: "Development Studio", image: "/images/hero-dev-office.jpg" },
  { title: "Dashboard UI", image: "/images/hero-dashboard.jpg" },
  { title: "Architecture UI", image: "/images/hero-architecture.jpg" },
  { title: "3D Motion", image: "/images/hero-neon.jpg" },
];

export const expertiseCards = [
  { title: "MOTION\nDESIGN", label: "Motion Design", image: "/images/expertise-motion.jpg" },
  { title: "UX/UI\nДИЗАЙН", label: "UI/UX", image: "/images/expertise-ui.jpg" },
  { title: "ГРАФИЧЕСКИЙ\nДИЗАЙН", label: "Графический дизайн", image: "/images/expertise-graphic.jpg" },
  { title: "СЕРВЕРА\nHOSTS", label: "Сервера/Hosts", image: "/images/expertise-hosts.jpg" },
  { title: "КОДИНГ\nBACKEND", label: "Backend", image: "/images/expertise-backend.jpg" },
];

export const clients = [
  {
    name: "Ош Мэрия",
    mark: "ОШ",
    primary: "ОШ",
    secondary: "МЭРИЯ",
    variant: "osh-city",
  },
  {
    name: "Ош базар",
    mark: "ОШ",
    primary: "ОШ",
    secondary: "БАЗАР",
    variant: "osh-bazar",
  },
  {
    name: "mask.kg",
    mark: "mk",
    primary: "mask",
    secondary: ".kg",
    variant: "mask",
  },
  {
    name: "manas-town.kg",
    mark: "M",
    primary: "MANAS",
    secondary: "TOWN.KG",
    variant: "manas-town",
  },
  {
    name: "Nurcinema",
    mark: "N",
    primary: "NUR",
    secondary: "cinema",
    variant: "nurcinema",
  },
  {
    name: "Everlight",
    mark: "EL",
    primary: "EVER",
    secondary: "light",
    variant: "everlight",
  },
  {
    name: "Skytrainer",
    mark: "S",
    primary: "SKY",
    secondary: "trainer",
    variant: "skytrainer",
  },
  {
    name: "EliteHouse",
    mark: "EH",
    primary: "ELITE",
    secondary: "HOUSE",
    variant: "elitehouse",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "АНАЛИЗ И СТРАТЕГИЯ.",
    description: "ПОГРУЖЕНИЕ В БИЗНЕС-ЗАДАЧИ, СБОР ТЕХНИЧЕСКИХ ТРЕБОВАНИЙ И ФОРМИРОВАНИЕ ВИЗУАЛЬНОЙ КОНЦЕПЦИИ.",
  },
  {
    number: "02",
    title: "ДИЗАЙН И РАЗРАБОТКА.",
    description: "СОЗДАЕМ ИНТЕРФЕЙСЫ, МОУШН-СЦЕНАРИИ И ТЕХНИЧЕСКУЮ ОСНОВУ С ТОЧНОЙ СБОРКОЙ ПОД ЗАДАЧУ.",
  },
  {
    number: "03",
    title: "ЗАПУСК И ПОДДЕРЖКА.",
    description: "ПУБЛИКУЕМ ПРОДУКТ, ОПТИМИЗИРУЕМ ПРОИЗВОДИТЕЛЬНОСТЬ И СОПРОВОЖДАЕМ РОСТ ПОСЛЕ РЕЛИЗА.",
  },
];

export const pricingPlans = [
  {
    name: "START",
    price: "от 399$",
    description: "Для малого бизнеса и стартапов",
    features: [
      "Одностраничный сайт",
      "UI/UX дизайн",
      "Адаптация под телефон",
      "До 5 страниц",
      "Telegram интеграция",
      "Базовое SEO",
      "Годовой сервер",
      "SSL сертификат",
      "До 14 дней поддержки",
    ],
  },
  {
    name: "BUSINESS",
    price: "от 799$",
    description: "Самый популярный",
    featured: true,
    features: [
      "Корпоративный сайт",
      "Интернет-магазин",
      "CRM интеграция",
      "Telegram Bot",
      "AI функции",
      "Панель администратора",
      "Анимации",
      "Всё из пакета START",
      "До 30 дней поддержки",
    ],
  },
  {
    name: "ENTERPRISE",
    price: "от 2499$",
    description: "Для крупных компаний",
    features: [
      "Индивидуальная разработка",
      "Web + Mobile",
      "CRM/ERP системы",
      "AI решения",
      "Автоматизация бизнеса",
      "API интеграции",
      "Выделенный сервер",
      "Персональный менеджер",
      "Поддержка 24/7",
    ],
  },
];

export const contacts = {
  email: "HELLO@WILLO.DESIGN",
  phone: "+996 999 151 000",
  address: "УЛ. ИБРАИМОВА 115/1",
};
