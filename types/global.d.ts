export {};
declare global {
  // DASHBOARD
  interface Invoice {
    id: string;
    customer: string;
    amount: number;
    date: string;
    status: "paid" | "pending" | "overdue";
  }

  interface InvoiceTableProps {
    invoices: Invoice[];
  }

  interface FinancialChartProps {
    data: {
      labels: string[];
      profit: number[];
      expenses: number[];
    };
  }
  interface DashboardContextProps {
    data: null;
    loading: boolean;
    error: null | string
  }
  
}
