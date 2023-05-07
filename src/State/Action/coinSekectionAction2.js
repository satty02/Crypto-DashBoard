import { COIN_SELECTION2 } from "./actionTypes"; 

export const coinSelectionAction2 = (select) =>{
    return{
        type : COIN_SELECTION2,
        payload : select
    }
}