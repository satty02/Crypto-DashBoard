import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BaseCurrencyAction } from '../../State/Action/BaseCurrencyAction';

function BaseCurrency() {
  // selecting base Currency state to use in value of select element
  const baseCurrency = useSelector(state=>state.BaseCurrency);

  // calling the useDispatch funtion into dispatch variable
  const dispatch = useDispatch();


  return (
    <div className='m-1 max-w-fit max-h-fit font-semibold border z-10 hover::shadow-outline' >
              <select id="currency" data-testId='select' name='currency'
                // dispatching the selected state into base currency action  
                 onChange={(e)=>dispatch(BaseCurrencyAction(e.target.value))} 
                 value={baseCurrency} 
                 className="currency-select
                            bg-white
                            text-gray-900 
                            text-sm rounded-lg 
                            focus:ring-blue-500 
                            focus:border-blue-500 
                            
                            w-full 
                            p-2.5
                            " 
                            >
          <option value="inr" data-testId='select-option' className='font-semibold'>INR</option>
          <option value="usd" data-testId='select-option' className='font-semibold'>USD</option>
          <option value="eur" data-testId='select-option' className='font-semibold'>EURO</option>
          <option value="jpy" data-testId='select-option' className='font-semibold'>YEN</option>
        </select>
    </div>
  )
}

export default BaseCurrency