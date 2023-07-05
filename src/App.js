import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";
import BaseCurrency from "./Components/BaseCurrency/BaseCurrency";
import ChartDataAPI from "./Components/Charts/ChartDataAPI";
import ExchangeAPI from "./Components/Exchange/ExchangeAPI";


function App() {
    return (
        <div className="m-3 main-container bg-slate-300 antialiased flex flex-row max-w-fit ">
            <div className="flex-row max-w-fit">
                <div className="flex ml-5 mt-5 " >
                    <div>
                        <BaseCurrency/>
                    </div>
                    <div className="flex-grow mr-2">
                        <Search/>
                    </div>
                </div>
                    <div className=" flex-grow bg-white m-5 rounded-lg">
                         <ChartDataAPI/>
                    </div>
                <div className="my-3 flex">
                    <div className=" w-96 ... ml-5 rounded-lg bg-white">
                        <PieChart/>
                    </div>
                    <div className="mx-5 rounded-lg bg-white">
                        <ExchangeAPI/>
                    </div>
                </div>
                    
            </div>

                    <div className=" m-3 rounded-lg bg-white w-fit ">
                         <CoinListAPI/>
                   </div>
        </div>


    );
}

export default App;
