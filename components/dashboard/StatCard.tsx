import { ArrowUpRight } from 'lucide-react';

const stats = [
  {
    title: "Outstanding Invoices",
    value: "475",
    growth: "+1.4%",
    since: "vs last day",
  },
  {
    title: "Average Collection Period",
    value: "04:14",
    growth: "+1.4%",
    since: "vs last month",
  },
  {
    title: "Gross Profit Margin",
    value: "657.8k",
    growth: "+1.4%",
    since: "vs last month",
  },
  {
    title: "Inventory Turnover",
    value: "04:14",
    growth: "+1.4%",
    since: "vs last month",
  },
  {
    title: "Online Payments",
    value: "40%",
    growth: "+1.4%",
    since: "vs last month",
  },
];

const StatCard = ({ title, value, growth, since }: (typeof stats)[0]) => (
  <div className="flex flex-col gap-1 px-4 py-3 bg-white dark:bg-gray-900 rounded-xl shadow-sm text-sm">
    <span className="text-gray-500 dark:text-gray-400">{title}</span>
    <div className="flex items-center gap-2">
      <span className="text-xl font-semibold text-gray-800 dark:text-white">{value}</span>
      <span className="flex items-center text-emerald-600 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/20 px-2 py-0.5 rounded-md">
        <ArrowUpRight className="w-3 h-3 mr-1" /> {growth}
      </span>
    </div>
    <span className="text-xs text-gray-400">{since}</span>
  </div>
);

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {stats.map((stat, idx) => (
        <StatCard key={idx} {...stat} />
      ))}
    </div>
  );
};

export default StatsGrid;
