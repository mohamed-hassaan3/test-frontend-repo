import { DashboardProvider } from "@/context/DashboardContext";
import Header from "@/modules/Header";
import { Spinner } from "flowbite-react";
import React, { Suspense } from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="dark:bg-gray-700">
      <DashboardProvider>
        <Header />
        <Suspense fallback={<Spinner />}>{children}</Suspense>
      </DashboardProvider>
    </div>
  );
};

export default layout;
