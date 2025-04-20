import { InvoiceTable } from "@/components/dashboard/InvoiceTable";
import { ReceiptsTable } from "@/components/dashboard/ReceiptsTable";
import { InventoryTable } from "@/components/dashboard/InventoryTable";

export default function Dashboard() {
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
