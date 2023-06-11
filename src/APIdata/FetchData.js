import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { coinsListActions } from '../State/Action';
import { coinExchangeAction } from '../State/Action/coinExchangeAction';
import { chartDataAction } from '../State/Action/chartDataAction';
import BaseCurrency from '../Components/BaseCurrency/BaseCurrency';

function FetchData() {

  const dispatch = useDispatch()
 


  

//   functions created for fetching the data from multiple uri's
    const getData = () =>{

    const urls = 
    [

        `https://api.coingecko.com/api/v3/exchange_rates`,
    ]

    // mapping the fetched data into request arrays
    const request = urls.map(url=>axios.get(url));
    
    // spreading all datas inito seperate variables using spread operators 
    axios.all(request).then(
        axios.spread((...responses) => {
            const coin_exchange = responses[2].data;
            
            // dispatching all the vaiables from api's into the respective reducers
            dispatch(coinExchangeAction(coin_exchange));
        }
    ));
    }

    

  return (
    
        <BaseCurrency/>
    
  )
    
  
}
    

export default FetchData