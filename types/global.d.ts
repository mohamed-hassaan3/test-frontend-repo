export {};
declare global {
  interface AuthContextType {
    user: any;
    login: (
      email: string,
      password: string,
      user_type: string,
      ip_address: string,
    ) => Promise<void>;
    signup: (
      userData: SignupPayload,
    ) => Promise<{ success: boolean; error?: string }>;
    verifyOtp: (email: string, otp: string) => Promise<void>;
    logout: () => void;
    error: string | null;
  }

  interface SignupPayload {
    first_name: string;
    last_name: string;
    email: string;
    country: string;
    lang: string;
    phone_country_code: string;
    phone_number: string;
    dob: string;
    password: string;
    user_type: string;
  }

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
    data: any;
    loading: boolean;
  }
}
