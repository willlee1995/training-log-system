import { Menu } from "@/components/menu";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import "../globals.css";

import { Plus } from "lucide-react";
import { headers } from "next/headers";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "IR Training Log Book ",
  description: "HKCR IR subspeciality training log system",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get("x-url") || "";
  console.log(header_url);
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
