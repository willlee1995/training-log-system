import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Playlist } from "../data/playlists";
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Link href="/addProcedure">
              <Button variant="secondary" className="w-full justify-start">
                <Plus />
                Add procedure
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              My progress summary
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Neurointerventional procedures
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Arterial interventional procedures
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Venous and dialysis access interventions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Hepatobiliary interventions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Thoracic interventions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Gastro-intestinal intervention
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Urogenital interventions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Musculoskeletal interventions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Paediatric interventions
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Interventional Oncology
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              Vascular anomalies
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              MR guided interventions
            </Button>
          </div>
        </div>
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}
