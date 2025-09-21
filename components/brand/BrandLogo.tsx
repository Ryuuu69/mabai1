// components/brand/BrandLogo.tsx
"use client";
import { cn } from "@/lib/utils";

type Ctx = "header" | "footer" | "popup";
type Props = { context?: Ctx; className?: string; alt?: string };

export default function BrandLogo({ context = "header", className, alt = "MABAI" }: Props) {
  return (
    <img
      src="/brand/logo.svg"
      alt={alt}
      draggable={false}
      className={cn("shrink-0 w-auto select-none", `logo--${context}`, className)}
    />
  );
}
