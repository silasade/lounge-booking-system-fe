import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PopOverProp = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  className?: string; // Default to optional
};

const PopOver: React.FC<PopOverProp> = ({
  children,
  className = "",
  trigger,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>{trigger}</PopoverTrigger>
      <PopoverContent className={className}>{children}</PopoverContent>
    </Popover>
  );
};

export default PopOver;
