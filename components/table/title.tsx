"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { getNavigationLinkName } from "@/lib/utils";
import { navigationLinks } from "@/components/sidebar";

export default function Title() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get("category");
  return (
    <h2 className="text-2xl font-semibold tracking-tight my-4">
      {getNavigationLinkName(pathname, navigationLinks, category)}
    </h2>
  );
}
