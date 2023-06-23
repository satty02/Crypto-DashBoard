import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";



const LineChart = () => {

    const chartData = useSelector(state=>state.chartData);
    const chartData2 = useSelector(state=>state.chartData2);

    // selected coin is 
    const selectedCoins = useSelector(state=>state.coinSelect)
    const selectedCoins2 = useSelector(state=>state.coinSelect2)

    const labels = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec']

  
    // let options = {
    //   scales: {
    //       x: {
    //           type:'time',
    //           time : {
    //             displayFormats:{
    //               quarter:'MM YYYY'
    //             }
    //           }
    //           }
    //       }
    //   }
  

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
      <Line data={data} />
    </div>
  );
};

export default LineChart;