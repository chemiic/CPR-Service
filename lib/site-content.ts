export const siteConfig = {
  companyName: 'ООО «Лидер Автодиагностики»',
  shortName: 'ЛАД',
  tagline: 'Лидер Автодиагностики',
  description:
    'Компьютерная диагностика и ремонт электронных блоков французских автомобилей Citroën, Peugeot, Renault.',
  phone: '+7 (926) 332-XX-XX',
  phoneHref: 'tel:+7926332',
  workingHours: 'с 9:00 до 21:00',
  brands: ['Citroën', 'Peugeot', 'Renault'] as const,
};

export const heroContent = {
  title: 'Выездная диагностика и ремонт французских автомобилей',
  subtitle:
    'Компьютерная диагностика, автоподбор, ремонт ЭБУ и БСИ — Citroën, Peugeot, Renault',
  cta: 'Записаться на диагностику',
};

export const ctaContent = {
  title: 'Выездная диагностика',
  titleAccent: 'экспертом',
  subtitle: 'Приедем к вам для полной проверки автомобиля перед покупкой или ремонтом',
  price: 'от 5 000 ₽',
  area: 'по Москве, +20 км от МКАД',
  button: 'Заказать выезд',
};

export type Service = {
  id: string;
  title: string;
  description: string;
  price?: string;
};

export const services: Service[] = [
  {
    id: 'diagnostics',
    title: 'Комплексная диагностика',
    description:
      'Полная компьютерная диагностика автомобилей Citroën, Peugeot и Renault с выявлением неисправностей.',
    price: 'от 3 000 ₽',
  },
  {
    id: 'car-selection',
    title: 'Автоподбор',
    description:
      'Профессиональный подбор автомобилей Citroën, Renault и Peugeot с проверкой технического состояния.',
  },
  {
    id: 'ecu-repair',
    title: 'Диагностика и ремонт электронных блоков',
    description:
      'Диагностика и ремонт электронных блоков управления, восстановление работоспособности систем автомобиля.',
  },
  {
    id: 'cloning',
    title: 'Клонирование ЭБУ и БСИ',
    description:
      'Клонирование блоков ЭБУ и БСИ с переносом данных и настроек на новый модуль.',
    price: 'от 12 000 ₽',
  },
  {
    id: 'fault-diagnostics',
    title: 'Диагностика неисправностей',
    description:
      'Точное определение причин неисправностей с использованием специализированного оборудования.',
  },
];

export const pricing = [
  {
    id: 'diagnostics',
    title: 'Комплексная диагностика',
    price: 'от 3 000 ₽',
  },
  {
    id: 'mobile',
    title: 'Выездная диагностика',
    price: 'от 5 000 ₽',
  },
  {
    id: 'cloning',
    title: 'Клонирование ЭБУ и БСИ',
    price: 'от 12 000 ₽',
  },
];

export const features = [
  {
    id: 'specialization',
    title: 'Специализация на французских авто',
    text: 'Глубокая экспертиза по Citroën, Peugeot и Renault — знаем особенности каждой марки.',
    icon: 'car' as const,
  },
  {
    id: 'ecu',
    title: 'ЭБУ и БСИ',
    text: 'Диагностика, ремонт и клонирование электронных блоков управления и блоков комфорта.',
    icon: 'chip' as const,
  },
  {
    id: 'mobile',
    title: 'Выездная диагностика',
    text: 'Приедем к вам для диагностики на месте — удобно и быстро.',
    icon: 'location' as const,
  },
];

export const aboutText = {
  lead: 'ООО «Лидер Автодиагностики» — специализированный сервис по компьютерной диагностике и ремонту электроники французских автомобилей.',
  body: 'Мы работаем исключительно с марками Citroën, Peugeot и Renault. Выполняем комплексную диагностику, автоподбор, ремонт электронных блоков и клонирование ЭБУ и БСИ. Используем профессиональное оборудование и накопленный опыт для точного определения неисправностей.',
};

export const navigation = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services' },
  { label: 'Контакты', href: '/contacts' },
];
