import { RESULT_AMOUNT } from "./actionTypes";

export const resultAmountAction = (result)=>{
        return {
            type:RESULT_AMOUNT,
            payload:result
        }
}