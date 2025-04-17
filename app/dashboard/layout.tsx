import { DashboardProvider } from "@/context/DashboardContext";
import Header from "@/modules/Header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-gray-700">
      <DashboardProvider>
        <Header />
        {children}
      </DashboardProvider>
    </div>
  );
};

export default layout;
