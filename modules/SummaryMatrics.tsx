import { ExpenseChart } from "@/components/charts/ExpensesChart";
import FinanceCard from "@/components/charts/FinanceCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { StockValueChart } from "@/components/charts/StockValueChart";
import { useDashboard } from "@/context/DashboardContext";
import { Card } from "flowbite-react";
import React from "react";

const SummaryMatrics = () => {
  // For API DATA
  // const { loading, data } = useDashboard();

  return (
    <div className="flex justify-between items-center gap-2">
      <RevenueChart />
      <ExpenseChart />
      <StockValueChart />
      <FinanceCard />
    </div>
  );
};

export default SummaryMatrics;
