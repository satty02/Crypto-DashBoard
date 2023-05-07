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


const coinsList = coins.map((coin,index)=><li className='border-b-2 border-gray-100' key={index}><Coin key={coin.id} 
                                                     image={coin.image}
                                                     name={coin.name}
                                                     symbol={coin.symbol}
                                                     price={coin.current_price}
                                                     volume={coin.market_cap}
                                                     change = {coin.price_change_percentage_24h}
                                                /></li>)

    return (
    <div>
        <div className='main-sidebar'>
            <div>
            </div>

            <div id="pie-chart" className='max-w-fit'>


            </div>

            <ul className='flex flex-col'>
                <li></li>
                {coinsList}
            </ul>

            </div>
        </div>
    
  )
}

export default TimeSeries