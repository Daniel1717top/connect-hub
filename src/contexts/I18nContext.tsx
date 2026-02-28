import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

type Lang = "en" | "uk";

const translations: Record<string, Record<Lang, string>> = {
  "nav.home": { en: "Home", uk: "Головна" },
  "nav.properties": { en: "Properties", uk: "Об'єкти" },
  "nav.analytics": { en: "Analytics", uk: "Аналітика" },
  "nav.about": { en: "About", uk: "Про нас" },
  "nav.contact": { en: "Contact", uk: "Контакти" },
  "hero.title": { en: "Your Foundation for Premium Real Estate", uk: "Ваш фундамент преміальної нерухомості" },
  "hero.subtitle": { en: "Strategic investments. Architectural excellence. Measurable returns.", uk: "Стратегічні інвестиції. Архітектурна досконалість. Вимірювана дохідність." },
  "hero.cta": { en: "Explore Properties", uk: "Переглянути об'єкти" },
  "hero.secondary": { en: "Investment Analysis", uk: "Аналіз інвестицій" },
  "services.title": { en: "Our Services", uk: "Наші послуги" },
  "services.investment.title": { en: "Investment Consulting", uk: "Інвестиційний консалтинг" },
  "services.investment.desc": { en: "Data-driven portfolio strategies for optimal real estate returns.", uk: "Стратегії портфеля на основі даних для оптимальної дохідності." },
  "services.property.title": { en: "Property Management", uk: "Управління об'єктами" },
  "services.property.desc": { en: "End-to-end operational management of premium assets.", uk: "Комплексне операційне управління преміальними активами." },
  "services.analytics.title": { en: "Market Analytics", uk: "Аналітика ринку" },
  "services.analytics.desc": { en: "Real-time market intelligence and trend forecasting.", uk: "Ринкова аналітика в реальному часі та прогнозування трендів." },
  "services.legal.title": { en: "Legal Support", uk: "Юридична підтримка" },
  "services.legal.desc": { en: "Comprehensive due diligence and transaction structuring.", uk: "Комплексна перевірка та структурування угод." },
  "properties.title": { en: "Featured Properties", uk: "Обрані об'єкти" },
  "properties.area": { en: "Area", uk: "Площа" },
  "properties.roi": { en: "ROI", uk: "Дохідність" },
  "properties.details": { en: "View Details", uk: "Детальніше" },
  "analytics.title": { en: "Market Analytics Dashboard", uk: "Панель аналітики ринку" },
  "analytics.marketTrends": { en: "Market Trends", uk: "Тренди ринку" },
  "analytics.priceIndex": { en: "Price Index", uk: "Індекс цін" },
  "analytics.volume": { en: "Transaction Volume", uk: "Обсяг угод" },
  "analytics.yield": { en: "Average Yield", uk: "Середня дохідність" },
  "analytics.overview": { en: "Portfolio Overview", uk: "Огляд портфеля" },
  "analytics.totalValue": { en: "Total Portfolio Value", uk: "Загальна вартість портфеля" },
  "analytics.activeAssets": { en: "Active Assets", uk: "Активні об'єкти" },
  "analytics.avgReturn": { en: "Avg. Annual Return", uk: "Сер. річна дохідність" },
  "analytics.occupancy": { en: "Occupancy Rate", uk: "Рівень заповнюваності" },
  "footer.rights": { en: "All rights reserved.", uk: "Усі права захищено." },
  "footer.tagline": { en: "Building foundations for lasting wealth.", uk: "Створюємо фундамент довгострокового добробуту." },
  "chat.title": { en: "Investment Consultant", uk: "Інвестиційний консультант" },
  "chat.placeholder": { en: "Ask about investment opportunities...", uk: "Запитайте про інвестиційні можливості..." },
  "chat.welcome": { en: "Welcome to OSNOVA ESTATE. I'm your Senior Investment Consultant. How may I assist you with your real estate portfolio today?", uk: "Ласкаво просимо до OSNOVA ESTATE. Я ваш старший інвестиційний консультант. Чим можу допомогти з вашим портфелем нерухомості?" },
  "about.title": { en: "About OSNOVA ESTATE", uk: "Про компанію OSNOVA ESTATE" },
  "about.desc": { en: "Founded on principles of precision and integrity, OSNOVA ESTATE delivers institutional-grade real estate investment solutions.", uk: "Заснована на принципах точності та доброчесності, OSNOVA ESTATE надає інвестиційні рішення інституційного рівня." },
  "contact.title": { en: "Get in Touch", uk: "Зв'язатися з нами" },
  "contact.name": { en: "Full Name", uk: "Повне ім'я" },
  "contact.email": { en: "Email", uk: "Електронна пошта" },
  "contact.message": { en: "Message", uk: "Повідомлення" },
  "contact.send": { en: "Send Message", uk: "Надіслати повідомлення" },
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
