import {React,useContext,useState} from "react";
import '../Common/InspectionInventory.css';
import RadialGauge from "../GuageEle";
import MaintainanceTimeline from "../MaintainanceTimeline/MaintainanceTimeline";
import { MainContext } from "../../Context/MainContext";
export default function RMTableRows({data}){
    const {dispatch} = useContext(MainContext);
    return(
        <>
        <tr className="w-100 d-flex flex-row">
            <td className="RowItm d-flex flex-column justify-content-center align-items-start">
                {<span onClick={
                    ()=>{
                        dispatch({
                            type:"popup",
                            payload:{
                                popupId:data.id,
                                popupStae: true
                            }
                        });
                    }
                } style={{cursor:'pointer'}}>{` ${data.PropertiesAdderess}`}</span>}
            </td>
            <td className="RowItm">
                {` ${data.FloorPlan}`}
            </td>
            <td className="RowItm">
                {` ${data.Notes}`}
            </td>
            <td className="RowItm">
                <RadialGauge value={data.PropScore} lable={'Good'}/>
            </td>
            <td className="RowItm">
                {` ${data.Occupancy}`}
            </td>
        </tr>
        </>
    )
}