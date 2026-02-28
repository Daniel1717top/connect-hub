import { useI18n } from "@/contexts/I18nContext";
import { Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ru" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded text-sm font-medium text-foreground hover:bg-primary/10 transition-colors"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4" />
      <span className="uppercase tracking-wider">{lang}</span>
    </button>
  );
};

export default LanguageSwitcher;
