import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";
import BaseCurrency from "./Components/BaseCurrency/BaseCurrency";
import ChartDataAPI from "./Components/Charts/ChartDataAPI";
import ExchangeAPI from "./Components/Exchange/ExchangeAPI";


function App() {
  return (
    <div className="main-container flex mx-3 bg-slate-300 antialiased w-100">
      
        <div className="m-3">
            <div className="flex ...">
                 <div className="Top Currency Selector flex-none mx-3 w-24 h-10 ...">
                  <BaseCurrency/>
                  </div> 
                  <div className="Search Bar grow h-10 ...">
                    <Search/>
                  </div>
            </div>
            <div className="Barchart" >
              <div className="m-3 bg-slate-300 ">
                  <ChartDataAPI/>
              </div>
            </div>
            
        
        <div className="flex  antialiased" >
            <div className="Piechart flex-none border  w-96 ... mx-3 rounded-md bg-white">
              <PieChart/>
            </div>
            <div className="flex-initial grow border mx-3 rounded-md bg-white" >
               <ExchangeAPI/>
            </div>
           </div>
        </div>
        <div className="flex-wrap border my-3 mr-6 rounded-md bg-white  ">
            <CoinListAPI/>
        </div>
      </div>
  
         
  );
}

export default App;
