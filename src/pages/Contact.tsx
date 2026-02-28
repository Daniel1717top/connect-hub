import { useState } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { toast } from "sonner";

const Contact = () => {
  const { t, lang } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(lang === "en" ? "Message sent successfully." : "Повідомлення надіслано успішно.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6 max-w-xl">
        <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-muted-foreground mb-10">OSNOVA ESTATE</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("contact.name")}</label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-2.5 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("contact.email")}</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2.5 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("contact.message")}</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-2.5 bg-card border border-border rounded text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-foreground text-background font-medium text-sm tracking-wide rounded hover:opacity-90 transition-opacity"
          >
            {t("contact.send")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
