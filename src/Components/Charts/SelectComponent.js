// this component is used to select necessary chart data and render the chart.

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CoinDatesAction} from '../../State/Action';
import { chartSelectionAction } from '../../State/Action';
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DropdownMultiSelect from './DropdownMultiSelect';

function SelectComponent() {

    // this is used to highlight the selected button.
    const [selectedButton , setSelectedButton] = useState(null);

        // importing the states 
    const selectedChart = useSelector(state =>state.chartSelect)

    // importing use dispatch 
    const dispatch = useDispatch();

    //selecting days
    const days = useSelector(state=>state.coinsDate)

    // method for dispatching selected dates 
    const onClick1 =(e)=>{
        if(selectedButton===e.target.value){
            setSelectedButton(null);
        }else{
            setSelectedButton(e.target.value)
        }
        dispatch(CoinDatesAction(e.target.name));
    }

    const onChangeChart = (e)=>{
        dispatch(chartSelectionAction(e.target.value))
    }

    const dateToDays = (date) => {
        const today = new Date();
        const selectedDate = new Date(date);
      
        // Calculate the time difference in milliseconds
        const timeDifference =  today.getTime() - selectedDate.getTime() ;
      
        // Convert milliseconds to days
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      
        return days;
      };
      

    const handlechange = (e)=>{
        const days = dateToDays(e.target.value);
        dispatch(CoinDatesAction(days));
        setSelectedButton(e.target.name)
    }


    let PlotChart;

if(selectedChart==='Line Chart'){
             PlotChart =  <LineChart/>
}else if(selectedChart==='Bar Chart'){
          PlotChart =   <BarChart/>
}else{
        PlotChart = <h1 className='mt-12 text-red-600 font-semiboldbold text-2xl'>Please Select chart</h1>
}



  return ( 
    <div className='flex flex-col main-container  h-[23rem] rounded-lg'>
        <div className='flex flex-wrap'>
            <div className='flex justify-center  mx-16 h-8 mt-4 space-x-2 mb-4'>
                <input type='button' onClick={onClick1} value='1D' name='1' className={` bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow ${selectedButton==='1D'?'bg-blue-200':'hover:border-sky-600'}`}></input>
                <input type='button' onClick={onClick1} value='1W' name='7' className={` bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow ${selectedButton==='1W'?'bg-blue-200':'hover:border-sky-600'}`}></input>
                <input type='button' onClick={onClick1} value='1M' name='30' className={` bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow ${selectedButton==='1M'?'bg-blue-200':'hover:border-sky-600'}`}></input>
                <input type='button' onClick={onClick1} value='6M' name='180' className={` bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow ${selectedButton==='6M'?'bg-blue-200':'hover:border-sky-600'}`}></input>
                <input type='button' onClick={onClick1} value='1Y' name='365' className={` bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow ${selectedButton==='1Y'?'bg-blue-200':'hover:border-sky-600'}`}></input>
                <input type='date' onChange={handlechange} data-testid='date' name='date' value={days} className={` bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow ${selectedButton==='date'?'bg-blue-100':'hover:border-sky-600'}`}></input>   
            </div> 

            <div className='flex mt-4 mb-4 md:ml-auto'>
                <div>
                        <DropdownMultiSelect/>          
                </div>
                    
                    
                <div className='mx-2' >
                        <select className={`object-contain h-8 m-1 p-1 rounded-lg  bg-white hover:bg-blue-100 text-gray-800 font-semibold border  shadow ${selectedChart==='Line Chart' ||selectedChart==='Bar Chart'?'bg-blue-200':'hover:border-sky-600'}`} name={selectedChart} value={selectedChart} onChange={onChangeChart}>
                            <option>Chart type</option>
                            <option>Line Chart</option>
                            <option>Bar Chart</option>
                        </select>
                </div>
            </div>
        </div>  
        
        <div className=''>
            <div className=' flex justify-center '>{PlotChart}</div>
        </div>
    </div>

)}

export default SelectComponent;