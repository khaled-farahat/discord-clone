import React from "react";

interface ScrollAreaProps {
  children: React.ReactNode;
}

const ScrollArea = ({ children }: ScrollAreaProps) => {
  return (
    <div className="hide-scrollbar flex w-full flex-1 flex-col items-start overflow-y-auto">
      {children}
    </div>
  );
};

export default ScrollArea;
