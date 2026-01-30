import type { Metadata } from "next";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";

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
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
