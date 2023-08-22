import { CURRENCY_TYPE } from "../Action/actionTypes";

const INIT_STATE = 'inr';

export const BaseCurrencyReducer = ( state = INIT_STATE , action)=>{

    switch(action.type){
        case CURRENCY_TYPE:
            return "usd"

        default : 
            return state;
    }
}

