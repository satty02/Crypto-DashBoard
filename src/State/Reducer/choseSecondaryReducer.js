import { CHOOSE_SECONDARY } from "../Action/actionTypes";

const INIT_STATE = 'btc'

export const chosenSecondaryReducer = (state=INIT_STATE,action) =>{
    switch(action.type){
        case CHOOSE_SECONDARY:
            return action.payload
        default:
            return state;
    }
}