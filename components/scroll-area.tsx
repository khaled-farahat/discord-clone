import React from "react";

interface ScrollAreaProps {
  children: React.ReactNode;
}

const ScrollArea = ({ children }: ScrollAreaProps) => {
  return (
    <div className="flex-1 w-full overflow-y-auto hide-scrollbar items-start flex flex-col">
      {children}
    </div>
  );
};

export default ScrollArea;
