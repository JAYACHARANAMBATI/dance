"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export function MovingBorderDemo() {
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Borders are cool
      </Button>
      
      <Button
        borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white border-neutral-200 dark:border-slate-800"
        borderClassName="bg-[radial-gradient(var(--violet-500)_40%,transparent_60%)]"
      >
        Animated Border
      </Button>
      
      <Button
        borderRadius="2rem"
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-transparent"
        borderClassName="bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]"
      >
        Gradient Button
      </Button>
    </div>
  );
}
