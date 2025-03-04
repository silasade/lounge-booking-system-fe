"use client";
import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  ChartOptions,
  Chart,
} from "chart.js";

// Register necessary Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

const BookingTrends: React.FC = () => {
  const chartRef = useRef<Chart<"line"> | null>(null);

  const [gradientApartment, setGradientApartment] = useState<
    string | CanvasGradient
  >("#8979FF4D");
  const [gradientPool, setGradientPool] = useState<string | CanvasGradient>(
    "#FF928A4D"
  );

  // Create gradients for the area under the lines
  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current; // No need for 'as any'
      if (chart.ctx) {
        const apartmentGradient = chart.ctx.createLinearGradient(0, 0, 0, 400);
        apartmentGradient.addColorStop(0, "#8979FF4D");
        apartmentGradient.addColorStop(1, "#FFFFFF00");

        const poolGradient = chart.ctx.createLinearGradient(0, 0, 0, 400);
        poolGradient.addColorStop(0, "#FF928A4D");
        poolGradient.addColorStop(1, "#FF928A0D");

        setGradientApartment(apartmentGradient);
        setGradientPool(poolGradient);
      }
    }
  }, []);

  // Sample data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Apartment Bookings",
        data: [50, 60, 80, 75, 90, 100, 120],
        borderColor: "#8979FF", // Line color
        backgroundColor: gradientApartment, // Gradient under line
        fill: true, // Fill the area
        tension: 0.4, // Curved line
      },
      {
        label: "Pool Bookings",
        data: [30, 40, 60, 55, 70, 85, 100],
        borderColor: "#FF928A", // Line color
        backgroundColor: gradientPool, // Gradient under line
        fill: true, // Fill the area
        tension: 0.4, // Smooth curve
      },
    ],
  };

  // Chart options
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove grid lines on x-axis
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#EAEAEA", // Light gray grid lines
        },
      },
    },
  };

  return (
    <div className="w-full h-[356px] p-5">
      <h3>Booking trends</h3>

      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BookingTrends;
