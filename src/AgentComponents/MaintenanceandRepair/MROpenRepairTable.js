import {React,useMemo} from "react";
import './MaintenanceandRepair.css';
import PropertyTableContainer from "../Properties/PropertyTableContainer";
import MRORTableRows from "./MRORTableRows";
export default function MROpenRepairTable({data}){
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
                Header:"Description",
                className:"DescriptionCol",
                accessor: "expiry_date"
            },
            {
                Header:"Repair Status",
                className:"RepairStatusCol",
                accessor: "document.type"
            },
        ],[]);
    return(
        <>
            <div className="MROpenRepairTableContainer">
                <PropertyTableContainer columns={columns} data={data} tablename={'ORTable'} >
                    <MRORTableRows/>
                </PropertyTableContainer>
            </div>
        </>
    );
}