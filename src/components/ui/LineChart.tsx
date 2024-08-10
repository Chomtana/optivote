"use client";
import {
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const LineChart = () => {
  const data: ChartData<"line"> = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: "rgba(91, 164, 255, 0.2)",
        borderColor: "rgba(91, 164, 255, 1)",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
      {
        label: "My Second Dataset",
        backgroundColor: "rgba(30, 97, 242, 0.2)",
        borderColor: "rgba(30, 97, 242, 1)",
        data: [15, 39, 70, 11, 86, 35, 10],
        fill: true,
        cubicInterpolationMode: "monotone",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255, 255, 255, 0)", // Change this to your preferred color
        },
      },
      y: {
        ticks: {
          display: false, // This hides the y-axis labels
        },
        grid: {
          color: "#1F242F", // Change this to your preferred color
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
