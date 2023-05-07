import { EXCHANGE_COINS } from "../Action/actionTypes";

const INIT_STATE = {}

export const coinExchangeReducer=(state = INIT_STATE, action)=>{
    switch(action.type){
        case EXCHANGE_COINS:
            return action.payload;

        default:
            return state;
    }
}