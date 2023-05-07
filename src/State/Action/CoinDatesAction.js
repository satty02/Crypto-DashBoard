import { DATES } from "./actionTypes";

const CoinDatesAction = (date)=>{
    return{
        type:DATES,
        payload:date
    }
}

export {CoinDatesAction};