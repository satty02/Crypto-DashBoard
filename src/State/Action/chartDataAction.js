import { CHART_DATA } from "./actionTypes";

export const chartDataAction = (data) => {
    return {
        type: CHART_DATA,
        payload: data
    }
}