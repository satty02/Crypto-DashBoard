import { COIN_SELECTION2 } from "../Action/actionTypes";

const INIT_STATE = ['bitcoin']

export const coinSelectionReducer2 = (state = INIT_STATE, action)=>{
    switch(action.type){
        case COIN_SELECTION2:
            return action.payload;

        default:
            return state;
    }
}