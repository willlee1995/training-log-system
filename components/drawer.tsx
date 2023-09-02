"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { Menu, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { navigationLinks } from "./sidebar";
import { Separator } from "./ui/separator";
export default function SideDrawer() {
  const [isOpenB, setIsOpenB] = React.useState(false);
  const [isOpenA, setIsOpenA] = React.useState(false);

  return (
    <div className="lg:hidden grid grid-cols-2 gap-2">
      <Sheet key="left-drawer">
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="/">My progress summary</Link>
              </Button>
            </SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-1">
              <Collapsible
                open={isOpenA}
                onOpenChange={setIsOpenA}
                className="w-full space-y-2"
              >
                <div className=" flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">Tier A</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle for Tier B</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <Separator />

                <CollapsibleContent className="space-y-2">
                  {navigationLinks
                    .filter((link) => link.tier == "A")
                    .map((link) => (
                      <Button variant="ghost" className="w-full justify-start">
                        <Link href={link.href}>{link.name}</Link>
                      </Button>
                    ))}
                </CollapsibleContent>
              </Collapsible>
              <Collapsible
                open={isOpenB}
                onOpenChange={setIsOpenB}
                className="w-full space-y-2"
              >
                <div className=" flex items-center justify-between space-x-4 px-4">
                  <h4 className="text-sm font-semibold">Tier B</h4>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <CaretSortIcon className="h-4 w-4" />
                      <span className="sr-only">Toggle for Tier B</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <Separator />

                <CollapsibleContent className="space-y-2">
                  {navigationLinks
                    .filter((link) => link.tier != "A")
                    .map((link) => (
                      <Button variant="ghost" className="w-full justify-start">
                        <Link href={link.href}>{link.name}</Link>
                      </Button>
                    ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button asChild className="w-full justify-start">
                <Link href="/addProcedure">
                  <Plus />
                  Add procedure
                </Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
