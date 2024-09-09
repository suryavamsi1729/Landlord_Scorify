import {React,useMemo} from "react";
import '../Common/InspectionInventory.css';
import './Report.css';
import PropertyTableContainer from "../Properties/PropertyTableContainer";
import TentSelfInspectionTableRowsAgent from "./TentSelfInspectionTableRowsAgent";
export default function RCOTable({data,children}){
    const columns = useMemo(
        ()=>[
            {
                Header:"Properties Address",
                className:"ASIPropertiesAddressCol",
                accessor: "document.id"
            },
            {
                Header:"Document",
                className:"ASIDocumentCol",
                accessor: "date"
            },
            {
                Header:"Result",
                className:"ASIResultCol",
                accessor: "document.type"
            },
            {
                Header:"Create By",
                className:"ASICreateByCol",
                accessor: "document.title"
            },
            {
                Header:"Date",
                className:"ASIDateCol",
                accessor: "cretor.name"
            },
            {
                Header:"Action",
                className:"ASIActionCol",
                accessor: "expiry_date"
            }
        ],[]);
    return(
        <>
            <div className="AgentSelfInspectionTableContainer">
                <PropertyTableContainer columns={columns} data={data} tablename={'ATSItable'} >
                    <TentSelfInspectionTableRowsAgent/>
                </PropertyTableContainer>
            </div>
        </>
    );
}
