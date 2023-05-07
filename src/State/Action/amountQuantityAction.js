import { AMOUNT_QUANTITY } from "./actionTypes";

export const amountQuantityAction = (qty) =>{
    return {
        type:AMOUNT_QUANTITY,
        payload:qty
    }
}