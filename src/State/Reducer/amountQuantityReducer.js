import { AMOUNT_QUANTITY } from "../Action/actionTypes";

const INIT_STATE = 1;

export const amountQuantityReducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case AMOUNT_QUANTITY:
            return action.payload

        default:
            return state;
    }
}