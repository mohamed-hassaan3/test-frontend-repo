"use client";
import { dashboardService } from "@/lib/api";
import { AxiosError } from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

const DashboardContext = createContext<DashboardContextProps>({
  data: null,
  loading: true,
  error: null
});

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dashboardService.getAccountantData();
        setData(response.data);
      } catch (err) {
        if (err instanceof AxiosError) {
          setError(err.response?.data.detail || err.message);
          console.error(
            "Failed to fetch dashboard data:",
            err.response?.data.detail,
          );
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardContext.Provider value={{ data, loading, error }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext);
