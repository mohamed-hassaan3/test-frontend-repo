"use client";
import { useEffect, useState } from "react";
import { Card, Spinner } from "flowbite-react";
import { dashboardService } from "@/lib/api";
import { FinancialChart } from "@/components/dashboard/FinancialChart";
import { InvoiceTable } from "@/components/dashboard/InvoiceTable";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dashboardService.getAccountantData();
        setData(response.data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4">
      <h1 className="mb-6 text-2xl font-bold text-gray-900">Dashboard</h1>

      {/* Summary Metrics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <Card>
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-2xl font-bold">
            ${data?.revenue?.toLocaleString()}
          </p>
        </Card>
        <Card>
          <h3 className="text-gray-500">Expenses</h3>
          <p className="text-2xl font-bold">
            ${data?.expenses?.toLocaleString()}
          </p>
        </Card>
        <Card>
          <h3 className="text-gray-500">Profit</h3>
          <p className="text-2xl font-bold">
            ${data?.profit?.toLocaleString()}
          </p>
        </Card>
        <Card>
          <h3 className="text-gray-500">Outstanding Invoices</h3>
          <p className="text-2xl font-bold">{data?.outstanding_invoices}</p>
        </Card>
      </div>

      {/* Financial Chart */}
      <FinancialChart data={data?.financial_data} />

      {/* Invoices Table */}
      <InvoiceTable invoices={data?.invoices} />
    </div>
  );
}
