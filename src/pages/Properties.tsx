import { useI18n } from "@/contexts/I18nContext";
import { Building2 } from "lucide-react";

const allProperties = [
  { id: 1, nameEn: "Steel Tower Residences", nameUk: "Резиденції Сталева Вежа", location: "Kyiv, Pechersk", area: "240 m²", price: "€1.2M", roi: "8.4%", type: "Residential" },
  { id: 2, nameEn: "Granite Business Center", nameUk: "Бізнес-центр Граніт", location: "Kyiv, Podil", area: "1,800 m²", price: "€4.5M", roi: "6.9%", type: "Commercial" },
  { id: 3, nameEn: "Concrete Loft Complex", nameUk: "Лофт-комплекс Бетон", location: "Lviv, City Centre", area: "380 m²", price: "€890K", roi: "7.8%", type: "Residential" },
  { id: 4, nameEn: "Iron Gate Office Park", nameUk: "Офіс-парк Залізні Ворота", location: "Kyiv, Obolon", area: "3,200 m²", price: "€8.1M", roi: "6.2%", type: "Commercial" },
  { id: 5, nameEn: "Basalt Heights", nameUk: "Базальтові Висоти", location: "Odesa, Arcadia", area: "420 m²", price: "€1.8M", roi: "9.1%", type: "Residential" },
  { id: 6, nameEn: "Alloy Warehouse District", nameUk: "Складський район Сплав", location: "Dnipro, Industrial", area: "5,600 m²", price: "€3.2M", roi: "11.3%", type: "Industrial" },
];

const Properties = () => {
  const { t, lang } = useI18n();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">{t("properties.title")}</h1>
        <p className="text-muted-foreground mb-12">OSNOVA ESTATE — Premium portfolio</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProperties.map((p) => (
            <div key={p.id} className="border border-border rounded overflow-hidden bg-card hover:border-primary/50 transition-colors">
              <div className="h-48 bg-gradient-to-br from-muted to-primary/10 flex items-center justify-center">
                <Building2 className="w-16 h-16 text-primary/30" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{lang === "en" ? p.nameEn : p.nameUk}</h3>
                  <span className="text-xs px-2 py-0.5 bg-muted rounded text-muted-foreground">{p.type}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{p.location}</p>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">{t("properties.area")}: {p.area}</span>
                  <span className="font-medium text-primary">{t("properties.roi")}: {p.roi}</span>
                </div>
                <span className="text-xl font-bold">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
