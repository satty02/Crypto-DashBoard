import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

    const coins = useSelector(state=>state.coinsData)

    const mkt_cap = coins.sort((a,b)=>b.market_cap - a.market_cap)

    const sumMktCap = mkt_cap.slice(0,3).reduce((result,item)=>result+item.market_cap,0);

    const data = {
        labels: mkt_cap.map(coins=>coins.name).slice(0,3),
        datasets: [
          {
            label: 'Market Capital $',
            data: mkt_cap.map(mkt=>mkt.market_cap).slice(0,3),
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };


  return (
    <div className='max-w-fit h-60 w-60'>
      <div className='flex'>
        <p>Portfolio</p>
        <div className=' flex px-12'>Total value:{sumMktCap}</div>
      </div>
      
        <Pie data={data} />
    </div>
  )
}

export default PieChart