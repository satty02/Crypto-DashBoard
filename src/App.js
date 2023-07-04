import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";
import BaseCurrency from "./Components/BaseCurrency/BaseCurrency";
import ChartDataAPI from "./Components/Charts/ChartDataAPI";
import ExchangeAPI from "./Components/Exchange/ExchangeAPI";


function App() {
    return (
        <div className="main-containe bg-slate-300 antialiased flex">
            <div className="flex-row flex-1">
                <div className="flex ml-5 mt-5" >
                    <div>
                        <BaseCurrency/>
                    </div>
                    <div className="flex-1 mr-2">
                        <Search/>
                    </div>
                </div>
                <div className="bg-white m-5 rounded-lg"> <ChartDataAPI/></div>
                <div className="flex">
                    <div className=" w-96 ... ml-5 rounded-lg bg-white">
                        <PieChart/>
                    </div>
                    <div className=" mx-5 rounded-lg bg-white ml-auto">
                        <ExchangeAPI/>
                    </div>
                </div>
            </div>

            <div className="rounded-lg bg-white w-fit ml-auto mr-5 mt-5">
                <CoinListAPI/>
            </div>
        </div>


    );
}

export default App;
