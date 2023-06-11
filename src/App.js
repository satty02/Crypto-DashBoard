import SelectComponent from "./Components/Charts/SelectComponent";
import CurrencyConverter from "./Components/Exchange/CurrencyConverter";
import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import FetchData from "./APIdata/FetchData";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";
import BaseCurrency from "./Components/BaseCurrency/BaseCurrency";
import ChartDataAPI from "./Components/Charts/ChartDataAPI";

function App() {
  return (
    <div className="main-container flex mx-3 bg-slate-50">
      
        <div>
            <div>
              <div className="flex  border m-3 bg-white">
                  <BaseCurrency/>
                  <div className="m-3 mx-12">
                    <Search/>
                  </div>
              </div> 

              <div className="border m-3 bg-white ">
                  <ChartDataAPI/>
              </div>
            </div>
            
            
            <div className="flex border m-3 bg-white">
              <PieChart/>
              <CurrencyConverter/>
            </div>
        </div>
        <div className="flex-wrap border my-3 rounded-md bg-white  ">
            <CoinListAPI/>
        </div>
        
      </div>
  
         
  );
}

export default App;
