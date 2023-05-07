import { COIN_SEARCH } from "./actionTypes";

export const coinSearchAction = (search)=>{
    return{
        type: COIN_SEARCH,
        payload : search
    }
}