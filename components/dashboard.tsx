"use client";
import { Metadata } from "next";
import Image from "next/image";
import { ByCategory } from "@/components/dashboard/byCategory";
import { ByTier } from "@/components/dashboard/byTier";
import { CalendarDateRangePicker } from "@/components/dashboard/date-range-picker";
import { Search } from "@/components/dashboard/search";
import { UserNav } from "@/components/dashboard/user-nav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

const dataForTierA = [
  {
    category: "Neuro-IR",
    Current: 10,
  },
  {
    category: "Arterial IR",
    Current: 80,
  },
  {
    category: "Venous&Dialysis IR",
    Current: 82,
  },
  {
    category: "Thoracic IR",
    Current: 63,
  },
  {
    category: "GI IR",
    Current: 33,
  },
  {
    category: "Urogenital IR",
    Current: 65,
    Target: 360,
  },
  {
    category: "MSK IR",
    Current: 65,
    Target: 360,
  },
  {
    category: "Paed IR",
    Current: 65,
    Target: 360,
  },
  {
    category: "Oncology IR",
    Current: 65,
    Target: 360,
  },
  {
    category: "Vascular Anomalies",
    Current: 65,
    Target: 360,
  },
  {
    category: "MR guided IR",
    Current: 65,
    Target: 360,
  },
  {
    category: "Subtotal",
    Current: 65,
    Target: 360,
  },
];
export default function Dashboard() {
  return (
    <>
      <div className=" flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="hidden md:ml-auto md:flex md:items-center md:space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              Dashboard
              </h2>
            <div className="hidden md:flex md:items-center md:space-x-2">
              <CalendarDateRangePicker />
              <Button>Download</Button>
            </div>
          </div>
          <Tabs defaultValue="category" className="space-y-4">
            <TabsList>
              {/* <TabsTrigger value="overview">Overview - Radial</TabsTrigger> */}
              <TabsTrigger value="category">By Category</TabsTrigger>
            </TabsList>
            {/* <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent> */}
            <TabsContent value="category" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Tier A</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ByTier />
                  </CardContent>
                </Card>
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Tier B</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <ByCategory />
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"></div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
