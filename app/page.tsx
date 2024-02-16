import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";

import { AlbumArtwork } from "@/components/album-artwork";
import Dashboard from "@/components/dashboard";
import { DataTable } from "@/components/data-table";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { columns } from "@/components/table/columns";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";
import { playlists } from "@/data/playlists";
import { logSchema } from "@/data/schema";
import tasks from "@/data/tasks.json";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
export const metadata: Metadata = {
  title: "IR Training Log System",
  description: "HKCR IR subspeciality training log system",
};

export default async function MainPage() {
  return (
    <>
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            My progress summary
          </h2>
          <Tabs defaultValue="progress" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <TabsList>
                <TabsTrigger value="progress" className="relative">
                  My progress
                </TabsTrigger>
                <TabsTrigger value="cases">All cases</TabsTrigger>
              </TabsList>
              <div className="hidden md:ml-auto md:mr-4">
                <Button asChild>
                  <Link href="/addProcedure">
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    Add procedure
                  </Link>
                </Button>
              </div>
            </div>
            <TabsContent
              value="progress"
              className="border-none p-0 outline-none"
            >
              <Dashboard />
            </TabsContent>
            <TabsContent
              value="cases"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              <DataTable data={tasks} columns={columns} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
