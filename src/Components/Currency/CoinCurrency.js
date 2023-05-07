import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { coinsCurrencyAction } from '../../State/Action/coinsCurrencyAction';

function CoinCurrency() {
  const cur = useSelector(state=>state.CoinCurrency);
  const dispatch = useDispatch();


  return (
    <div className='m-1 max-w-fit max-h-fit font-semibold border' >
        <label for="currency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
        <select id="currency" onChange={(e)=>dispatch(coinsCurrencyAction(e.target.value))} value={cur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="inr" className='font-semibold'>INR</option>
          <option value="usd" className='font-semibold'>USD</option>
        </select>
    </div>

  )
}

export default CoinCurrency