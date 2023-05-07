import { CURRENCY_TYPE } from "./actionTypes";

const coinsCurrencyAction = (type)=>{
    return{
        type: CURRENCY_TYPE,
        payload: type,
    }
}

export {coinsCurrencyAction};