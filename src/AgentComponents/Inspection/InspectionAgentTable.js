import {React,useMemo} from "react";
import './Inspection.css';
import PropertyTableContainer from "../Properties/PropertyTableContainer";
import InspectionTableRowsAgent from "./InspectionTableRowsAgent";
export default function InspectionAgentTable({data,children}){
     const columns = useMemo(
    ()=>[
        {
            Header:"Properties Adderess",
            className:"INAPropertiesAdderesscol",
            accessor: "document.id"
        },
        {
            Header:"Floor Plan",
            className:"INAFloorPlanCol",
            accessor: "date"
        },
        {
            Header:"Inspection Score",
            className:"INAInspectionScoreCol",
            accessor: "expiry_date"
        },
        {
            Header:"Comments",
            className:"INACommentsCol",
            accessor: "document.type"
        },
        {
            Header:"Next Inspection Date",
            className:"INANextInspectionDateCol",
            accessor: "expiry_date"
        },
        {
            Header:"Occupancy",
            className:"INAOccupancyCol",
            accessor: "document.type"
        },
    ],[]);
    return(
        <>
            <div className="InspectionTableContainerAgent">
                <PropertyTableContainer columns={columns} data={data} tablename={'InspectionTAtable'} >
                    <InspectionTableRowsAgent/>
                </PropertyTableContainer>
            </div>
        </>
    );
}