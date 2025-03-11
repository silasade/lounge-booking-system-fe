"use client";
import { Calendar } from "@/components/ui/calendar";

import React, { useState } from "react";

function CalendarWrapper() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="w-full h-full bg-white rounded-lg">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="h-full w-full flex"
        classNames={{
          months:
            "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
          month: "space-y-4 w-full flex flex-col",
          table: "w-full h-full border-collapse space-y-1",
          head_row: "",
          row: "w-full mt-2",
        }}
      />
    </div>
  );
}

export default CalendarWrapper;
