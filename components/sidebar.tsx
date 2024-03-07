"use client";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Playlist } from "../data/playlists";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export type navigationLink = {
  name: string;
  href: string;
  disabled?: boolean;
  tier?: "A" | "B";
  category?: string;
};
export const navigationLinks: navigationLink[] = [
  {
    name: "Non-Vascular",
    href: "/views?category=nvir",
    tier: "A",
    category: "Non-vascular",
  },
  {
    name: "Vascular",
    href: "/views?category=ir",
    tier: "A",
    category: "Vascular",
  },
  {
    name: "Neurointerventional procedures",
    href: "/views?category=neuro",
    category: "Neurointervention",
  },
  {
    name: "Arterial interventional procedures",
    href: "/views?category=arterial",
    category: "Arterial",
  },
  {
    name: "Venous and dialysis access interventions",
    href: "/views?category=venous",
    category: "Venous",
  },
  {
    name: "Hepatobiliary interventions",
    href: "/views?category=hepatobiliary",
    category: "Hepatobiliary",
  },
  {
    name: "Thoracic interventions",
    href: "/views?category=thoracic",
    category: "Thoracic",
  },
  {
    name: "Gastro-intestinal intervention",
    href: "/views?category=gi",
    category: "gi",
  },
  {
    name: "Urogenital interventions",
    href: "/views?category=urogenital",
    category: "Urogenital",
  },
  {
    name: "Musculoskeletal interventions",
    href: "/views?category=msk",
    category: "Thoracic",
  },
  {
    name: "Paediatric interventions",
    href: "/views?category=paed",
    category: "paediatric",
  },
  {
    name: "Interventional Oncology",
    href: "/views?category=io",
    category: "Oncology",
  },
  {
    name: "Vascular anomalies",
    href: "/views?category=va",
    category: "VA",
  },
  {
    name: "MR guided interventions",
    href: "/views?category=mrir",
    category: "MR",
  },
];

export function Sidebar({ className }: SidebarProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const category = searchParams.get("category");

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button
              variant="secondary"
              asChild
              className="w-full justify-start"
            >
              <Link href="/addProcedure">
                <Plus />
                Add procedure
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link href="/">My progress summary</Link>
            </Button>
            <Button variant="ghost" disabled className="w-full justify-start">
              Tier A
            </Button>
            <Separator />
            {navigationLinks
              .filter((link) => link.tier == "A")
              .map((link) => (
                <Button
                  key={link.name}
                  variant={
                    `${pathname}?category=${category}` == link.href
                      ? "default"
                      : "ghost"
                  }
                  className="w-full justify-start"
                >
                  <Link replace href={link.href}>
                    {link.name}
                  </Link>
                </Button>
              ))}
            <Button variant="ghost" disabled className="w-full justify-start ">
              Tier B
            </Button>
            <Separator />
            {navigationLinks
              .filter((link) => link.tier != "A")
              .map((link) => (
                <Button
                  key={link.name}
                  variant={
                    `${pathname}?category=${category}` == link.href
                      ? "default"
                      : "ghost"
                  }
                  className="w-full justify-start"
                >
                  <Link replace href={link.href}>
                    {link.name}
                  </Link>
                </Button>
              ))}
          </div>
        </div>
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}
