"use server"
import type { LoginPayload, OtoPayload } from "@/types/auth";
import axios, { AxiosError } from "axios";


// Login
export async function loginUser( payload: LoginPayload ) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/login`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_V1_KEY}`,
        },
      },
    );
    if(response.status === 200) return response.data;
    console.log(response.status && "Login success");
    
  } catch (error) {
    if (error instanceof AxiosError) {
        return {
          success: false,
          error: error.response?.data || error.message,
        };
      }
      return {
        success: false,
        error: "An unexpected error occurred.",
      };
  }
}

// OTP Verification
export async function otpUser (payload: OtoPayload) {
    try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/verify-otp`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_V1_KEY}`,
            },
          },
        );
        if(response.status === 200) return response.data;
        console.log(response.status && "account has been verified");
        
      } catch (error) {
        if (error instanceof AxiosError) {
            return {
              success: false,
              error: error.response?.data || error.message,
            };
          }
          return {
            success: false,
            error: "An unexpected error occurred.",
          };
      }
}