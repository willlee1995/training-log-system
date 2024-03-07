import { navigationLink } from "@/components/sidebar";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNavigationLinkName(pathname: string, navigationLinks: navigationLink[]): string {
  const link = navigationLinks.find((link) => link.href === pathname);
  return link ? link.name : "";
}