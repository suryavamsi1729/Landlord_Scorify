import {React,useContext} from "react";
import '../Common/InspectionInventory.css';
import RadialGauge from "../GuageEle";
export default function PropertyTableRow({data}){

    const color = (col)=>{
        switch(col){
            case "Excellent":
                return {
                    backgroundColor:"#F0FDF4",
                    borderColor: "#16A34A",
                    color:  "#16A34A"
                }
            case "Fair":
                return {
                    backgroundColor:"#FFFBEB",
                    borderColor: "#F59E0B",
                    color:  "#F59E0B"
                }
            case "Good":
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
            <td className="RowItm">
                {` ${data.PropertiesAdderess}`}
            </td>
            <td className="RowItm">
                
                    <span className="ChipTenancy">{` ${data.Tenancy}`}</span>
                
            </td>
            <td className="RowItm d-flex flex-column justify-content-center align-items-start">
                {data.TimeinProperty?` ${data.TimeinProperty}`:`--/--/----`}
            </td>
            <td className="RowItm">
                <RadialGauge value={data.PropScore} lable={'Good'}/>
            </td>
            <td className="RowItm">
                <span className="ChipTenancy" style={color(data.complianceLevel)}>{`${data.complianceLevel}`}</span>
            </td>
            <td className="RowItm">
                    {`${data.OpenRepairs}`}
            </td>
            <td className="RowItm">
                    {` ${data.InspectionsDue}`}
            </td>
            
        </tr>
        </>
    );
}