import { useI18n } from "@/contexts/I18nContext";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  const { t, lang } = useI18n();
  const isEn = lang === "en";

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{t("about.title")}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-16">{t("about.desc")}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Target, titleEn: "Precision", titleUk: "Точність", descEn: "Every decision is backed by rigorous data analysis and market intelligence.", descUk: "Кожне рішення підкріплене ретельним аналізом даних та ринковою аналітикою." },
            { icon: Eye, titleEn: "Transparency", titleUk: "Прозорість", descEn: "Full visibility into portfolio performance, costs, and strategic direction.", descUk: "Повна прозорість щодо результатів портфеля, витрат та стратегічного напрямку." },
            { icon: Award, titleEn: "Excellence", titleUk: "Досконалість", descEn: "Institutional-grade standards applied to every asset and transaction.", descUk: "Стандарти інституційного рівня для кожного активу та угоди." },
          ].map((item, i) => (
            <div key={i} className="p-8 border border-border rounded bg-card">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{isEn ? item.titleEn : item.titleUk}</h3>
              <p className="text-sm text-muted-foreground">{isEn ? item.descEn : item.descUk}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "12+", labelEn: "Years", labelUk: "Років" },
            { value: "€240M+", labelEn: "Assets Managed", labelUk: "Активів під управлінням" },
            { value: "94%", labelEn: "Client Retention", labelUk: "Утримання клієнтів" },
            { value: "180+", labelEn: "Properties", labelUk: "Об'єктів" },
          ].map((s, i) => (
            <div key={i} className="p-6 border border-border rounded">
              <p className="text-3xl font-bold mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{isEn ? s.labelEn : s.labelUk}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
