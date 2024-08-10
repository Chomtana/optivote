"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";

interface ProgressProps
  extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value?: number;
  max?: number;
  progressColor?: string;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(
  (
    { className, value = 0, max = 100, progressColor = "#E44000", ...props },
    ref,
  ) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-[#E4E7EC]",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 rounded-r-full transition-all"
        style={{
          transform: `translateX(-${100 - (value / max) * 100}%)`,
          backgroundColor: progressColor,
        }}
      />
    </ProgressPrimitive.Root>
  ),
);

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
