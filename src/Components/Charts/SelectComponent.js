import React, { useState }  from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CoinDatesAction} from '../../State/Action';
import { chartSelectionAction } from '../../State/Action';
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import DropdownMultiSelect from './DropdownMultiSelect';

function SelectComponent() {
    const [date , setDate] = useState('')


        // importing the states 
    const selectedChart = useSelector(state =>state.chartSelect)

    // importing use dispatch 
    const dispatch = useDispatch();

    //selecting days
    const days = useSelector(state=>state.coinsDate)
    
    // method for dispatching selected dates 
    const onClick1 =(e)=>{
        dispatch(CoinDatesAction(e.target.value))
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
        
        dispatch(CoinDatesAction(days))

    }


    let PlotChart;

if(selectedChart==='Line Chart'){
             PlotChart =  <LineChart/>
}else if(selectedChart==='Bar Chart'){
          PlotChart =   <BarChart/>
}else{
        PlotChart = <p>Please Seclect chart</p>
}



  return ( 
    <div className='flex flex-col main-container border rounded-lg'>
        <div className='flex mx-16 h-8 mt-4 space-x-2 mb-4'>
                        
            <input type='button' onClick={onClick1} name='1d' value='1' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1W' value='7' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1M' value='30' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='6M' value='180' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1Y' value='365' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-10 px-2 m-1 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='date' onChange={handlechange} name='date' value={date} className='bg-white hover:bg-blue-100 text-gray-800 font-semibold h-7 w-7  px-1 m-1 border rounded-lg shadow  hover:border-sky-600'></input>
            
         <div> 
                <DropdownMultiSelect/>          
         </div>
            
            
         <div className='flex-wrap' >
                <select className='object-contain h-8 m-1 p-1 rounded-lg  bg-white hover:bg-blue-100 text-gray-800 font-semibold border  shadow  hover:border-sky-600' name={selectedChart} value={selectedChart} onChange={onChangeChart}>
                    <option>Chart type</option>
                    <option>Line Chart</option>
                    <option>Bar Chart</option>
                </select>
        </div>
    </div>       
        
        <div>
            {PlotChart}
        </div>
    </div>

)}

export default SelectComponent;