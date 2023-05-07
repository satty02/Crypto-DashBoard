import { SELECT_COINS } from "../Action/actionTypes";

const INIT_STATE = '';

export const coinsChartReducer = ( state = INIT_STATE , action)=>{
    switch(action.type){
        case SELECT_COINS:
            return action.payload

        default : 
            return state;
    }
}
