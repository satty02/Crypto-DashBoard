import SelectComponent from "./Components/Charts/SelectComponent";
import CurrencyConverter from "./Components/Exchange/CurrencyConverter";
import Search from "./Components/Search/Search";
import TimeSeries,{} from "./Components/Sidebar/TimeSeries";
import CoinCurrency from "./Components/baseCurrency/CoinCurrency";
import PieChart from "./Components/PieChart/PieChart";
import FetchData from "./APIdata/FetchData";

function App() {

  

  return (
<<<<<<< HEAD
    <div className="main-container flex mx-3 bg-gray-200">
=======
    <div className="main-container flex mx-3 bg-slate-50">
>>>>>>> 1591b75a535876d2d6fb5fe1c4556172ed0c9bfa
      
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
        <div>
          <FetchData/>
        </div>
      </div>
  
         
  );
}

export default App;
