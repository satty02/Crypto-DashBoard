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
    <div className="main-container flex mx-3 bg-slate-300 antialiased">
      
        <div className="m-3">
            <div className="flex ...">
                 <div className="flex-none mx-3 w-24 h-10 ...">
                   <FetchData/>
                  </div> 
                  <div className="grow h-10 ...">
                    <Search/>
                  </div>
            </div>
            <div>
              <div className="m-3 bg-slate-300 ">
                  <SelectComponent/>
              </div>
            </div>
            
            
        <div className="flex  antialiased" >
            <div className="flex-none border  w-96 ... m-3 rounded-md bg-white">
              <PieChart/>
            </div>
            <div className="flex-initial border m-3 rounded-md bg-white" >
               <CurrencyConverter/>
            </div>
           </div>
        </div>
        <div className="flex-wrap border my-3 rounded-md bg-white  ">
            <CoinListAPI/>
        </div>
        
      </div>
  
         
  );
}

export default App;
