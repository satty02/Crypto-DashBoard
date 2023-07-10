// this component renders the Line chart from chart.js

import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import  Chart  from "chart.js/auto";
import moment from "moment/moment";

const LineChart = () => {

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
    
    
    const labels = ['Jan' , 'Feb' , 'Mar' , 'Apr', 'May', 'Jun' , 'Jul' ,'Aug', 'Sep', 'Oct', 'Nov','Dec']
    

    const chartMultiData = chartData.map((data,index)=>({
      label: `${selectedCoins[index]}`,
      backgroundColor: randomColors[index],
      borderColor: randomColors[index],
      data: data.map(price=>`${parseInt(price[1])/1000000000}`),
      borderWidth:1,
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