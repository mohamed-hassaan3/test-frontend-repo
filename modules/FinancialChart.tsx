import { MonthlyTarget } from "@/components/dashboard/MonthlyTarget";
import { PayableAndReceivable } from "@/components/dashboard/PayableAndReceivable";
import ProfitFinanial from "@/components/dashboard/ProfitFinanial";
import { useDashboard } from "@/context/DashboardContext";
import React from "react";

const FinancialChart = () => {
  // For API DATA
  // const { loading, data } = useDashboard();

  return (
    <section className="my-6 grid w-full grid-cols-1 grid-rows-4 gap-7 md:grid-cols-2 md:grid-rows-2">
      <aside className="relative row-span-2 md:col-span-1 md:row-span-2 !w-full">
      <ProfitFinanial />
      </aside>
      <aside className="relative md:col-span-1">
      <MonthlyTarget />
      </aside>
      <aside className="relative md:col-span-1 row-span-8">
      <PayableAndReceivable />
      </aside>
    </section>
  );
};

export default FinancialChart;
