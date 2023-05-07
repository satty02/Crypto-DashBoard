import { DATES } from "../Action/actionTypes";

const INIT_STATE = '1'

export const CoinsdateReducer = (state = INIT_STATE,action)=>{

        switch(action.type){
            case DATES:
                return action.payload;
            
            default:
                return state;
        }

}