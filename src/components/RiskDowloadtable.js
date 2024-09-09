import {React,useMemo} from "react";
import './InspectionInventory.css';
import TableContainer from "./TableContainer.js";
import RiskDownloadTableRow from "./RiskDownloadTableRow.js";
export default function RiskDowloadtable({data}){
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
                className:"DocumentTileRiskItmCol",
                accessor: "document.title"
            },
            {
                Header:"Expiry Date",
                className:"ExpiryDateRiskItmCol",
                accessor: "expiry_date"
            }
        ],[]);
    return(
        <>
            <div className="InspectionTableContainer">
                <TableContainer columns={columns} data={data} >
                    <RiskDownloadTableRow/>
                </TableContainer>
            </div>
        </>
    );
}
