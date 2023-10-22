// Tailwind CN Imports
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToElement(elementID: string) {
  const element = document.getElementById(elementID);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
