import * as actionTypes from './actionTypes';


export const formCreate=()=>{
    return{
        type:actionTypes.CREATEFORM
    }

}
export const formTake=(data)=>{
    return{
        type:actionTypes.TAKEFORM,
        data:data
    }
}