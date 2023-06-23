import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

const BarChart = () => {

    const chartData2 = useSelector(state=>state.chartData2);
    const chartData = useSelector(state=>state.chartData);
 // selected coin is 
 const selectedCoins = useSelector(state=>state.coinSelect)
 const selectedCoins2 = useSelector(state=>state.coinSelect2)

  const labels = chartData.map(time=>time[0])
  

  const data = {
    labels: labels,
    datasets: [
      {
        label: `${selectedCoins}`,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: chartData.map(price=>price[1]),
        },
        {
            label: `${selectedCoins2}`,
            backgroundColor: "	rgb(0,0,255)",
            borderColor: "	rgb(0,0,255)",
            data: chartData2.map(price=>price[1]),
            }
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;