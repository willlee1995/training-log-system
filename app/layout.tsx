import { Menu } from "@/components/menu";
import { Sidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "./globals.css";

import { Plus } from "lucide-react";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import { headers } from "next/headers";
export const metadata: Metadata = {
  title: "IR Training Log Book",
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
          <div className="md:block">
            <Menu />
            <div className="border-t">
              <div className="bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <Sidebar className="hidden lg:block" />
                  {children}
                  {header_url !== "/addProcedure" && (
                    <Button
                      className="lg:hidden fixed z-90 bottom-10 right-8 !rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:drop-shadow-2xl"
                      asChild
                    >
                      <Link href="/addProcedure">
                        <Plus />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
