import Search from "./Components/Search/Search";
import PieChart from "./Components/PieChart/PieChart";
import CoinListAPI from "./Components/Sidebar/CoinListAPI";
import BaseCurrency from "./Components/BaseCurrency/BaseCurrency";
import ChartDataAPI from "./Components/Charts/ChartDataAPI";
import ExchangeAPI from "./Components/Exchange/ExchangeAPI";


function App() {
    return (

        <div className="md:mt-3 mx-3 my-2 main-container bg-slate-300 antialiased xl:flex  flex-row max-w-fit h-fit overflow-hidden">
            <div className="flex-row max-w-fit">
                <div className="flex ml-5 mt-5">
                    <div>
                        <BaseCurrency/>
                    </div>
                    <div className="flex-grow mr-0  md:mr-5">
                        <Search/>
                    </div>
                </div>
                <div className="flex-grow sm:w-[39rem] sm:h-[27rem] md:w-[62rem] xl:w-[55.5rem] md:h-[22.5rem] lg:mr-3 lg:w-[56.5rem] bg-white px-3 my-5 ml-5 mr-0 rounded-lg md:h-[23rem] ">
                    <ChartDataAPI/>
                </div>
                <div className="md:flex ">
                    <div className="md:w-[26rem] ... ml-5 pr-3 pl-5 rounded-lg bg-white md:h-[17.5rem] overflow-hidden sm:w-[39rem] lg:w-[21.5rem]">
                        <PieChart/>
                    </div>
                    <div className="px-[3rem] ml-6 pr-3  rounded-lg bg-white md:max-h-[17.5rem] sm:w-[39rem]  lg:w-[33.5rem] xl:w-[32.5rem]">
                        <ExchangeAPI/>
                    </div>
                </div>
            </div>
            <div className=" mx-6 my-5 rounded-lg bg-white    sm:w-[39rem] md:w-[30rem] lg:w-[22.5rem] xl:w-[23.5rem] h-[45rem]  overflow-hidden">
                <CoinListAPI/>
            </div>
        </div>


    );
}

export default App;
