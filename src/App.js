import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";
import BaseCurrency from "./Components/BaseCurrency/BaseCurrency";
import ChartDataAPI from "./Components/Charts/ChartDataAPI";
import ExchangeAPI from "./Components/Exchange/ExchangeAPI";


function App() {
    return (

        <div className="mx-3 my-2 main-container bg-slate-300 antialiased flex flex-row max-w-fit h-fit">
            <div className="flex-row max-w-fit">
                <div className="flex ml-5 mt-5">
                    <div>
                        <BaseCurrency/>
                    </div>
                    <div className="flex-grow mr-0">
                        <Search/>
                    </div>
                </div>
                <div className="flex-grow w-[62rem] bg-white px-3 my-5 ml-5 mr-0 rounded-lg h-[23rem]">
                    <ChartDataAPI/>
                </div>
                <div className="flex ">
                    <div className="w-[26rem] ... ml-5 pr-3 pl-5 rounded-lg bg-white h-[16.5rem]">
                        <PieChart/>
                    </div>
                    <div className="ml-[3rem] pr-3  rounded-lg bg-white max-h-[16.5rem]">
                        <ExchangeAPI/>
                    </div>
                </div>
            </div>
            <div className=" mx-6 my-5 rounded-lg bg-white w-fit ">
                <CoinListAPI/>
            </div>
        </div>


    );
}

export default App;
