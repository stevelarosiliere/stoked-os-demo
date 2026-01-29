import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "STOKED OS — Mentoring Organization Operating System",
  description:
    "The operating system for mentoring organizations. Track youth outcomes, manage programs, and generate funder reports.",
  openGraph: {
    title: "STOKED OS",
    description: "The operating system for mentoring organizations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <Sidebar />
        <div className="ml-[240px] min-h-screen bg-[#F1F5F9]">
          <Header />
          <main className="p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
