import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { z } from "zod";

import { AlbumArtwork } from "@/components/album-artwork";
import { DataTable } from "@/components/data-table";
import { PodcastEmptyPlaceholder } from "@/components/podcast-empty-placeholder";
import { columns } from "@/components/table/columns";
import { listenNowAlbums, madeForYouAlbums } from "@/data/albums";
import { playlists } from "@/data/playlists";
import { logSchema } from "@/data/schema";
import { promises as fs } from "fs";
import Link from "next/link";
import path from "path";
export const metadata: Metadata = {
  title: "IR Training Log System",
  description: "HKCR IR subspeciality training log system",
};
async function getTasks() {
  const data = await fs.readFile(path.join(process.cwd(), "/data/tasks.json"));

  const tasks = JSON.parse(data.toString());

  return z.array(logSchema).parse(tasks);
}
export default async function MainPage() {
  const tasks = await getTasks();
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
              <div className="ml-auto mr-4">
                <Link href="/addProcedure">
                  <Button>
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    Add procedure
                  </Button>
                </Link>
              </div>
            </div>
            <TabsContent
              value="progress"
              className="border-none p-0 outline-none"
            >
              <DataTable data={tasks} columns={columns} />
            </TabsContent>
            <TabsContent
              value="podcasts"
              className="h-full flex-col border-none p-0 data-[state=active]:flex"
            >
              Table for the All Cases
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
