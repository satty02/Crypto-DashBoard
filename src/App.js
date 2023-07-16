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
                <div className="flex-grow  sm:h-[27rem] md:h-[23rem] xl:h-[22.5rem] 2xl:h-[37.5rem] sm:w-[39rem] md:w-[62rem] lg:w-[56.5rem] xl:w-[55.5rem] 2xl:w-[83rem] lg:mr-3  bg-white px-3 sm:my-3 xl:my-2 2xl:my-5 ml-5 mr-0 rounded-lg  ">
                    <ChartDataAPI/>
                </div>
                <div className="md:flex ">
                    <div className="ml-5 pr-3 pl-5 rounded-lg bg-white md:h-[17.5rem] lg:h-[16.5rem] 2xl:h-[20.5rem] overflow-hidden sm:w-[39rem] lg:w-[21.5rem] xl:w-[26rem] 2xl:w-[36rem]">
                        <PieChart/>
                    </div>
                    <div className="xl:px-1 2xl:px-[3rem] ml-6 pr-3 rounded-lg bg-white   sm:w-[39rem]  lg:w-[33.5rem] xl:w-[28rem] 2xl:w-[46rem] ">
                        <ExchangeAPI/>
                    </div>
                </div>
            </div>
            <div className="sm:ml-5 2xl:mx-6 my-5 rounded-lg bg-white sm:w-[39rem] md:w-[30rem] lg:w-[22.5rem] xl:w-[24.5rem] 2xl:w-[30.5rem] xl:h-[42.5rem]  2xl:h-[63rem] overflow-hidden">
                <CoinListAPI/>
            </div>
        </div>


    );
}

export default App;
