// this component is used to fetch chart data from coinGeko api.

import React ,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chartDataAction } from '../../State/Action/chartDataAction'
import SelectComponent from './SelectComponent'

function ChartDataAPI() {

    const dispatch = useDispatch()

    // importing baseCurrency from base currency reducer
    const baseCurrency = useSelector(state => state.BaseCurrency)

        //selecting days
        const days = useSelector(state=>state.coinsDate);

        // selecting coins from coin List (this was selected from selectComponents)

        const selectedCoins = useSelector(state=>state.coinSelect);

        
        
    const  getData = async () => {
        const urls = []

        for(let i=0; i<selectedCoins.length; i++){
            const url = `https://api.coingecko.com/api/v3/coins/${selectedCoins[i]}/market_chart?vs_currency=${baseCurrency}&days=${days}`
            urls.push(url)

        }

            try{
                const responses = await Promise.all(urls.map(url=>fetch(url)));
                const data = await Promise.all(responses.map(response=>response.json())).then(data=>data.map(coin=>coin.market_caps));
                dispatch(chartDataAction(data));
            }catch(ex){
                console.log(ex);
            }
        
    
        }
   
    useEffect(()=>{
        getData();
        // eslint-disable-next-line
    },[selectedCoins,days,baseCurrency])


  return (
    <div>
        <SelectComponent/>
    </div>
  )
}

export default ChartDataAPI