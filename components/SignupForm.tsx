"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export function SignupForm() {
  const { signup } = useAuth();
  const [result, setResult] = useState<{ success?: boolean; error?: string }>(
    {},
  );
  const [isLoading, setIsLoading] = useState(false);

  const createTestUser = async () => {
    setIsLoading(true);
    const response = await signup({
      first_name: "John",
      last_name: "Doe",
      email: `testuser_${Date.now()}@example.com`, // Unique email
      country: "AE",
      lang: JSON.stringify({ acceptedLang: "en", browserLang: "en-US" }),
      phone_country_code: "971",
      phone_number: "0000000000",
      dob: "1993-03-03T20:00:00.000",
      password: "GrosTest2020!_!_",
      user_type: "root",
    });
    setResult(response);
    setIsLoading(false);
  };

  return (
    <div className="mb-6 flex h-full flex-col items-center justify-center rounded-lg border p-4">
      <h3 className="mb-2 font-bold">Developer Tools</h3>
      <button
        onClick={createTestUser}
        disabled={isLoading}
        className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
      >
        {isLoading ? "Creating..." : "Create Test User"}
      </button>
      {result.success && (
        <p className="mt-2 text-green-600">Test user created successfully!</p>
      )}
      {result.error && (
        <p className="mt-2 text-red-600">Error: {result.error}</p>
      )}
      <p className="mt-2 text-sm text-gray-600">
        Default password: GrosTest2020!_!_
      </p>
    </div>
  );
}
