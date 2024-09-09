import {React,useContext} from "react";
import '../Common/InspectionInventory.css';
import RadialGauge from "../GuageEle";
export default function InspectionTableRowsAgent({data}){
    return(
        <>
        <tr className="w-100 d-flex flex-row">
            <td className="RowItm d-flex flex-column justify-content-center align-items-start">
                {` ${data.PropertiesAdderess}`}
            </td>
            <td className="RowItm">
                {` ${data.FloorPlan}`}
            </td>
            <td className="RowItm">
                <RadialGauge value={data.InspectionScore} lable={'Good'}/>
            </td>
            <td className="RowItm">
                {` ${data.Comments}`}
            </td>
            <td className="RowItm">
                {` ${data.NextInspectionDate}`}
            </td>
            <td className="RowItm">
                {` ${data.Occupancy}`}
            </td>
        </tr>
        </>
    )
}