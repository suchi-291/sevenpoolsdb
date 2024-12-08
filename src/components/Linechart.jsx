import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ color1, color2 }) => {
  const options = {
    chart: {
      id: "line-chart",
      toolbar: {
        show: false, // Disables the toolbar
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    colors: [color1, color2],
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false, // Disables the grid
    },
  };

  const series = [
    {
      name: "Sales",
      data: [30, 40, 35, 50, 49, 60],
    },
    {
      name: "Revenue",
      data: [20, 30, 25, 40, 45, 50],
    },
  ];

  return <Chart options={options} series={series} type="line" height={180} />;
};

export default LineChart;
