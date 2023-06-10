import React,{useEffect, useState} from 'react';
import CoinDetail from './CoinDetail';
import { useDispatch, useSelector } from 'react-redux';
import { coinSearchAction } from '../../State/Action';


function Search() {
    
    const dispatch = useDispatch();

    const coins = useSelector(state=>state.coinsData);

    const search = useSelector(state=>state.coinSearch);

    const onChange = (e)=>{
        dispatch(coinSearchAction(e.target.value))
    }

    
    const filterCoins = coins.filter(coin=>coin.name.toLowerCase()===search.toLowerCase())

    
      return (
    <div className='border-black'>
        <div className='border-red-700'>
            {
            
            filterCoins.map(coin=>(
                <CoinDetail
                    key={coin.id}
                    id = {coin.id}
                    name={coin.name}
                    symbol={coin.symbol}
                    market_cap = {coin.market_cap}
                    current_price = {coin.current_price}
                    image = {coin.image}
                />
            ))}
        </div> 

        <div class='max-w-md mx-auto max-w-full'>
    <div class="relative flex items-center w-full h-10 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>

        <input
        className="placeholder-gray-500 rounded-full px-3 pl-8 py-1 outline-none transition duration-700 ease-in-out focus:shadow-outline w-[30rem]"
        type="text"
        id="search"
        onChange={onChange}
        value={search}
        placeholder="Search By Coin" /> 
    </div>
</div>

    </div>

  )
}

export default Search