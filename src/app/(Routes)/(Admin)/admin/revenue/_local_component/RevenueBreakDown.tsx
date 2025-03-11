"use client";
import { Card } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import React from "react";
import {
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  Legend,
  Text,
  PieLabelRenderProps,
} from "recharts";
import { Payload } from "recharts/types/component/DefaultLegendContent";

function RevenueBreakDown() {
  const chartData = [
    { revenue: "Amenities", sales: 350000, fill: "#3CC3DF" },
    { revenue: "Pool Services", sales: 600000, fill: "#FF928A" },
    { revenue: "Apartments", sales: 1000000, fill: "#8979FF" },
  ];

  const chartConfig = {
    sales: { label: "Sales" },
    ...Object.fromEntries(
      chartData.map((item) => [
        item.revenue.replace(/\s+/g, ""),
        { label: item.revenue, color: item.fill },
      ])
    ),
  } satisfies ChartConfig;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }: PieLabelRenderProps & { index: number }) => {
    const RADIAN = Math.PI / 180;
    const radius = Number(outerRadius) + 20; // Move label slightly outward
    const x = Number(cx) + radius * Math.cos(-midAngle * RADIAN);
    const y = Number(cy) + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text
        x={x}
        y={y}
        fill={chartData[index].fill}
        textAnchor={x > Number(cx) ? "start" : "end"}
        dominantBaseline="central"
        fontSize={14}
        fontWeight="bold"
      >
        {`${chartData[index].revenue}: ${(percent! * 100).toFixed(0)}%`}
      </Text>
    );
  };

  return (
    <Card className="flex bg-white items-center justify-center shadow-0 p-5 rounded-lg min-h-[472px] w-full">
      <ChartContainer
        config={chartConfig}
        className="mx-auto max-h-[400px] w-full pb-0 [&_.recharts-pie-label-text]:fill-foreground"
      >
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            {/* Tooltip with Custom Formatting */}
            <ChartTooltip
              cursor={false}
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                const { name, value } = payload[0];
                return (
                  <div className="p-2 bg-white border shadow-md rounded-md text-sm">
                    <span className="font-bold">{name}:</span> &#8358;
                    {value?.toLocaleString()}
                  </div>
                );
              }}
            />

            <Pie
              data={chartData}
              dataKey="sales"
              nameKey="revenue"
              cx="50%"
              cy="50%"
              outerRadius={165}
              label={renderCustomizedLabel}
              labelLine={{ stroke: "#ccc", strokeWidth: 1 }}
            >
              {chartData.map((entry) => (
                <Cell
                  key={entry.revenue}
                  fill={entry.fill}
                  stroke="transparent"
                  aria-label={`${entry.revenue} revenue`}
                />
              ))}
            </Pie>
            {/* Legend */}
            <Legend
              layout="vertical"
              align="right"
              verticalAlign="middle"
              wrapperStyle={{ lineHeight: "40px" }}
              formatter={(value: string, entry: Payload | undefined) => {
                const sales = (entry?.payload as { sales?: number })?.sales;
                return sales ? `${value}` : value;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Card>
  );
}

export default RevenueBreakDown;
