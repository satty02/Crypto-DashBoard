// this renders the details of searched coins through routing.

import React from 'react'
import { useSelector } from 'react-redux'

function CoinDetail({image,name,id,symbol,current_price,market_cap}) {

  const BaseCurrency = useSelector(state=>state.BaseCurrency);

  const coins = useSelector(state=>state.coinsData);
  const search = useSelector(state=>state.coinSearch);

  
  const Result = coins.filter(coin=>coin.name.toLowerCase()===search.toLowerCase())


  return (
    

    <div className='bg-cover bg-center h-fit' style={{backgroundImage: `url(${Result.map(coin=>coin.image)})` , backdropFilter:`brightness(50%)`}}>
      <div className='mt-8'>
        <h1 className='text-center text-5xl font-bold text-blue-900 '>{Result.map(coin=>coin.name)}</h1>
        <p className='text-center text-lg mt-6   py-2 ' >{Result.map(coin=>coin.name)} live price in {BaseCurrency.toUpperCase()}.View value statistics, market cap and supply</p>
      </div>
        
      
      <div className='flex  w-fit mx-auto justify-center mt-12 h-screen '>
        <div className=' m-4'>
          <h2 className='text-center text-xl font-bold text-blue-800'>{Result.map(coin=>coin.name)} Value Statistics</h2>
          <p className='flex items-center font-medium bg-gray-200 py-4 px-6 rounded-lg my-2'>An overview showing the stat of <img src={Result.map(coin=>coin.image)} alt='img' className='object-contain h-5 w-5 mx-2'></img>{Result.map(coin=>coin.name)}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>Price in {BaseCurrency.toLowerCase()==='inr'?'₹':BaseCurrency.toLowerCase()==='usd'?'$':BaseCurrency.toLowerCase()==='eur'?'€':BaseCurrency.toLowerCase()==='jpy'?"¥":'currency not selected'} : {Result.map(coin=>coin.current_price)}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>Rank: {Result.map(coin=>coin.market_cap_rank)}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>Market Capital: {BaseCurrency.toLowerCase()==='inr'?'₹':BaseCurrency.toLowerCase()==='usd'?'$':BaseCurrency.toLowerCase()==='eur'?'€':BaseCurrency.toLowerCase()==='jpy'?"¥":'currency not selected'} {Result.map(coin=>coin.market_cap)}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>High (24h) : {Result.map(coin=>coin.high_24h)}</p>        
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>total Volume : {Result.map(coin=>coin.total_volume)}</p>
        </div>

        <div className=' m-4'>
          <h2 className='text-center text-xl font-bold text-blue-800'>Other Statistics</h2>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>An overview showing the stat of All Cryptocurrencies</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>Total Supply : {BaseCurrency.toLowerCase()==='inr'?'₹':BaseCurrency.toLowerCase()==='usd'?'$':BaseCurrency.toLowerCase()==='eur'?'€':BaseCurrency.toLowerCase()==='jpy'?"¥":'currency not selected'}  {Result.map(coin=>coin.total_supply.toFixed(2))}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>circulating supply:{BaseCurrency.toLowerCase()==='inr'?'₹':BaseCurrency.toLowerCase()==='usd'?'$':BaseCurrency.toLowerCase()==='eur'?'€':BaseCurrency.toLowerCase()==='jpy'?"¥":'currency not selected'} {Result.map(coin=>coin.circulating_supply.toFixed(2))}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>Number of Markets: {21553}</p>
          <p className='bg-gray-200 py-4 px-6 rounded-lg my-2 font-medium'>Number of Exchanges: {346}</p>
        </div>
      </div>

    </div>
  )
}

export default CoinDetail