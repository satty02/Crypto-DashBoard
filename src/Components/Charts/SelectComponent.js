import { Chart } from 'chart.js';
import React , {useEffect, useState} from 'react';
import Chart1 from './Chart1';
import { useDispatch, useSelector } from 'react-redux';
import { CoinDatesAction} from '../../State/Action';
import { chartSelectionAction } from '../../State/Action';
import { coinSelectionAction,coinSelectionAction2 } from '../../State/Action';


function SelectComponent() {

        // importing the states 
    const coins = useSelector(state=>state.coinsData);
    const selectedCoins = useSelector(state=>state.coinSelect)
    const selectedCoins2 = useSelector(state=>state.coinSelect2);
    const selectedChart = useSelector(state =>state.chartSelect)


    // importing use dispatch 
    const dispatch = useDispatch();

    //filterining the coins based on their names
    const coinsId = coins.map(coin=>coin.id)

    //selecting days
    const days = useSelector(state=>state.coinsDate)
    
    //selecting the coin name
    const onChange = (e)=>{
        dispatch(coinSelectionAction(e.target.value))
    }

    // selecting coins for comparision
    const onChange2 = (e)=>{
        dispatch(coinSelectionAction2(e.target.value))
    }
    
    // method for dispatching selected dates 
    const onClick1 =(e)=>{
        dispatch(CoinDatesAction(e.target.value))
    }

    const onChangeChart = (e)=>{
        dispatch(chartSelectionAction(e.target.value))
    }


  return ( 
    <div className='main-container border rounded-lg'>
        <div className='flex mx-auto h-8 mt-4'>
                        
            <input type='button' onClick={onClick1} name='1d' value='1D' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold mx-1 px-4 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1d' value='1W' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold mx-1 px-4 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1d' value='1M' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold mx-1 px-4 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1d' value='6M' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold mx-1 px-4 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1d' value='1Y' className='bg-white hover:bg-blue-100 text-gray-800 font-semibold mx-1 px-4 border rounded-lg shadow  hover:border-sky-600'></input>
            <input type='button' onClick={onClick1} name='1d' value='max'className='bg-white hover:bg-blue-100 text-gray-800 font-semibold mx-1 px-4 border rounded-lg shadow hover:border-sky-600'></input>
            
            <div className='flex-wrap'>
                

                <select name={selectedCoins} className='object-contain w-13 h-8 rounded-lg' value={selectedCoins} onChange={onChange}>
                    {coinsId.map((coin,index)=><option key={index}>{coin}</option>)}
                </select>

            {/* creating second dropdown for selecting coins llist for second chart comparison*/}
                
                <select name={selectedCoins2} className='object-contain w-13 h-8 rounded-lg' value={selectedCoins2} onChange={onChange2}>
                    {coinsId.map((coin,index)=><option key={index}>{coin}</option>)}
                </select>     

            </div>
            
            
            <div className='flex-wrap' >
                <select className='object-contain w-13 h-8 rounded-lg' name={selectedChart} value={selectedChart} onChange={onChangeChart}>
                    <option>Chart type</option>
                    <option>Line Chart</option>
                    <option>Bar Chart</option>
                </select>
            </div>
        </div>       
        {/* <p>selected days is {days}</p> 
        <p>selected coin is {selectedCoins}</p> */}
        <div>
            <Chart1 coin={selectedCoins}
                    coin2 = {selectedCoins2}
                    days = {days}
                />
        </div>
    </div>

)}

export default SelectComponent;