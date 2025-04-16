// context/AuthContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { authService } from "../lib/api";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const signup = async (userData: SignupPayload) => {
    try {
      setError(null);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_V1_KEY}`,
          },
          body: JSON.stringify(userData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "Signup failed",
        };
      }

      return { success: true };
    } catch (err: any) {
      return {
        success: false,
        error: err.message || "Failed to create account",
      };
    }
  };

  const login = async (
    email: string,
    password: string,
    user_type: string,
    ip_address: string,
  ) => {
    try {
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
      value={{ user, login, signup, verifyOtp, logout, error }}
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
