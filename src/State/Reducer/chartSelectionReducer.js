import { CHART_SELECTION } from "../Action/actionTypes";

const INIT_STATE = 'Line Chart';

export const chartSelectionReducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case CHART_SELECTION:
            return action.payload;

        default:
            return state;
    }
}