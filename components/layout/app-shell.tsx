"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export function AppShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isLoginPage) {
      setReady(true);
      return;
    }
    const auth = localStorage.getItem("stoked-auth");
    if (auth !== "true") {
      router.replace("/login");
    } else {
      setReady(true);
    }
  }, [pathname, isLoginPage, router]);

  if (isLoginPage) {
    return <>{children}</>;
  }

  if (!ready) {
    return null;
  }

  return (
    <>
      <Sidebar />
      <div className="ml-[240px] min-h-screen bg-[#F1F5F9]">
        <Header />
        <main className="p-8">{children}</main>
      </div>
    </>
  );
}
