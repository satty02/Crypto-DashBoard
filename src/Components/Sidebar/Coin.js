import React from 'react'
import { useSelector } from 'react-redux'

function Coin({image,name,symbol,price,volume,change}) {

  const cur = useSelector(state=>state.CoinCurrency)

  let bottom =  <div class="h-0 w-0 border-x-8 border-x-transparent border-t-[16px] border-t-red-600"></div>
  let top = <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-green-600"></div>

  console.log(cur)

  return (
    // container for list of coins
    <div className='mx-auto  w-full max-w-fit bg-white'>
        <div className='align-middle'>
          {/* NAME , IMAGE,  & SYMBOL IN THIS CONTAINER */}
            <div className='sm:pl-4 pr-8 flex sm:items-center'>
              
              {/* below data will be fetched via API */}
                <img src={image} alt="crypto" className='object-contain h-5 w-5 align-middle m-1'></img>
                
                <div className='content-center px-3 m-1 align-middle'>
                  <h1 className='pr-5 text-sm px-3 '><b>{name}</b> </h1>
                  <p className='coin-volume px-3 text-center text-xs'>Cap:{volume.toLocaleString()}</p>
                </div>
                
            {/* PRICE & VOLUME IN THIS CONTAINER */}

                <p className='coin-price px-5 text-inherit text-sm'> {cur==='inr'?'₹':'$'}{price}</p>              
                <p className='coin-price px-5 text-inherit text-sm flex'>

                  <div className='p-3'>{change<0?bottom:top}</div>

                   <div className='px-1 p-3'>{change}%</div> 

                   </p>              

                {/* to avoid comma */}
                
            </div>
        </div>
    </div>
  )
}

export default Coin