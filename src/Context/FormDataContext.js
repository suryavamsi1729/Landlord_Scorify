import { createContext,useReducer } from "react";
function FormReducer(state,action){
    switch (action.type) {
        case "formdata":state.formdata=action.payload.formdata;
            return {...state};
        default:
            return {...state};
    }
    
}
const data ={
    formdata:{},
}
export const FormDataContext = createContext();
export function  FormDataProvider(props){
    const [state,dispatch] = useReducer(FormReducer,data);
    return(
        <FormDataContext.Provider value={
            {
                formdata:state.formdata,
                dispatch
            }
        }>
            {props.children}
        </FormDataContext.Provider>
    )
}