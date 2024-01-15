import "./globals.css";

import { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { AppProvider } from "@/providers/app.provider";

export const metadata: Metadata = {
  title: "Dawdle",
  description: "smth description",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="font-open_sans">
        <AppProvider>
          <SiteHeader />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
