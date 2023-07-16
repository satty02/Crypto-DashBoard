// this component is used to fetch coins list from coinGeko.

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { coinsListActions } from '../../State/Action';
import Sidebar from './Sidebar';

function CoinListAPI() {
    const baseCurrency = useSelector(state=>state.BaseCurrency);

    // call the useDispatch function for the coinlist action
    const disptach = useDispatch();

    // creating function for fetching data of coin list from coingeko website
    const getData = ()=>{


        // creating url variable also adding selected baseCurrency 
        const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${baseCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
        
        // using fetch method to get the data from coingeko url;   
        fetch(url)
        .then(res=>{
            // methods for handling error
            if(!res.ok){
                throw new Error('Network response is not ok');
            }

            // if response is ok then parsing response into json
            return res.json();
        })
        .then(data=>{
            // process the fetch data
            // dispatching into coins list created action
            disptach(coinsListActions(data));
        })
    }

    // using useEffect Hooks to prevent 
    // getData() functing to call frequently for same rendering
    useEffect(()=>{
        getData()
        // eslint-disable-next-line
    },[baseCurrency])

  return (
    <Sidebar/>
  )
}

export default CoinListAPI