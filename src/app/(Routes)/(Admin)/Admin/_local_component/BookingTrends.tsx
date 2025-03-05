"use client";

import { Area, AreaChart, XAxis, YAxis, Legend } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", Apartment: 60000, Pool: 30000 },
  { month: "Feb", Apartment: 70000, Pool: 45000 },
  { month: "Mar", Apartment: 800000, Pool: 50000 },
  { month: "Apr", Apartment: 900000, Pool: 50000 },
  { month: "May", Apartment: 300000, Pool: 150000 },
  { month: "Jun", Apartment: 500000, Pool: 50000 },
];

const chartConfig = {
  Apartment: {
    label: "Apartment",
    color: "#8979FF",
  },
  Pool: {
    label: "Pool",
    color: "#FF928A",
  },
} satisfies ChartConfig;

export default function BookingTrends() {
  return (
    <Card className="h-[450px] flex flex-col gap-8">
      <CardHeader>
        <CardTitle>Booking trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            width={400}
            height={400}
            data={chartData}
            margin={{ left: 12, right: 12, top: 20 }}
          >
            {/* FIX: X-Axis should use "month" */}
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
            />
            <YAxis
              label={{
                value: "Naira", // Label text
                angle: 0, // Keeps it horizontal
                position: "top", // Moves it to the top
                offset: 20, // Adjust spacing from the axis
                style: { fontSize: "14px", fontWeight: "bold" }, // Optional styling
              }}
              domain={[0, 500000]} // Adjust based on max data value
              tickCount={8}
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              interval="preserveStartEnd" // Ensures fixed intervals
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

            {/* FIX: Define gradients and reference them in <Area> */}
            <defs>
              <linearGradient id="fillApartment" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8979FF" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8979FF" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillPool" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF928A" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FF928A" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            {/* FIX: Use the gradients in "fill" */}
            <Area
              dataKey="Pool"
              type="monotone"
              stroke="#FF928A"
              fill="url(#fillPool)"
              fillOpacity={0.6}
            />
            <Area
              dataKey="Apartment"
              type="monotone"
              stroke="#8979FF"
              fill="url(#fillApartment)"
              fillOpacity={0.6}
            />

            {/* Custom Legend */}
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
              formatter={(value: keyof typeof chartConfig) => (
                <span style={{ color: chartConfig[value].color }}>
                  {chartConfig[value].label}
                </span>
              )}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
