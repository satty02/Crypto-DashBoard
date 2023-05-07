import { CHOOSE_SECONDARY } from "./actionTypes";

export const chosenSecondaryAction = (secondary)=>{
        return {
            type:CHOOSE_SECONDARY,
            payload:secondary
        }
}