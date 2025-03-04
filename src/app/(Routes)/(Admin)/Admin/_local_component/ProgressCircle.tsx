"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  Plugin,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Define data for the semi-circle progress chart
const data = {
  labels: ["Occupied", "Available"],
  datasets: [
    {
      data: [65, 35], // Example: 65% occupied, 35% available
      backgroundColor: ["#D4A373", "#EEF0F2"], // Occupied & Available colors
      borderWidth: 2, // Slight border for smooth transition
      borderRadius: 10, // Adds rounded effect to edges
      circumference: 180, // Make it a half-circle
      rotation: 270, // Start from bottom
    },
  ],
};

// Chart options
const options: ChartOptions<"doughnut"> = {
  responsive: true,
  maintainAspectRatio: false, // Allow it to grow freely
  cutout: "75%", // Adjust thickness of progress ring
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        usePointStyle: true, // Makes legend circles
        pointStyle: "circle", // Ensures proper rounding
        boxWidth: 10, // Adjust box width
        boxHeight: 10, // Adjust box height
      },
    },
  },
};

// Centered text plugin
const centerTextPlugin: Plugin<"doughnut"> = {
  id: "centerText",
  beforeDraw: (chart) => {
    const { width, height, ctx } = chart;
    ctx.save();
    ctx.font = "bold 30px sans-serif"; // Increase text size
    ctx.fillStyle = "#383E49"; // Text color
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("65%", width / 2, height / 1.7); // Centered text
  },
};

const ProgressCircle: React.FC = () => {
  return (
    <div className="w-full min-h-[356px] p-5 flex flex-col">
      <h3 className="text-xl font-semibold mb-4">Occupancy%</h3>
      <div className="w-[300px] h-[300px]">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
};

export default ProgressCircle;
