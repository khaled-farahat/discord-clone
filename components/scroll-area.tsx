import { cn } from "@/lib/utils";
import React from "react";

interface ScrollAreaProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollArea = ({ children, className }: ScrollAreaProps) => {
  return (
    <div
      className={cn(
        "hide-scrollbar flex w-full flex-1 flex-col items-start overflow-y-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ScrollArea;
