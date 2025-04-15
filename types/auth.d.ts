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
