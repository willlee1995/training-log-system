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
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/nvir">Non-Vascular</Link>
            </Button>
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/ir">Vascular</Link>
            </Button>
            <Button variant="ghost" disabled className="w-full justify-start ">
              Tier B
            </Button>
            <Separator />
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/neuro">Neurointerventional procedures</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/arterial">Arterial interventional procedures</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/venous">
                Venous and dialysis access interventions
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/hepatobiliary">Hepatobiliary interventions</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/thoracic">Thoracic interventions</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/gi">Gastro-intestinal intervention</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/urogenital">Urogenital interventions</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/arterial">Musculoskeletal interventions</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/arterial">Paediatric interventions</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/arterial">Interventional Oncology</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/arterial">Vascular anomalies</Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Link href="/arterial">MR guided interventions</Link>
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}
