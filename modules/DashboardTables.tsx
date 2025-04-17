"use client";
import { Spinner } from "flowbite-react";
import { InvoiceTable } from "@/components/dashboard/InvoiceTable";
import { ReceiptsTable } from "@/components/dashboard/ReceiptsTable";
import { InventoryTable } from "@/components/dashboard/InventoryTable";
import { useDashboard } from "@/context/DashboardContext";

export default function Dashboard() {
  // FOR API DATA
  // const { data, loading } = useDashboard();

  return (
    <div className="space-y-6 p-4">
      <section>
        <InvoiceTable />
        <ReceiptsTable />
        <InventoryTable />
      </section>
    </div>
  );
}
