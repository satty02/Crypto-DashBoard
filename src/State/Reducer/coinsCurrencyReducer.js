import { CURRENCY_TYPE } from "../Action/actionTypes";

const INIT_STATE = 'inr';

export const coinsCurrencyReducer = ( state = INIT_STATE , action)=>{
    switch(action.type){
        case CURRENCY_TYPE:
            return action.payload

        default : 
            return state;
    }
}

