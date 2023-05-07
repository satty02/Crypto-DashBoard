import { COINS_LIST } from "../Action/actionTypes";

const INIT_STATE = [];

export const coinsListReducer = ( state = INIT_STATE , action)=>{
    switch(action.type){
        case COINS_LIST:
            return action.payload

        default : 
            return state;
    }
}

