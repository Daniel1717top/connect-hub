import { useI18n } from "@/contexts/I18nContext";
import { Link } from "react-router-dom";
import { TrendingUp, Building2, BarChart3, Shield, ArrowRight } from "lucide-react";

const properties = [
  { id: 1, nameEn: "Steel Tower Residences", nameRu: "Резиденции Стальная Башня", location: "Moscow, Presnensky", area: "240 m²", price: "$1.2M", roi: "8.4%" },
  { id: 2, nameEn: "Granite Business Center", nameRu: "Бизнес-центр Гранит", location: "Moscow, Tverskoy", area: "1,800 m²", price: "$4.5M", roi: "6.9%" },
  { id: 3, nameEn: "Concrete Loft Complex", nameRu: "Лофт-комплекс Бетон", location: "St. Petersburg, Petrogradsky", area: "380 m²", price: "$890K", roi: "7.8%" },
];

const Index = () => {
  const { t, lang } = useI18n();

  const services = [
    { icon: TrendingUp, title: t("services.investment.title"), desc: t("services.investment.desc") },
    { icon: Building2, title: t("services.property.title"), desc: t("services.property.desc") },
    { icon: BarChart3, title: t("services.analytics.title"), desc: t("services.analytics.desc") },
    { icon: Shield, title: t("services.legal.title"), desc: t("services.legal.desc") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-primary/5" />
        <div className="absolute top-20 right-20 w-96 h-96 border border-border/30 rotate-45 hidden lg:block" />
        <div className="absolute bottom-32 left-16 w-64 h-64 border border-border/20 rotate-12 hidden lg:block" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in">
            OSNOVA ESTATE
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background font-medium text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
            >
              {t("hero.cta")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/analytics"
              className="inline-flex items-center gap-2 px-8 py-3 border border-border font-medium text-sm tracking-wide rounded hover:bg-muted transition-colors"
            >
              {t("hero.secondary")}
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t("services.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-6 border border-border rounded bg-background hover:border-primary/50 transition-colors group"
              >
                <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">{t("properties.title")}</h2>
            <Link to="/properties" className="text-sm text-primary hover:underline flex items-center gap-1">
              {t("hero.cta")} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {properties.map((p) => (
              <div key={p.id} className="border border-border rounded overflow-hidden bg-card hover:border-primary/50 transition-colors group">
                <div className="h-48 bg-gradient-to-br from-muted to-primary/10 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-primary/30" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1">{lang === "en" ? p.nameEn : p.nameRu}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{p.location}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{t("properties.area")}: {p.area}</span>
                    <span className="font-medium text-primary">{t("properties.roi")}: {p.roi}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-bold">{p.price}</span>
                    <Link to="/properties" className="text-xs text-primary hover:underline">{t("properties.details")} →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
