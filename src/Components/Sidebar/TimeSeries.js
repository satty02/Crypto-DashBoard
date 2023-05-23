import React from 'react';
import { useState,useEffect } from 'react';
import Coin from './Coin';
import { useDispatch, useSelector } from 'react-redux';
import { coinsListActions } from '../../State/Action/index';
import axios from 'axios';

function TimeSeries() {


    
    const coins = useSelector((state)=>state.coinsData)
    



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