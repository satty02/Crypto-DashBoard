import { CHOOSE_PRIMARY } from "./actionTypes";

export const chosenPrimaryAction = (primary)=>{
        return {
            type:CHOOSE_PRIMARY,
            payload:primary
        }
}