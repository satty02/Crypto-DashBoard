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
    const coinsList = useSelector(state => state.coinsData);

    // this return the object having key as symbol
    const exchangeCoins = useSelector(state => state.coinExchange);
    const dispatch = useDispatch()

    const listExchangeCoins = Object.values(exchangeCoins).map(currency => currency.name)

    const handlePrimary = (e) => {
        dispatch(chosenPrimaryAction(e.target.value))
    }

    const handleSecondary = (e) => {
        dispatch(chosenSecondaryAction(e.target.value))
    }

    const handleAmount = (e) => {
        dispatch(amountQuantityAction(e.target.value))
    }

    const shortPrimary = Object.keys(exchangeCoins).filter(currency => exchangeCoins[currency].name === chosenPrimary);
    const shortSecondary = Object.keys(exchangeCoins).filter(currency => exchangeCoins[currency].name === chosenSecondary);

    const convert = () => {
        const btc_select = coinsList.filter(coin => coin.name === 'Bitcoin')
        const btc_price = btc_select[0].current_price

        const coin_1_value = btc_price / exchangeCoins[shortPrimary].value
        const coin_2_value = btc_price / exchangeCoins[shortSecondary].value


        const conv = coin_1_value / coin_2_value
        dispatch(resultAmountAction(conv * amount))
    }


    return (
        <div className='currency-converter font-semibold rounded-lg w-[32rem]'>
            <div className='mt-3 ml-3 mb-1 font-bold text-xl border-b-2'>Exchange Coins</div>
            <div className='flex text-xs mt-3 text-end mr-[4rem] justify-end h-3'>Enter Value:</div>
            <div className='flex'>
                <div className=' text-orange-400 py-4 px-7  w-20'>Sell</div>
                <div className='flex-initial'>
                    <select name='option-1'
                            className='coin-options my-3 h-9  rounded-lg bg-slate-200' 
                            data-testid='select1'
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


                <div className='flex-initial p-3'>
                    <input type='number'
                        onChange={handleAmount}
                        value={amount}
                        className='primary-amount rounded-lg border h-8 w-[8rem] px-4 mr-3'
                        placeholder='Avl:'></input>
                </div>
            </div>


            <div className='flex'>
                <div className=' text-green-600 py-4 px-7 w-20'>Buy</div>
                <div>
                    <select name='option-2' className='coin-options my-3 h-8   rounded-lg bg-slate-200'
                        value={chosenSecondary}
                        data-testid='select2'
                        onChange={handleSecondary}>
                        {
                        listExchangeCoins.map((crypto, _index) => (
                            <option key={_index}>
                                {crypto}</option>
                        ))
                    } </select>
                </div>
                <div className='flex-initial'>
                    <input 
                        value={result}
                        disabled={true}
                        placeholder='value'
                        className='primary-amount m-3 max-w-sm rounded-lg border h-8 w-[8rem] px-4 mr-3'></input>
                </div>
            </div>
            <div className='text-center flex justify-end mr-[8rem] mt-2'>
                <button id='convert-button'
                    onClick={convert}
                    className='px-2 h-12 w-[8rem] text-white  bg-blue-500 rounded-lg  hover:bg-blue-600'>Exchange</button>
            </div>
        </div>
    )
}

export default CurrencyConverter
