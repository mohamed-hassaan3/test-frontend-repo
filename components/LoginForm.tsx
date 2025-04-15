"use client";
import { loginUser } from "@/actions/auth";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export function LoginForm() {
  const [userInput, setUserInput] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    // CALL API POST FROM "actions/auth.ts"
    const result = await loginUser({
      email: userInput.email,
      password: userInput.password,
      user_type: "root",
      ip_address: "127.0.0.1",
    });

    // HANDLE ERROR WITH "detail" or "undefined"
    if (!result.success) {
      const message =
        result.error?.detail ||
        result.error?.message ||
        "Login failed. Please check your credentials or try again.";
      setError(message);
      console.error("Login error:", message);
    } else {
      router.push(`/otp?email=${encodeURIComponent(userInput.email)}`);
      console.log("Login successful", result.data);
    }
  };
  console.log(userInput);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        {/* NOTICE: use Image component from next/image for improve performance  */}
        <img className="mb-6 mr-2" src="./gh_full_logo.svg" alt="logo" />
        {error && (
          <small className="my-2 text-center text-red-600">{error}</small>
        )}
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <Card className="shadow-none">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action={handleLogin}>
              <div>
                <Label htmlFor="email" className="mb-2 block dark:text-white">
                  Your email
                </Label>
                <TextInput
                  value={userInput.email || ""}
                  onChange={handleChange}
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                  type="email"
                  className="border-cyan-500 bg-ghred-50 text-ghred-900 placeholder:text-ghred-700 focus:border-ghred-500 focus:ring-ghred-500 dark:border-ghred-400 dark:bg-ghred-100 dark:focus:border-ghred-500 dark:focus:ring-ghred-500"
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
                  value={userInput.password || ""}
                  onChange={handleChange}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  type="password"
                  className="border-cyan-500 bg-ghred-50 text-ghred-900 placeholder:text-ghred-700 focus:border-ghred-500 focus:ring-ghred-500 dark:border-ghred-400 dark:bg-ghred-100 dark:focus:border-ghred-500 dark:focus:ring-ghred-500"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Checkbox id="remember" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </Label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full bg-ghred-500 hover:bg-ghred-600"
              >
                Sign in
              </Button>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Don’t have an account yet?&nbsp;
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
