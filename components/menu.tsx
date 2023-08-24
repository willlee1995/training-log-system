import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import ModeToggle from "./mode-toggle";
export function Menu() {
  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">
          <Link href="/">IR subspeciality Log System</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <div className="ml-auto">
        <MenubarMenu>
          <MenubarTrigger className="ml-auto flex md:block">
            Account
          </MenubarTrigger>
          <MenubarContent forceMount>
            <MenubarItem inset>My detail</MenubarItem>
            <MenubarSeparator />
            <MenubarItem inset>Logout</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </div>
      <MenubarMenu>
        <MenubarTrigger className="font-bold">
          <ModeToggle />
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
}
