import { useI18n } from "@/contexts/I18nContext";
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line
} from "recharts";
import { TrendingUp, Building2, Percent, Users } from "lucide-react";

const marketData = [
  { month: "Jan", price: 102, volume: 340 },
  { month: "Feb", price: 105, volume: 310 },
  { month: "Mar", price: 108, volume: 420 },
  { month: "Apr", price: 106, volume: 380 },
  { month: "May", price: 112, volume: 450 },
  { month: "Jun", price: 115, volume: 470 },
  { month: "Jul", price: 118, volume: 510 },
  { month: "Aug", price: 121, volume: 490 },
  { month: "Sep", price: 119, volume: 530 },
  { month: "Oct", price: 124, volume: 560 },
  { month: "Nov", price: 128, volume: 580 },
  { month: "Dec", price: 132, volume: 620 },
];

const yieldData = [
  { quarter: "Q1 '24", residential: 6.2, commercial: 7.8, industrial: 9.1 },
  { quarter: "Q2 '24", residential: 6.5, commercial: 7.5, industrial: 9.4 },
  { quarter: "Q3 '24", residential: 6.8, commercial: 7.9, industrial: 9.0 },
  { quarter: "Q4 '24", residential: 7.1, commercial: 8.2, industrial: 9.6 },
];

const Analytics = () => {
  const { t } = useI18n();

  const stats = [
    { icon: TrendingUp, label: t("analytics.totalValue"), value: "$18.6M" },
    { icon: Building2, label: t("analytics.activeAssets"), value: "12" },
    { icon: Percent, label: t("analytics.avgReturn"), value: "7.8%" },
    { icon: Users, label: t("analytics.occupancy"), value: "94.2%" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-2">{t("analytics.title")}</h1>
        <p className="text-muted-foreground mb-10">{t("analytics.overview")}</p>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s, i) => (
            <div key={i} className="p-5 border border-border rounded bg-card">
              <s.icon className="w-5 h-5 text-primary mb-2" />
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Price Index */}
          <div className="border border-border rounded bg-card p-5">
            <h3 className="text-sm font-semibold mb-4">{t("analytics.priceIndex")}</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,14%,85%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(210,14%,50%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(210,14%,50%)" />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="hsl(210,14%,50%)" fill="hsl(214,41%,78%)" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Transaction Volume */}
          <div className="border border-border rounded bg-card p-5">
            <h3 className="text-sm font-semibold mb-4">{t("analytics.volume")}</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,14%,85%)" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} stroke="hsl(210,14%,50%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(210,14%,50%)" />
                <Tooltip />
                <Bar dataKey="volume" fill="hsl(210,14%,50%)" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Yield Comparison */}
          <div className="border border-border rounded bg-card p-5 lg:col-span-2">
            <h3 className="text-sm font-semibold mb-4">{t("analytics.yield")}</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={yieldData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210,14%,85%)" />
                <XAxis dataKey="quarter" tick={{ fontSize: 11 }} stroke="hsl(210,14%,50%)" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(210,14%,50%)" />
                <Tooltip />
                <Line type="monotone" dataKey="residential" stroke="hsl(210,14%,50%)" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="commercial" stroke="hsl(214,41%,78%)" strokeWidth={2} dot={{ r: 3 }} />
                <Line type="monotone" dataKey="industrial" stroke="hsl(210,14%,35%)" strokeWidth={2} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
