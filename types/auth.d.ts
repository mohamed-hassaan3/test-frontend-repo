export type LoginPayload = {
  email: string;
  password: string;
  user_type?: "root" | "garage" | "agent" | "driver";
  ip_address?: string;
};

export type OtoPayload = {
  email: string;
  user_type: "root" | "garage" | "agent" | "driver";
  otp: string;
  ip_address: string;
};

export   interface AuthContextType {
  user: any;
  login: (
    email: string,
    password: string,
    user_type: string,
    ip_address: string,
  ) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<void>;
  logout: () => void;
  error: string | null;
  loading: boolean;
}
