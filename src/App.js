import SelectComponent from "./Components/Charts/SelectComponent";
import CurrencyConverter from "./Components/Exchange/CurrencyConverter";
import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import FetchData from "./APIdata/FetchData";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";

function App() {
  return (
    <div className="main-container flex mx-3 bg-slate-300 antialiased">
      
        <div>
            <div>
              <div className="flex m-3 h-10 ">
                  <FetchData/>
                  <div className=" px-11 h-10">
                    <Search/>
                  </div>
              </div> 

              <div className="border m-3 bg-white ">
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
