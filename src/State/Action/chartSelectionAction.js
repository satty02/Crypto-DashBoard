import { CHART_SELECTION } from "./actionTypes"

function chartSelectionAction(chart) {
  return {
        type : CHART_SELECTION,
        payload : chart
  }
}

export  {chartSelectionAction};