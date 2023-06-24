import LineChart from "./LineChart";
import BarChart from "./BarChart";
import { useSelector } from "react-redux";

function Chart1() {

    const selectedChart = useSelector(state =>state.chartSelect);


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