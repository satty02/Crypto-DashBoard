import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chartDataAction } from '../../State/Action/chartDataAction'
import SelectComponent from './SelectComponent'
import { chartDataAction2 } from '../../State/Action'

function ChartDataAPI() {

    const dispatch = useDispatch()

    // importing baseCurrency from base currency reducer
    const baseCurrency = useSelector(state => state.BaseCurrency)

        //selecting days
        const days = useSelector(state=>state.coinsDate)

        // selecting coins from coin List (this was selected from selectComponents)

        const selectedCoins = useSelector(state=>state.coinSelect);

        // selecting second coins for comparision;

        const selectedCoins2 = useSelector(state=>state.coinSelect2)

    const getData = () => {

        const url1 = `https://api.coingecko.com/api/v3/coins/${selectedCoins}/market_chart?vs_currency=${baseCurrency}&days=${days}`
       
        fetch(url1)
        .then(res=>{
            // methods for handling error
            if(!res.ok){
                throw new Error('Network response is not ok');
            }
            // if response is ok then parsing response into json
            return res.json();
        })
        .then(data =>{
            dispatch(chartDataAction(data.prices))
        })

        
    }

    const getData2 = ()=>{
        const url2 = `https://api.coingecko.com/api/v3/coins/${selectedCoins2}/market_chart?vs_currency=${baseCurrency}&days=${days}`

        fetch(url2)
        .then(res=>{
            // methods for handling error
            if(!res.ok){
                throw new Error('Network response is not ok');
            }
            // if response is ok then parsing response into json
            return res.json();
        })
        .then(data =>{
            dispatch(chartDataAction2(data.prices))
        });
    }

    getData();
    getData2();

    

  return (
    <div>
        <SelectComponent/>
    </div>
  )
}

export default ChartDataAPI