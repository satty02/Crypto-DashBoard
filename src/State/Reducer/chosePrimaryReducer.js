import { CHOOSE_PRIMARY } from "../Action/actionTypes";

const INIT_STATE = 'btc'

export const chosenPrimaryReducer = (state=INIT_STATE,action) =>{
    switch(action.type){
        case CHOOSE_PRIMARY:
            return action.payload
        default:
            return state;
    }
}