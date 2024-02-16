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
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

type navigationLink = {
  name: string;
  href: string;
  disabled?: boolean;
  tier?: "A" | "B";
};
export const navigationLinks: navigationLink[] = [
  {
    name: "Non-Vascular",
    href: "/nvir",
    tier: "A",
  },
  {
    name: "Vascular",
    href: "/ir",
    tier: "A",
  },
  {
    name: "Neurointerventional procedures",
    href: "/neuro",
  },
  {
    name: "Arterial interventional procedures",
    href: "/arterial",
  },
  {
    name: "Venous and dialysis access interventions",
    href: "/venous",
  },
  {
    name: "Hepatobiliary interventions",
    href: "/hepatobiliary",
  },
  {
    name: "Thoracic interventions",
    href: "/thoracic",
  },
  {
    name: "Gastro-intestinal intervention",
    href: "/gi",
  },
  {
    name: "Urogenital interventions",
    href: "/urogenital",
  },
  {
    name: "Musculoskeletal interventions",
    href: "/msk",
  },
  {
    name: "Paediatric interventions",
    href: "/paed",
  },
  {
    name: "Interventional Oncology",
    href: "/arterial",
  },
  {
    name: "Vascular anomalies",
    href: "/arterial",
  },
  {
    name: "MR guided interventions",
    href: "/arterial",
  },
];

export function Sidebar({ className }: SidebarProps) {
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
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href={link.href}>{link.name}</Link>
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
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Link href={link.href}>{link.name}</Link>
                </Button>
              ))}
          </div>
        </div>
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}
