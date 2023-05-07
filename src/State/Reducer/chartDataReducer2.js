import { CHART_DATA2 } from "../Action/actionTypes";

const INIT_STATE = [];


export const chartDataReducer2 = (state = INIT_STATE, action)=>{
    switch(action.type){
        case CHART_DATA2:
            return action.payload;

        default:
            return state;
    }
}