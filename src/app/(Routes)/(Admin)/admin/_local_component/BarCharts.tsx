"use client";
import React, { useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartArea,
} from "chart.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Calendar from "@/app/_global_components/icons/Calendar";
// Register necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart: React.FC = () => {
  const chartRef = useRef<ChartJS<"bar"> | null>(null);

  const getGradient = (
    ctx: CanvasRenderingContext2D,
    chartArea: ChartArea | undefined
  ) => {
    if (!chartArea) return "#D4A373"; // Fallback color before chart renders
    const { top, bottom } = chartArea;
    const gradient = ctx.createLinearGradient(0, top, 0, bottom);
    gradient.addColorStop(0, "#D4A373"); // Top color
    gradient.addColorStop(1, "#E9D0B7"); // Bottom color
    return gradient;
  };

  const data: ChartData<"bar"> = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Sales",
        data: [30, 50, 70, 10, 40, 60, 80, 90, 100],
        backgroundColor: () => {
          const chart = chartRef.current;
          if (!chart) return "#D4A373"; // Fallback color
          const { ctx, chartArea } = chart;
          return getGradient(ctx, chartArea);
        },
        borderRadius: 5, // Adds rounded corners to bars
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { display: false },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="w-full min-h-[356px] p-5 rounded-lg flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h3 className="text-center md:text-left text-xl font-semibold mb-4">
          Occupancy Statistics
        </h3>
        <Select defaultValue="30">
          <SelectTrigger
            isArrow={false}
            className="w-[110px] font-[500] h-[40px] text-[13px] text-[#667085] border border-[#858D9D] rounded-lg flex items-center justify-center gap-2 text-center"
          >
            <span>
              <Calendar />
            </span>
            <SelectValue placeholder="Monthly" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="30">Monthly</SelectItem>
              <SelectItem value="7">Weekly</SelectItem>
              <SelectItem value="365">Yearly</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full h-[350px]">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
