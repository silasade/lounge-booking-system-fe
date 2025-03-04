"use client";
import { Calendar } from "@/components/ui/calendar";

import React, { useState } from "react";

function CalendarWrapper() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow h-full w-full"
    />
  );
}

export default CalendarWrapper;
