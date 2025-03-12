"use client";
import React, { memo } from "react";
import { BackgroundBeams } from "@/component/ui/BackgroundBeams";

export const BackgroundBeamsDemo = memo(() => {
  return (
    <div className="h-full w-full absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center antialiased">
      <BackgroundBeams className="z-0" />
    </div>
  );
});

BackgroundBeamsDemo.displayName = "BackgroundBeamsDemo";
