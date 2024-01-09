import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { AppProvider } from "@/providers/app.provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dawdle",
  description: "smth description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <AppProvider>
          <SiteHeader />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
