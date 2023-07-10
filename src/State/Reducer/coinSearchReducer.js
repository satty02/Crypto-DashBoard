import { COIN_SEARCH } from "../Action/actionTypes";

const INIT_STATE = ''

export const coinSearchReducer = (state = INIT_STATE,action)=>{
    switch(action.type){
        case COIN_SEARCH:
            return action.payload;

        default:
            return state;
    }
}