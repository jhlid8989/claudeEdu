import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/lib/lenis-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "클로드 교육 핵심 개념",
  description: "PRD, MCP, MVP, Sub-agent, Task Manager, Supabase, Notion 핵심 개념 완전 정리",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased overflow-x-hidden">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
