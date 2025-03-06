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
    <div className="w-full min-h-[356px] p-5 rounded-lg flex flex-col">
      <h3 className="text-center md:text-left text-xl font-semibold mb-4">
        Occupancy Statistics
      </h3>
      <div className="w-full h-[350px]">
        <Bar ref={chartRef} data={data} options={options} />
      </div>
    </div>
  );
};

export default BarChart;
