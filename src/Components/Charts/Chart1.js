import moment from 'moment/moment';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line,Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function Chart1() {

    const chartData = useSelector(state=>state.chartData);
    const chartData2 = useSelector(state=>state.chartData2)
    const selectedChart = useSelector(state =>state.chartSelect);

    // selected coin is 
    const selectedCoins = useSelector(state=>state.coinSelect)
    const selectedCoins2 = useSelector(state=>state.coinSelect2)

   
            const options = {
                
                maintainAspectRatio: false,
                height:60,
                widht:80
               
              };
              
              const labels = chartData.map(time=>moment(time[0]).format('MM/YY HH:MM'))
              
              const data = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                  {
                    label: `${selectedCoins}`,
                    data: chartData.map(price=>price[1]),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
        
                  {
                    label: `${selectedCoins2}`,
                    data: chartData2.map(price=>price[1]),
                    borderColor: 'rgb(53, 162, 235)',
                      backgroundColor: 'rgba(53, 162, 235, 0.5)',
                  },
                ],
              };
    
// selecting the chart name


// Conditional Rendering for chart types

let PlotChart;

if(selectedChart==='Line Chart'){
             PlotChart =  <Line options={options} data={data} />
}else if(selectedChart==='Bar Chart'){
          PlotChart =   <Bar options={options} data={data} />
}else{
        PlotChart = <p>Please Seclect chart</p>
}


  return (
    <div>
        
        {/* <p>slected chart is {selectedChart}</p> */}
        {/* <div>chart for {coin} is here:</div> */}
        <div>
            {PlotChart}
        </div>
    </div>
    
  )
}

export default Chart1