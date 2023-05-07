import { COINS_LIST } from "./actionTypes";

const coinsListActions = (coins)=>{
    return{
        type: COINS_LIST,
        payload: coins
    }
}

export {coinsListActions};