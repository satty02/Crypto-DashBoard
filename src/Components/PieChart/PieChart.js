// this component renders the pie-chart from chart.js

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {

    const baseCurrency = useSelector(state=>state.BaseCurrency)

    const coins = useSelector(state=>state.coinsData)

    const mkt_cap = coins.sort((a,b)=>b.market_cap - a.market_cap)

    const sumMktCap = mkt_cap.slice(0,3).reduce((result,item)=>result+item.market_cap,0);

    const options = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
          align:'start',
          labels: {
            usePointStyle:true,
            pointStyle:'dot',
            boxWidth:30,
            boxHeight:6,
            font: {
              size: 12,
              weight: 'bold',
            },
          },
          
        },
      },
      layout: {
        padding:{
          right:-30,
        }
        
      }
    };

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
    <div className='piechart'>
      <div className='flex pt-3 border-b-2'>
        <p className='pl-2 font-bold text-lg'>Portfolio</p>
        <div className='pl-14 text-gray-400' data-testid='value'> Total value: <b className=' ml-2 text-black'>{baseCurrency==='inr'?'₹':baseCurrency==='usd'?'$':baseCurrency==='eur'?'€':baseCurrency==='jpy'?'¥':'No select currency'}{sumMktCap}</b></div>
      </div >
      <div data-testid='pie-chart' className="flex justify-center w-64 md:w-72 max-h-[13.5rem] md:h-56">
          <Pie data={data} options={options} />
      </div>
    </div>
  )
}

export default PieChart