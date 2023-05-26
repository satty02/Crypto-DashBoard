import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { coinsListActions } from '../State/Action';
import { coinExchangeAction } from '../State/Action/coinExchangeAction';
import { chartDataAction } from '../State/Action/chartDataAction';
import BaseCurrency from '../Components/BaseCurrency/BaseCurrency';

function FetchData() {

  const dispatch = useDispatch()
 
  const baseCurrency = useSelector(state=>state.CoinCurrency);
  const coinsDate = useSelector(state=>state.coinsDate);

  const chartDataList = useSelector(state=>state.chartData);

  

//   functions created for fetching the data from multiple uri's
    const getData = () =>{

    const urls = 
    [
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${baseCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`,
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${baseCurrency}&days=${coinsDate}`,
        `https://api.coingecko.com/api/v3/exchange_rates`,
    ]

    // mapping the fetched data into request arrays
    const request = urls.map(url=>axios.get(url));
    
    // spreading all datas inito seperate variables using spread operators 
    axios.all(request).then(
        axios.spread((...responses) => {
            const coin_list_names = responses[0].data;
            const coin_chart_data = responses[1].data;
            const coin_exchange = responses[2].data;
            
            // dispatching all the vaiables from api's into the respective reducers
            dispatch(coinsListActions(coin_list_names));
            dispatch(coinExchangeAction(coin_exchange));
            dispatch(chartDataAction(coin_chart_data.prices));    
        }
    ));
    }

    // calling the function using useEffect to avoid the contineous calling of the api's
    useEffect(()=>{
        getData();
    },[baseCurrency,chartDataList])

  return (
    
        <BaseCurrency/>
    
  )
    
  
}
    

export default FetchData