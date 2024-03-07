import { AddProcedureForm } from "@/components/form/addProcedure";
import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IR Training Log Book - Add Procedure",
  description: "HKCR IR subspeciality training log Book",
};
export default function SettingsProfilePage() {
  return (
    <div className="space-y-6 pt-4 pl-3">
      <div>
        <h3 className="text-lg font-medium">Add Procedure Log</h3>
        <p className="text-sm text-muted-foreground">
          Fill in the following form to add a procedure log.
        </p>
      </div>
      <Separator />
      <AddProcedureForm />
    </div>
  );
}
