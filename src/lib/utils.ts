import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractImageNameFromPath = (path: string): string =>
  path?.split("/").pop()?.split(".")[0] || path;
