import React from "react";
import {
  Reserved,
  HourGlass,
  Bungalow,
  Check,
} from "@/app/_global_components/icons";
import Card from "./_local_component/Card";
import ProgressCircle from "./_local_component/ProgressCircle";
import BarChart from "./_local_component/BarCharts";
import BookingTrends from "./_local_component/BookingTrends";
import CalendarWrapper from "../../../_global_components/Shad ui/CalendarWrapper";
function Overview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <Card
          title="Total Reserved"
          icon={<Reserved width={30} height={30} color="#F39C12" />}
          color="bg-calenderbg"
          number={100}
          stat={8.5}
          time="Up from yesterday"
          up={true}
        />
        <Card
          title="Total Booked"
          icon={<HourGlass width={30} height={30} color="#F4D03F" />}
          color="bg-hourBg"
          number={40}
          stat={1.3}
          time="Up from last week"
          up={true}
        />
        <Card
          title="Total Occupied"
          icon={<Bungalow width={30} height={30} color="#3498DB" />}
          color="bg-bungBg"
          number={40}
          stat={4.3}
          time="Down from last week"
          up={false}
        />
        <Card
          title="Total Available"
          icon={<Check width={30} height={30} color="#27AE60" />}
          color="bg-checkBg"
          number={40}
          stat={1.3}
          time="Down from last week"
          up={true}
        />
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-2/5 rounded-lg  bg-white">
          <ProgressCircle />
        </div>
        <div className="w-3/5  bg-white">
          <BarChart />
        </div>
      </div>
      <div className="flex  flex-row gap-4">
        <div className="w-3/5 flex-1 bg-white">
          <BookingTrends />
        </div>
        <div className="w-2/5 flex-1 h-[450px]">
          <CalendarWrapper />
        </div>
      </div>
    </div>
  );
}

export default Overview;
