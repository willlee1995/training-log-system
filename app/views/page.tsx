import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";

import Title from "@/components/table/title";
import WrappedDataTable from "@/components/table/wrapped-data-table";
import Link from "next/link";

export default function Neuro() {
  return (
    <>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <div className="col-span-3 lg:col-span-4 lg:border-l">
        <div className="h-full px-4 py-6 lg:px-8">
          <Title />
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

            <WrappedDataTable />
          </Tabs>
        </div>
      </div>
    </>
  );
}
