import { SELECT_COINS } from "./actionTypes";

const selectCoins = (coin)=>{
    return {
        type:SELECT_COINS,
        payload:coin
    }
}

export {selectCoins}