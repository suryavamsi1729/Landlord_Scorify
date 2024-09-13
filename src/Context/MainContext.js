import { createContext,useReducer, } from "react";
function MainReducer(state,action){
    switch (action.type) {
        case "path": state.path = action.payload.path;
                     state.SideBar = action.payload.sidebar;
                     return {...state};
        case "docView": state.docView = action.payload.docView;
                     return {...state};
        case "sidebar": state.SideBar = action.payload.sidebar;
                    return {...state};
        case 'date': state.currentDate = action.payload.currentValDate;
                    return{...state};
        case 'popup':state.popupData= action.payload.popupData;
                    state.popupStae= action.payload.popupStae;
                    return{...state};
        case 'emailset':state.profilemail = action.payload.email;
                    return{...state};
        case 'propertyid':state. propertyId=action.payload.Pid;
                    return{...state};
        
        default:
            return {...state}
    }
    
}
const data ={
    SideBar:true,
    CurrentScore:233,
    LastScore:856,
    docView: false,
    path:"/",
    popupData:'',
    popupStae:false,
    currentDate: new Date(),
    profilemail:"",
    propertyId:""
}
export const MainContext = createContext();
export function  MianProvider(props){
    const [state,dispatch] = useReducer(MainReducer,data);
    return(
        <MainContext.Provider value={
            {
                sidebar : state.SideBar,
                path: state.path,
                docView : state.docView,
                DateCal: state.currentDate,
                popupData:state.popupData,
                popupStae: state.popupStae,
                email: state.profilemail,
                Pid:state.propertyId,
                dispatch,
            }
        }>
            {props.children}
        </MainContext.Provider>
    )
}