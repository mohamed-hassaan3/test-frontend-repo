import StatsGrid from "@/components/dashboard/StatCard";
import DashboardTables from "@/modules/DashboardTables";
import FinancialChart from "@/modules/FinancialChart";
import SummaryMatrics from "@/modules/SummaryMatrics";
import { formatDate } from "@/utils/formatData";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#F8F4EE] p-4 dark:bg-gray-700 sm:p-8">
      <article className="mb-6">
        <h1 className=" text-2xl font-bold text-gray-500 dark:text-gray-400">
          Welcome Bellinda!
        </h1>
        <small className="py-3 text-gray-400">{formatDate()}</small>
      </article>
      <section className="space-y-8">
        <StatsGrid />
        <SummaryMatrics />
        <FinancialChart />
        <DashboardTables />
      </section>
    </div>
  );
};

export default page;
