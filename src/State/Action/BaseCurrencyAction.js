import { CURRENCY_TYPE } from "./actionTypes";

const BaseCurrencyAction = (type)=>{
    return{
        type: CURRENCY_TYPE,
        payload: type,
    }
}

export {BaseCurrencyAction};