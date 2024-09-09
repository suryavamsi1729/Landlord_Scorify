import {React,useContext} from "react";
import '../Common/InspectionInventory.css';
import { MainContext } from "../../Context/MainContext";
export default function MRORTableRows({data}){
    const {dispatch} = useContext(MainContext);
    const color = (col)=>{
        switch(col){
            case "Building Report":
                return {
                    backgroundColor:"#F0FDF4",
                    borderColor: "#16A34A",
                    color:  "#16A34A"
                }
            case "Arranging Engineer":
                return {
                    backgroundColor:"#FFFBEB",
                    borderColor: "#F59E0B",
                    color:  "#F59E0B"
                }
            case "Completion Report":
                return {
                    backgroundColor:"#FAFAFA",
                    borderColor: "#52525B",
                    color: "#52525B"
                }
            case "Arranging Access":
                return {
                    backgroundColor:"#EDF4FF",
                    borderColor: "#5A74FA",
                    color: "#5A74FA"
                }
            default :
                return {
                    backgroundColor:"#FEF2F2",
                    borderColor: "#EF4444",
                    color: "#EF4444"
                }
        }
    }

    return(
        
        <>
        <tr className="w-100 d-flex flex-row">
            <td className="RowItm d-flex flex-column justify-content-center align-items-start">
            {<span onClick={
                    ()=>{
                        dispatch({
                            type:"popup",
                            payload:{ 
                                popupStae: true,
                                popupId:data.id
                            }
                        });
                    }
                } style={{cursor:'pointer'}}>{` ${data.PropertiesAdderess}`}</span>}
            </td>
            <td className="RowItm">
                {` ${data.FloorPlan}`}
            </td>
            <td className="RowItm">
                {` ${data.Description}`}
            </td>
            <td className="RowItm">
                <span className="ChipTenancy" style={color(data.RepairStatus)}>{` ${data.RepairStatus}`}</span>
            </td>
        </tr>
        </>
    )
}