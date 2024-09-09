import {React,useMemo} from "react";
import './InspectionInventory.css';
import TableContainer from "./TableContainer.js";
import TableRow from "./TableRow.js";
export default function InspectionTable({data}){
    
    const columns = useMemo(
        ()=>[
            {
                Header:"Document",
                className:"DocumentItmCol",
                accessor: "document.id"
            },
            {
                Header:"Date",
                className:"DateItmCol",
                accessor: "date"
            },
            {
                Header:"Document Type",
                className:"DocumentTypeItmCol",
                accessor: "document.type"
            },
            {
                Header:"Document Title",
                className:"DocumentTileItmCol",
                accessor: "document.title"
            },
            {
                Header:"Create By",
                className:"CreatebyItmCol",
                accessor: "cretor.name"
            },
            {
                Header:"Expiry Date",
                className:"ExpiryDateItmCol",
                accessor: "expiry_date"
            }
        ],[]);
    return(
        <>
            <div className="InspectionTableContainer">
                <TableContainer columns={columns} data={data} >
                    <TableRow/>
                </TableContainer>
            </div>
        </>
    );
}
