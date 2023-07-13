// this component renders the Line chart from chart.js

import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
// eslint-disable-next-line 
import  Chart  from "chart.js/auto";
import moment from "moment/moment";

const LineChart = () => {

  const days = useSelector(state=>state.coinsDate)


    const baseCurrency = useSelector(state=>state.BaseCurrency)

    const chartData = useSelector(state=>state.chartData);

    // selected coin is 
    const selectedCoins = useSelector(state=>state.coinSelect)

    const generateRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
    
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    
      return color;
    };
    
    const randomColors = Array.from({ length: chartData.length }).map(() => generateRandomColor());
    
    
    // const labels = ['Jan' , 'Feb' , 'Mar' , 'Apr', 'May', 'Jun' , 'Jul' ,'Aug', 'Sep', 'Oct', 'Nov','Dec']
    
    const timestamps = chartData.map(time=>time.map(ts=>ts[0]))[0]

    let uniqueLabels = Array.isArray(timestamps)
    ? Array.from(
      new Set(
        timestamps.map((timestamp) => {
          // eslint-disable-next-line 
          if (days == 1) {
            return moment(parseInt(timestamp)).format("HH:MM:SS");
          } else if (days <= 7) {
            return moment(parseInt(timestamp)).format("HH:MM DD");
          } else if (days <= 30) {
            return moment(parseInt(timestamp)).format("HH:MM DD");
          } else if (days <= 180) {
            return moment(parseInt(timestamp)).format("DD MMM");
          } else {
            return moment(parseInt(timestamp)).format("DD MMM");
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
      borderWidth:2,
      pointRadius:0
    }))


    const data = {
    labels:labels,
    datasets: 
        chartMultiData
    ,
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
            autoSkipPadding:5,
          },
        },
        y: {
          position:"top",
          title: {
            display: true,
            text: `Mkt. Cap in Billion ${baseCurrency==='inr'?'₹':baseCurrency==='usd'?'$':baseCurrency==='eur'?'€':baseCurrency==='jpy'?'¥':'No select currency'}`,
          },
      },
    }
  };

  return (
    <div className="w-full h-[18rem]">
      <Line  data={data} options={options}/>
    </div>
  );
};

export default LineChart;