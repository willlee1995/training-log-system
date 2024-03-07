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
import Link from "next/link";
import path from "path";
export const metadata: Metadata = {
  title: "IR Training Log Book",
  description: "HKCR IR subspeciality training log system",
};

export default function InterOnco() {
  const tasksNeuro = tasks.filter(
    (task) => task.category === "Interventional Oncology"
  );
  return (
    <>
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight my-4">
            Non-vascular Procedure
          </h2>
          <Tabs defaultValue="progress" className="h-full space-y-6">
            <div className="space-between flex items-center">
              <div className="ml-auto mr-4">
                <Link href="/addProcedure">
                  <Button>
                    <PlusCircledIcon className="mr-2 h-4 w-4" />
                    Add procedure
                  </Button>
                </Link>
              </div>
            </div>

            <DataTable data={tasksNeuro} columns={columns} />
          </Tabs>
        </div>
      </div>
    </>
  );
}
