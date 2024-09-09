import {React,useMemo} from "react";
import './MaintenanceandRepair.css';
import PropertyTableContainer from "../Properties/PropertyTableContainer";
import RMTableRows from "./RMTableRows";
export default function RegularMaintenanceTable({data}){
    const columns = useMemo(
        ()=>[
            {
                Header:"Properties Adderess",
                className:"PropertiesAdderesscol",
                accessor: "document.id"
            },
            {
                Header:"Floor Plan",
                className:"FloorPlanCol",
                accessor: "date"
            },
            {
                Header:"Notes",
                className:"NotesCol",
                accessor: "expiry_date"
            },
            {
                Header:"Prop. Score",
                className:"PropScoreCol",
                accessor: "document.type"
            },
            {
                Header:"Occupancy",
                className:"OccupancyCol",
                accessor: "document.title"
            },
        ],[]);
    return(
        <>
            <div className="RegularMaintenanceTableContainer">
                <PropertyTableContainer columns={columns} data={data} tablename={'RMTable'}>
                    <RMTableRows/>
                </PropertyTableContainer>
            </div>
        </>
    );
}