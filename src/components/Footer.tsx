import { useI18n } from "@/contexts/I18nContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 border-2 border-foreground flex items-center justify-center">
                <span className="text-xs font-bold tracking-tighter">OE</span>
              </div>
              <span className="text-lg font-bold tracking-wide">OSNOVA ESTATE</span>
            </div>
            <p className="text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Link to="/properties" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.properties")}</Link>
            <Link to="/analytics" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.analytics")}</Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.about")}</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{t("nav.contact")}</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>info@osnova-estate.com</p>
            <p>+7 (495) 000-00-00</p>
            <p className="mt-4">Moscow, Russia</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} OSNOVA ESTATE. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
