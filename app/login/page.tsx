"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "stoked20years") {
      localStorage.setItem("stoked-auth", "true");
      router.push("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/stoked-logo-white.png"
            alt="STOKED"
            width={180}
            height={48}
            className="mx-auto mb-6"
          />
          <h1 className="font-heading text-2xl font-bold text-white mb-2">
            Welcome to STOKED OS
          </h1>
          <p className="text-slate-400">
            The operating system for mentoring organizations
          </p>
        </div>

        <Card className="p-8 rounded-2xl shadow-lg border-0 bg-white">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                defaultValue="steve@stoked.org"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1AB394]/30 focus:border-[#1AB394]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter password"
                className={`w-full px-4 py-2.5 rounded-lg border text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1AB394]/30 focus:border-[#1AB394] ${
                  error ? "border-red-400 bg-red-50" : "border-slate-200"
                }`}
              />
              {error && (
                <p className="text-xs text-red-500 mt-1.5">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1AB394] hover:bg-[#148F76] text-white py-5 rounded-lg font-semibold"
            >
              Sign In
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </form>
        </Card>

        <p className="text-center text-xs text-slate-500 mt-8">
          &copy; 2026 STOKED. All rights reserved.
        </p>
      </div>
    </div>
  );
}
