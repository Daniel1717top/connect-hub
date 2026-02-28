import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

const botResponses: Record<string, { en: string; uk: string }[]> = {
  default: [
    {
      en: "Based on current market data, commercial properties in the central business district are showing 7.2% annual yield. Shall I provide a detailed breakdown?",
      uk: "За поточними ринковими даними, комерційна нерухомість у центральному діловому районі демонструє річну дохідність 7,2%. Надати детальну розбивку?",
    },
    {
      en: "Our portfolio analysis indicates strong momentum in the residential sector, with occupancy rates exceeding 94%. I recommend reviewing our latest quarterly report.",
      uk: "Наш портфельний аналіз вказує на сильну динаміку в житловому секторі із рівнем заповнюваності понад 94%. Рекомендую ознайомитися з останнім квартальним звітом.",
    },
    {
      en: "For risk-adjusted returns, I'd suggest a diversified approach: 60% premium residential, 25% commercial, 15% development projects. This allocation has historically outperformed the market by 3.1%.",
      uk: "Для дохідності з урахуванням ризиків рекомендую диверсифікований підхід: 60% преміальне житло, 25% комерція, 15% девелопмент. Така алокація історично перевищувала ринок на 3,1%.",
    },
    {
      en: "The current interest rate environment favors long-term fixed-rate financing. I can model several scenarios for your consideration.",
      uk: "Поточне середовище процентних ставок сприяє довгостроковому фінансуванню з фіксованою ставкою. Можу змоделювати кілька сценаріїв для вашого розгляду.",
    },
  ],
};

const Chatbot = () => {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [responseIdx, setResponseIdx] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", text: t("chat.welcome") }]);
    }
  }, [open, messages.length, t]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const responses = botResponses.default;
      const resp = responses[responseIdx % responses.length];
      setMessages((prev) => [...prev, { role: "bot", text: resp[lang] }]);
      setResponseIdx((i) => i + 1);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-foreground text-background rounded flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 h-[28rem] glass rounded shadow-2xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-foreground/5">
            <p className="text-sm font-semibold tracking-wide">{t("chat.title")}</p>
            <p className="text-xs text-muted-foreground">OSNOVA ESTATE</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 text-sm rounded ${
                    msg.role === "user"
                      ? "bg-foreground text-background"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          <div className="px-4 py-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={t("chat.placeholder")}
              className="flex-1 bg-muted/50 px-3 py-2 text-sm rounded border border-border focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-foreground text-background rounded hover:opacity-90 transition-opacity"
              aria-label="Send"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
