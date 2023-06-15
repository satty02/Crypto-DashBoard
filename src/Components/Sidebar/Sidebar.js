import React from 'react';
import Coin from './Coin';
import {useSelector } from 'react-redux';

function Sidebar() {


    
 const coins = useSelector((state)=>state.coinsData)




    return(
        <div className=''>
            <div className='main-sidebar overflow-y-auto h-screen ...'>
                
                <div className='mx-10 my-6 font-medium'> 
                    <h1> Cryptocurrency by<br /> market cap</h1>
                </div>
                <div id="pie-chart" className='max-w-fit'>

                </div>
                <ul>
                {coins.map((coin,index)=><li className='border-b-2 bg-white' key={index}><Coin key={coin.id} 
                                                     
                                                     name={coin.name}
                                                     
                                                     volume={coin.market_cap}
                                                     change = {coin.price_change_percentage_24h}
                                                /></li>)}
                </ul>

            </div>
        </div>
    )
}

export default Sidebar;