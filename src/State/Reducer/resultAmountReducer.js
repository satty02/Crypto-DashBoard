import { RESULT_AMOUNT } from "../Action/actionTypes";

const INIT_STATE = 'btc'

export const resultAmountReducer = (state=INIT_STATE,action) =>{
    switch(action.type){
        case RESULT_AMOUNT:
            return action.payload
        default:
            return state;
    }
}