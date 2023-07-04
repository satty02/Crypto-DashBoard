import React from 'react'
import { useSelector } from 'react-redux'

function Coin({image,name,symbol,price,volume,change}) {

  let bottom =  <div class="h-0 w-0 border-x-8 border-x-transparent border-t-[8px]  border-t-red-600"></div>
  let top = <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[8px]  border-b-green-600"></div>

  const baseCurrency = useSelector(state=>state.BaseCurrency);

  return (
    // container for list of coins
    <div className='mx-0 flex w-full max-w-fit bg-white font-sans'>
        <div className='align-middle'>
          {/* NAME , IMAGE,  & SYMBOL IN THIS CONTAINER */}
            <div className='sm:pl-4 pr-4 flex sm:items-left'>
              
              {/* below data will be fetched via API */}
               
                
                <div className='content-center px-3 m-1 align-middle'>
                  <h1 className='pr-5 text-sm px-3 antialiased text-gray-800'><b>{name}</b> </h1>
                  <p className='coin-volume px-3  py-1 text-center text-xs  text-gray-500'>Mkt.Cap {baseCurrency==='inr'?'₹':baseCurrency==='usd'?'$':baseCurrency==='eur'?'€':baseCurrency==='jpy'?'¥':'No select currency'} {volume.toLocaleString()}</p>
                </div>
                
                     {/* PRICE & VOLUME IN THIS CONTAINER */}

                             
                <div className='coin-price mr-0 pl-[6rem] items-center  content-end text-inherit text-sm flex'>

                  <div className='pt-5 p-3'>{change<0?bottom:top}</div>

                   <div className='px-1 pt-2'>{change.toFixed(2)}%</div> 

                   </div>              

                {/* to avoid comma */}
                
            </div>
        </div>
    </div>
  )
}

export default Coin