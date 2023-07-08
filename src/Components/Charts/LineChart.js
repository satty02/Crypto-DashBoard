import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import  Chart  from "chart.js/auto";
import moment from "moment/moment";

const LineChart = () => {

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
      data: data.map(price=>`${price[1]}`),
      borderWidth:1,
    }))


    const data = {
    labels:labels,
    datasets: 
        chartMultiData
    ,
    };

  return (
    <div>
      <Line  data={data}/>
    </div>
  );
};

export default LineChart;