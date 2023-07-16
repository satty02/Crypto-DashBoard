// this component renders the Bar chart from chart.js

import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import moment from "moment";

const BarChart = () => {

  const days = useSelector(state=>state.coinsDate)

  const baseCurrency = useSelector(state=>state.BaseCurrency)

    const chartData = useSelector(state=>state.chartData);
    // selected coin is 
 const selectedCoins = useSelector(state=>state.coinSelect);


  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
  
    return color;
  };
  
  const randomColors = Array.from({ length: chartData.length }).map(() => generateRandomColor());
    
  const timestamps = chartData.map(time=>time.map(ts=>ts[0]))[0]
  let uniqueLabels = Array.isArray(timestamps)
  ? Array.from(
    new Set(
      timestamps.map((timestamp) => {
        // eslint-disable-next-line 
        if (days == 1) {
          return moment(parseInt(timestamp)).format("HH:MM");
        } else if (days <= 7) {
          return moment(parseInt(timestamp)).format("DD");
        } else if (days <= 30) {
          return moment(parseInt(timestamp)).format("DD");
        } else if (days <= 180) {
          return moment(parseInt(timestamp)).format("MMM");
        } else {
          return moment(parseInt(timestamp)).format("MMM");
        }
      })
    )
  ):[];

  const labels = uniqueLabels;


  const chartMultiData = chartData.map((data,index)=>({
    label: `${selectedCoins[index]}`,
    backgroundColor: randomColors[index],
    borderColor: randomColors[index],
    data: data.map(price=>`${parseInt(price[1])/1000000000}`),
  }))

  const data = {
    labels: labels,
    datasets: chartMultiData,
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false, 
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
          autoSkip: true,
          maxRotation: 0,
          autoSkipPadding:5 ,
        },
      },
      y: {
        position:'top',
        title: {
          display: true,
          text:`Mkt Cap in Billion ${baseCurrency==='inr'?'₹':baseCurrency==='usd'?'$':baseCurrency==='eur'?'€':baseCurrency==='jpy'?'¥':'No select currency'}`,
        },
    },
  }
};

  return (
    <div data-testid="bar-chart" className="w-full  xl:h-[13rem] 2xl:h-[33rem]">
      <Bar data={data} options={options}/>
    </div>
  );
};

export default BarChart;  