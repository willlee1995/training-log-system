import { navigationLink } from "@/components/sidebar";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getNavigationLinkName(pathname: string, navigationLinks: navigationLink[], category: string| null): string {
console.log("search",`${pathname}?category=${category}`)
if (category === null) return ""
  const link = navigationLinks.find((link) => link.href === `${pathname}?category=${category}`);
  return link ? link.name : "";
}

export function getNavigationLinkCategory(pathname: string, navigationLinks: navigationLink[], category: string| null): string | undefined {
  console.log("search",`${pathname}?category=${category}`)
  if (category === null) return ""
    const link = navigationLinks.find((link) => link.href === `${pathname}?category=${category}`);
    return link ? link.category : "";
  }