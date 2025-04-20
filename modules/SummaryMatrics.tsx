import { ExpenseChart } from "@/components/charts/ExpensesChart";
import FinanceCard from "@/components/charts/FinanceCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { StockValueChart } from "@/components/charts/StockValueChart";
import React from "react";

const SummaryMatrics = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <RevenueChart />
          <ExpenseChart />
          <StockValueChart />
          <FinanceCard />
      </div>
    </div>
  );
};

export default SummaryMatrics;
