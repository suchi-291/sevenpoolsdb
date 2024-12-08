import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ color1, color2 }) => {
  const options = {
    chart: {
      id: "bar-chart",
      toolbar: {
        show: false, // Disables the toolbar
      },
    },
    xaxis: {
      categories: ["Product A", "Product B", "Product C", "Product D"],
    },
    colors: [color1, color2],
    grid: {
      show: false, // Disables the grid
    },
  };

  const series = [
    {
      name: "Profit",
      data: [20, 40, 60, 80],
    },
    {
      name: "Loss",
      data: [10, 20, 15, 30],
    },
  ];

  return <Chart options={options} series={series} type="bar" height={220} />;
};

export default BarChart;
