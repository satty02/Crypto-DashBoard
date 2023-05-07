import { EXCHANGE_COINS } from "./actionTypes";


export const coinExchangeAction = (exchange)=>{
        return {
            type:EXCHANGE_COINS,
            payload:exchange
        }
}