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
        <div className='currency-converter border max-w-md m-3'>
            <h1>Exchange Coins</h1>
            <table className='table-auto'>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className='text-xs text-start h-10'>Enter Value:</td>
                    </tr>
                    <tr>
                        <td className='text-orange-400 mx-3'>Sell</td>
                        <select name='option-1' className='coin-options'
                            value={chosenPrimary}
                            // set the primary value of select input
                            onChange={handlePrimary}>
                            {
                            listExchangeCoins.map((crypto, _index) => (
                                <option key={_index}>
                                    {crypto}</option>
                            ))
                        } </select>


                        <input type='number'

                            onChange={handleAmount}
                            className='primary-amount max-w-sm border rounded mx-3'
                            placeholder='Avl:'></input>
                    </tr>
                    <tr>
                        <td className='text-green-600'>Buy</td>
                        <select name='option-2' className='coin-options'
                            value={chosenSecondary}
                            onChange={handleSecondary}>
                            {
                            listExchangeCoins.map((crypto, _index) => (
                                <option key={_index}>
                                    {crypto}</option>
                            ))
                        } </select>
                        <input type='number'
                            value={result}
                            disabled={true}
                            className='primary-amount mx-3 max-w-sm'></input>
                    </tr>
                </tbody>
            </table>
            <button id='convert-button'
                onClick={convert}

                className='mx-20 bg-blue-500 text-white font-medium p-2 rounded hover:bg-blue-600'>Exchange</button>
            <div className='exchange'>Exchange Rate {result}</div>
        </div>
    )
}

export default CurrencyConverter
