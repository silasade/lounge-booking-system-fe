"use client"
import React, { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type PopOverProps = {
  children: React.ReactNode;
  trigger?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
};

const PopOver: React.FC<PopOverProps> = ({
  children,
  className = "",
  trigger,
  isOpen,
  onOpenChange,
}) => {
  const [open, setOpen] = useState<boolean>(!!isOpen);

  // Sync state when `isOpen` changes
  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen);
    }
  }, [isOpen]);

  // Handle state updates
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
    onOpenChange?.(open);
  };

  return (
    <Popover open={open} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild >{trigger ?? <button>Open</button>}</PopoverTrigger>
      <PopoverContent className={className}>{children}</PopoverContent>
    </Popover>
  );
};

export default PopOver;
