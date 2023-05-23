import React from 'react';
import { useState,useEffect } from 'react';
import Coin from './Coin';
import { useDispatch, useSelector } from 'react-redux';
import { coinsListActions } from '../../State/Action/index';
import axios from 'axios';

function TimeSeries() {

    const cur = useSelector(state=>state.CoinCurrency)


    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${cur}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    
    const coins = useSelector((state)=>state.coinsData)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        
axios.get(url).then(response=>{
    let data = response.data
    dispatch(coinsListActions(data))
})
},[cur])


const coinsList = coins.map((coin,index)=><li className='border-b-2 bg-white' key={index}><Coin key={coin.id} 
                                                     
                                                     name={coin.name}
                                                     
                                                     volume={coin.market_cap}
                                                     change = {coin.price_change_percentage_24h}
                                                /></li>)

    return(
        <div className=''>
            <div className='main-sidebar scroll-mb-24 h-96 ... text-clip overflow-scroll'>
                
                <div className='mx-10 my-6 font-medium'> 
                    <h1> Cryptocurrency by<br /> market cap</h1>
                </div>
                <div id="pie-chart" className='max-w-fit'>

                </div>
                <ul>
                    <li>
                        {coinsList}
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default TimeSeries