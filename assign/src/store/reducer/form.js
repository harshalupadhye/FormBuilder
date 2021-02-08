import * as actionTypes from '../action/actionTypes';

const initialState={
    schema:''
}

const reducer=(state=initialState,action)=>{
    if(action.type==actionTypes.TAKEFORM){
        return{
            ...state,
            schema:action.data
        }

    }

}
export default reducer;