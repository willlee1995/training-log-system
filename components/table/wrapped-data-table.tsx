"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { getNavigationLinkCategory } from "@/lib/utils";
import { navigationLinks } from "@/components/sidebar";
import { columns } from "@/components/table/columns";
import tasks from "@/data/tasks.json";
import { DataTable } from "@/components/data-table";

export default function WrappedDataTable() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get("category");
  const tasksNeuro = tasks.filter(
    (task) =>
      task.category ===
      getNavigationLinkCategory(pathname, navigationLinks, category)
  );
  return <DataTable data={tasksNeuro} columns={columns} />;
}
