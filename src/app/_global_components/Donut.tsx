"use client";
import * as React from "react";
import { Label, Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";

type Prop = {
  dataName: string;
  amount: number;
  total: number;
  fill: string;
};

export default function Donut({ amount, dataName, fill, total }: Prop) {
  const totalSlices = 6; // Ensuring exactly 6 slices

  // Calculate how many slices the `amount` should take
  const dataSlices = Math.max(1, Math.round((amount / total) * totalSlices));
  const otherSlices = totalSlices - dataSlices; // Remaining slices for "Other"

  // Creating multiple slices for `amount`
  const dataSlicesArray = Array.from({ length: dataSlices }, (_, i) => ({
    revenue: `${dataName} ${i + 1}`,
    sales: amount / dataSlices,
    fill: fill,
  }));

  // Creating multiple slices for "Other"
  const otherSlicesArray = Array.from({ length: otherSlices }, (_, i) => ({
    revenue: `Other ${i + 1}`,
    sales: (total - amount) / otherSlices,
    fill: "#CEC8B4",
  }));

  // Combine both arrays
  const chartData = [...dataSlicesArray, ...otherSlicesArray];

  const chartConfig = {
    revenue: { label: "Revenue" },
    [dataName]: { label: dataName, color: fill },
    other: { label: "Other", color: "#CEC8B4" },
  } satisfies ChartConfig;

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto w-[64px] h-[64px]"
    >
      <PieChart width={64} height={64}>
        
        <Pie
          data={chartData}
          dataKey="sales"
          nameKey="revenue"
          innerRadius={22} // Adjusted for better fit
          outerRadius={30} // Adjusted for better visibility
          strokeWidth={3}
        >
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-foreground text-[12px] font-bold"
                  >
                    {Math.round((amount / total) * 100)}%
                  </text>
                );
              }
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
