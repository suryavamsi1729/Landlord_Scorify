import {React,useMemo} from "react";
import '../Common/InspectionInventory.css';
import './Report.css';
import PropertyTableContainer from "../Properties/PropertyTableContainer";
import RagsSaftyRow from "./RgasSaftyRow";
export default function RGSTable({data,children}){
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
                Header:"ExpiryDate",
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
                    <RagsSaftyRow/>
                </PropertyTableContainer>
            </div>
        </>
    );
}
