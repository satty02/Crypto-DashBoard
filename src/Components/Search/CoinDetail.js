import React from 'react'

function CoinDetail({image,name,id,symbol,current_price,market_cap}) {
  return (
    <div>
        <p>Name : {name}</p>
        <img src={image} alt='img' className='object-contain h-5 w-5'></img>
        <p>{symbol}</p>
        <p>market_cap: {market_cap}</p>
        <p>current_price : {current_price}</p>
    </div>
  )
}

export default CoinDetail