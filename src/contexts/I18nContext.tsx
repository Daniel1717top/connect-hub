import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "en" | "ru";

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { en: "Home", ru: "Главная" },
  "nav.properties": { en: "Properties", ru: "Объекты" },
  "nav.analytics": { en: "Analytics", ru: "Аналитика" },
  "nav.about": { en: "About", ru: "О нас" },
  "nav.contact": { en: "Contact", ru: "Контакты" },
  "hero.title": { en: "Your Foundation for Premium Real Estate", ru: "Ваш фундамент премиальной недвижимости" },
  "hero.subtitle": { en: "Strategic investments. Architectural excellence. Measurable returns.", ru: "Стратегические инвестиции. Архитектурное совершенство. Измеримая доходность." },
  "hero.cta": { en: "Explore Properties", ru: "Смотреть объекты" },
  "hero.secondary": { en: "Investment Analysis", ru: "Анализ инвестиций" },
  "services.title": { en: "Our Services", ru: "Наши услуги" },
  "services.investment.title": { en: "Investment Consulting", ru: "Инвестиционный консалтинг" },
  "services.investment.desc": { en: "Data-driven portfolio strategies for optimal real estate returns.", ru: "Стратегии портфеля на основе данных для оптимальной доходности." },
  "services.property.title": { en: "Property Management", ru: "Управление объектами" },
  "services.property.desc": { en: "End-to-end operational management of premium assets.", ru: "Комплексное операционное управление премиальными активами." },
  "services.analytics.title": { en: "Market Analytics", ru: "Аналитика рынка" },
  "services.analytics.desc": { en: "Real-time market intelligence and trend forecasting.", ru: "Рыночная аналитика в реальном времени и прогнозирование трендов." },
  "services.legal.title": { en: "Legal Support", ru: "Юридическая поддержка" },
  "services.legal.desc": { en: "Comprehensive due diligence and transaction structuring.", ru: "Комплексная проверка и структурирование сделок." },
  "properties.title": { en: "Featured Properties", ru: "Избранные объекты" },
  "properties.area": { en: "Area", ru: "Площадь" },
  "properties.roi": { en: "ROI", ru: "Доходность" },
  "properties.details": { en: "View Details", ru: "Подробнее" },
  "analytics.title": { en: "Market Analytics Dashboard", ru: "Панель аналитики рынка" },
  "analytics.marketTrends": { en: "Market Trends", ru: "Тренды рынка" },
  "analytics.priceIndex": { en: "Price Index", ru: "Индекс цен" },
  "analytics.volume": { en: "Transaction Volume", ru: "Объём сделок" },
  "analytics.yield": { en: "Average Yield", ru: "Средняя доходность" },
  "analytics.overview": { en: "Portfolio Overview", ru: "Обзор портфеля" },
  "analytics.totalValue": { en: "Total Portfolio Value", ru: "Общая стоимость портфеля" },
  "analytics.activeAssets": { en: "Active Assets", ru: "Активные объекты" },
  "analytics.avgReturn": { en: "Avg. Annual Return", ru: "Ср. годовая доходность" },
  "analytics.occupancy": { en: "Occupancy Rate", ru: "Уровень заполняемости" },
  "footer.rights": { en: "All rights reserved.", ru: "Все права защищены." },
  "footer.tagline": { en: "Building foundations for lasting wealth.", ru: "Создаём фундамент долгосрочного благосостояния." },
  "chat.title": { en: "Investment Consultant", ru: "Инвестиционный консультант" },
  "chat.placeholder": { en: "Ask about investment opportunities...", ru: "Спросите об инвестиционных возможностях..." },
  "chat.welcome": { en: "Welcome to OSNOVA ESTATE. I'm your Senior Investment Consultant. How may I assist you with your real estate portfolio today?", ru: "Добро пожаловать в OSNOVA ESTATE. Я ваш старший инвестиционный консультант. Чем могу помочь с вашим портфелем недвижимости?" },
  "about.title": { en: "About OSNOVA ESTATE", ru: "О компании OSNOVA ESTATE" },
  "about.desc": { en: "Founded on principles of precision and integrity, OSNOVA ESTATE delivers institutional-grade real estate investment solutions.", ru: "Основанная на принципах точности и честности, OSNOVA ESTATE предоставляет инвестиционные решения институционального уровня." },
  "contact.title": { en: "Get in Touch", ru: "Связаться с нами" },
  "contact.name": { en: "Full Name", ru: "Полное имя" },
  "contact.email": { en: "Email", ru: "Электронная почта" },
  "contact.message": { en: "Message", ru: "Сообщение" },
  "contact.send": { en: "Send Message", ru: "Отправить сообщение" },
};

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = useCallback(
    (key: string) => translations[key]?.[lang] || key,
    [lang]
  );
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);
