import { useI18n } from "@/contexts/I18nContext";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  const { t } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-16">{t("about.desc")}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, titleEn: "Precision", titleRu: "Точность", descEn: "Every decision is backed by rigorous data analysis and market intelligence.", descRu: "Каждое решение подкреплено строгим анализом данных и рыночной аналитикой." },
            { icon: Eye, titleEn: "Transparency", titleRu: "Прозрачность", descEn: "Full visibility into portfolio performance, costs, and strategic direction.", descRu: "Полная прозрачность в отношении результатов портфеля, затрат и стратегии." },
            { icon: Award, titleEn: "Excellence", titleRu: "Совершенство", descEn: "Institutional-grade standards applied to every asset and transaction.", descRu: "Стандарты институционального уровня для каждого актива и сделки." },
          ].map((item, i) => (
            <div key={i} className="p-8 border border-border rounded bg-card">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{item[`title${t("nav.home") === "Home" ? "En" : "Ru"}`] as string}</h3>
              <p className="text-sm text-muted-foreground">{item[`desc${t("nav.home") === "Home" ? "En" : "Ru"}`] as string}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "12+", labelEn: "Years", labelRu: "Лет" },
            { value: "$240M+", labelEn: "Assets Managed", labelRu: "Активов под управлением" },
            { value: "94%", labelEn: "Client Retention", labelRu: "Удержание клиентов" },
            { value: "180+", labelEn: "Properties", labelRu: "Объектов" },
          ].map((s, i) => (
            <div key={i} className="p-6 border border-border rounded">
              <p className="text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{t("nav.home") === "Home" ? s.labelEn : s.labelRu}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
