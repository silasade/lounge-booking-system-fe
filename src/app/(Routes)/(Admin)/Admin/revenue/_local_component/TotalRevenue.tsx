"use client";

import { Area, AreaChart, XAxis, YAxis, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", Week: 60000, Day: 30000 },
  { month: "Feb", Week: 70000, Day: 45000 },
  { month: "Mar", Week: 800000, Day: 50000 },
  { month: "Apr", Week: 900000, Day: 50000 },
  { month: "May", Week: 300000, Day: 150000 },
  { month: "Jun", Week: 500000, Day: 50000 },
];

// Get max values dynamically for Y-axis scaling
const maxWeekValue = Math.max(...chartData.map((d) => d.Week));
const maxDayValue = Math.max(...chartData.map((d) => d.Day));

const chartConfig = {
  Week: { label: "Week", color: "#8979FF" },
  Day: { label: "Day", color: "#FF928A" },
} satisfies ChartConfig;

export default function TotalRevenue() {
  return (
    <Card className="flex bg-white items-center justify-center p-5 rounded-lg w-full min-h-[500px]">
      <CardContent className="w-full">
        {/* Ensure the ChartContainer wraps the chart */}
        <ChartContainer config={chartConfig} className="w-full">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={chartData} margin={{ left: 12, right: 12, top: 20 }}>
              {/* X-Axis */}
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={true}
                tickMargin={8}
                angle={-25} // Rotated for better readability
                textAnchor="end"
              />

              {/* Primary Y-Axis (for Week data) */}
              <YAxis
                label={{
                  value: "Naira (₦)", 
                  angle: -90, 
                  position: "insideLeft", 
                  offset: -10,
                  style: { fontSize: "14px", fontWeight: "bold", fill: "#333" },
                }}
                domain={[0, maxWeekValue + 50000]} // Auto-scale
                tickCount={8}
                tickLine={false}
                axisLine={true}
                tickMargin={8}
              />

              {/* Optional Secondary Y-Axis (for Day data) */}
              <YAxis
                yAxisId="right"
                orientation="right"
                tickMargin={8}
                domain={[0, maxDayValue + 20000]}
                hide // Enable this if you want to show separate scaling
              />

              {/* Tooltip */}
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

              {/* Gradients for Area Fills */}
              <defs>
                <linearGradient id="fillWeek" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8979FF" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8979FF" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillDay" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#FF928A" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#FF928A" stopOpacity={0.1} />
                </linearGradient>
              </defs>

              {/* Area Charts with Gradients */}
              <Area
                dataKey="Week"
                type="monotone"
                stroke="#8979FF"
                fill="url(#fillWeek)"
                fillOpacity={0.6}
              />
              <Area
                dataKey="Day"
                type="monotone"
                stroke="#FF928A"
                fill="url(#fillDay)"
                fillOpacity={0.6}
              />

              {/* Custom Legend */}
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                wrapperStyle={{ marginTop: 10 }}
                formatter={(value: string) =>
                  chartConfig[value as keyof typeof chartConfig]?.label || value
                }
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
