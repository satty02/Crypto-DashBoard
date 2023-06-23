import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

function Chart1() {

    const selectedChart = useSelector(state =>state.chartSelect);

<<<<<<< HEAD
=======
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

>>>>>>> 4a6ea4e48371825ba05b1a0456a3d5d757061b2f

// Conditional Rendering for chart types

let PlotChart;

if(selectedChart==='Line Chart'){
             PlotChart =  <LineChart/>
}else if(selectedChart==='Bar Chart'){
          PlotChart =   <BarChart/>
}else{
        PlotChart = <p>Please Seclect chart</p>
}


  return (
    <div>
        <div>
            {PlotChart}
        </div>
    </div>
    
  )
}

export default Chart1