"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import * as React from "react";

/** On hérite des props du Button shadcn (inclut asChild/size/etc.) */
type ButtonBaseProps = React.ComponentProps<typeof Button>;

interface GradientButtonProps extends Omit<ButtonBaseProps, "variant"> {
  /** Garde tes variantes visuelles (différentes de celles du Button shadcn) */
  variant?: "primary" | "secondary";
  /** Déjà présent dans ButtonBaseProps, mais on le rend explicite ici */
  asChild?: boolean;
}

export const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ children, className, size = "default", variant = "primary", asChild, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Button
          ref={ref}
          /** on propage asChild vers le Button shadcn (Radix Slot) */
          asChild={asChild}
          size={size}
          className={cn(
            "relative overflow-hidden font-semibold transition-all duration-200",
            variant === "primary" &&
              "bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white shadow-lg hover:shadow-violet-500/25",
            variant === "secondary" &&
              "bg-transparent border-2 border-violet-500 text-violet-400 hover:bg-violet-500/10 hover:text-violet-300",
            className
          )}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

GradientButton.displayName = "GradientButton";
