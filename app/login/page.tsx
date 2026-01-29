"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
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
          <div className="space-y-4">
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
                defaultValue="********"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#1AB394]/30 focus:border-[#1AB394]"
              />
            </div>
            <Link href="/" className="block">
              <Button className="w-full bg-[#1AB394] hover:bg-[#148F76] text-white py-5 rounded-lg font-semibold">
                Sign In
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">
            Demo mode — click Sign In to explore
          </p>
        </Card>

        <p className="text-center text-xs text-slate-500 mt-8">
          &copy; 2026 STOKED. All rights reserved.
        </p>
      </div>
    </div>
  );
}
