import SelectComponent from "./Components/Charts/SelectComponent";
import CurrencyConverter from "./Components/Exchange/CurrencyConverter";
import Search from "./Components/Search/Search";
import TimeSeries,{} from "./Components/Sidebar/TimeSeries";
import CoinCurrency from "./Components/Currency/CoinCurrency";
import PieChart from "./Components/PieChart/PieChart";

function App() {

  

  return (
    <div className="main-container flex mx-3 bg-slate-50">
      
        <div>
            <div>
              <div className="flex  border m-3 bg-white">
                  <CoinCurrency/>
                  <div className="m-3 mx-12">
                    <Search/>
                  </div>
              </div> 

              <div className="border m-3 bg-white ">
                  <SelectComponent/>
              </div>
            </div>
            
            
            <div className="flex border m-3 bg-white">
              <PieChart/>
              <CurrencyConverter/>
            </div>
        </div>
        <div className="flex-wrap border my-3 rounded-md bg-white  ">
            <TimeSeries/>
        </div>
      </div>
  
         
  );
}

export default App;
