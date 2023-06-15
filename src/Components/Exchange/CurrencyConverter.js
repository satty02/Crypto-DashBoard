import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resultAmountAction} from '../../State/Action/resultAmountAction';
import {chosenPrimaryAction} from '../../State/Action/chosePrimaryAction';
import {chosenSecondaryAction} from '../../State/Action/choseSecondaryAction';
import {amountQuantityAction} from '../../State/Action';

function CurrencyConverter() {
    // create Array to use in select option

    // selected primary coin which is used to exchange
    const chosenPrimary = useSelector(state => state.primaryCoin);

    // selected primary coin in which user want to exchange
    const chosenSecondary = useSelector(state => state.secondaryCoin);

    const amount = useSelector(state => state.amountQuantity)

    const result = useSelector(state => state.resultAmount)

    // this returns array of coins list
    const coinsList = useSelector(state => state.coinsData)
    console.log(coinsList)

    // this return the object having key as symbol
    const exchangeCoins = useSelector(state => state.coinExchange);
    console.log(exchangeCoins)


    const dispatch = useDispatch()


    const listExchangeCoins = []
    console.log(listExchangeCoins)

    for (let coin in exchangeCoins) {
        listExchangeCoins.push(coin)
    }


    const handlePrimary = (e) => {
        dispatch(chosenPrimaryAction(e.target.value))
    }

    const handleSecondary = (e) => {
        dispatch(chosenSecondaryAction(e.target.value))
    }

    const handleAmount = (e) => {
        dispatch(amountQuantityAction(e.target.value))
    }

    const convert = () => {
        const btc_select = coinsList.filter(coin => coin.symbol === 'btc')
        const btc_price = btc_select[0].current_price

        const coin_1_value = btc_price / exchangeCoins[chosenPrimary].value
        const coin_2_value = btc_price / exchangeCoins[chosenSecondary].value


        const conv = coin_1_value / coin_2_value
        dispatch(resultAmountAction(conv * amount))
    }


    return (
        <div className='currency-converter font-semibold rounded-lg'>
              <div className='m-6' > Exchange Coins</div>
              <table className='table-auto mx-3'>

                <tbody>
                    <div>
                    
                        <div className='text-xs text-center h-10'>Enter Value:</div>
                    </div>
                    <div className='flex' >
                        <div className= 'flex-none text-orange-400 p-4  w-20'>Sell</div>
                        <div className='flex-initial'>
                        <select name='option-1' className='coin-options m-3 h-8 w-20 rounded-lg bg-slate-200'
                            value={chosenPrimary}
                            // set the primary value of select input
                            onChange={handlePrimary}>
                            {
                            listExchangeCoins.map((crypto, _index) => (
                                <option key={_index}>
                                    {crypto}</option>
                            ))
                        } </select>
                        </div>


                        <div  className='flex-initial p-3'>
                        <input type='number'  onChange={handleAmount} className='primary-amount rounded-lg border h-8 px-4'placeholder='Avl:'></input>
                        </div>
                    </div>


                    <div className='flex' >
                        <div className='flex-initial text-green-600 p-4  w-20'>Buy</div>
                       <div>
                       <select name='option-2' className='coin-options m-3 h-8 w-20 rounded-lg bg-slate-200'
                            value={chosenSecondary}
                            onChange={handleSecondary}>
                            {
                            listExchangeCoins.map((crypto, _index) => (
                                <option key={_index}>
                                    {crypto}</option>
                            ))
                        } </select>
                       </div>
                        <div className='flex-initial' >
                        <input type='number'
                            value={result}
                            disabled={true}
                            className='primary-amount m-3 max-w-sm rounded-lg border h-8 px-4 '></input>
                        </div>
                    </div>
                </tbody>
              </table>
               <div className='text-center' >
                  <button id='convert-button'
                    onClick={convert}

                    className='px-2 h-8  bg-blue-500 rounded-lg  hover:bg-blue-600'>Exchange</button>
                </div>
        </div>
    )
}

export default CurrencyConverter
