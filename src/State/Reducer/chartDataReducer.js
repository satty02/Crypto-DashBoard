import { CHART_DATA } from "../Action/actionTypes";

const INIT_STATE = [];


export const chartDataReducer = (state = INIT_STATE, action)=>{
    switch(action.type){
        case CHART_DATA:
            return action.payload;

        default:
            return state;
    }
}