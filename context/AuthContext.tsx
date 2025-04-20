"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { authService } from "../lib/api";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { AuthContextType } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const login = async (
    email: string,
    password: string,
    user_type: string,
    ip_address: string,
  ) => {
    try {
      setLoading(true)
      setError(null);
      const response = await authService.login(
        email,
        password,
        user_type,
        ip_address,
      );
      // Store email for OTP verification
      localStorage.setItem("otpEmail", email);
    } catch (err: any) {
      if (err instanceof AxiosError) {
        setError(
          err.response?.data?.detail ||
            err.response?.data?.message ||
            "Login failed",
        );
      }
      throw err;
    } finally {
      setLoading(false)
    }
  };

  const verifyOtp = async (email: string, otp: string) => {
    try {
      setError(null);
      const response = await authService.verifyOtp(email, otp);
      setUser(response.data.user);
      localStorage.removeItem("otpEmail");
      router.push("/dashboard");
    } catch (err: any) {
      setLoading(false)
      setError(err.response?.data?.message || "OTP verification failed");
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, verifyOtp, logout, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
