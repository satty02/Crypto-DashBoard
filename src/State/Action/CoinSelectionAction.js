import { COIN_SELECTION } from "./actionTypes"; 

export const coinSelectionAction = (select) =>{
    return{
        type : COIN_SELECTION,
        payload : select
    }
}