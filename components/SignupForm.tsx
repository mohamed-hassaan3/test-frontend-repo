"use client";
import { Button, Card, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";

export function SignupForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/user/signup`,
        {
          ...formData,
          lang: '{"acceptedLang":"en","browserLang":"en-US"}',
          country: "AE",
          phone_country_code: "971",
          phone_number: "0000000000",
          dob: "1993-03-03T20:00:00.000",
          user_type: "root",
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API_V1_KEY}`,
          },
        },
      );
      setMessage("User created successfully!");
      return response.data;
    } catch (error: any) {
      setMessage(
        error?.response?.data?.detail || "Something went wrong during signup.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <img className="mb-6 mr-2" src="./gh_full_logo.svg" alt="logo" />
        {message && (
          <p className="mt-2 text-center text-sm text-red-500 dark:text-red-400">
            {message}
          </p>
        )}
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <Card className="shadow-none">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create a new account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label
                  htmlFor="first_name"
                  className="mb-2 block dark:text-white"
                >
                  First Name
                </Label>
                <TextInput
                  id="first_name"
                  name="first_name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label
                  htmlFor="last_name"
                  className="mb-2 block dark:text-white"
                >
                  Last Name
                </Label>
                <TextInput
                  id="last_name"
                  name="last_name"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email" className="mb-2 block dark:text-white">
                  Email
                </Label>
                <TextInput
                  id="email"
                  name="email"
                  required
                  type="email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 block dark:text-white"
                >
                  Password
                </Label>
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  required
                  onChange={handleChange}
                />
              </div>
              <Button
                type="submit"
                className={`${loading ? "cursor-not-allowed" : ""} w-full bg-ghred-500 hover:bg-ghred-600`}
              >
                {loading ? "Sign up..." : "Sign up"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ANOTHER APPROACH

/* "use client";
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
 */
