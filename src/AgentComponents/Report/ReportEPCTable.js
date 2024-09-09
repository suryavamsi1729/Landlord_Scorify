import {React,useMemo} from "react";
import './Report.css';
import PropertyTableContainer from "../Properties/PropertyTableContainer";
import REPCRows from "./REPCRows";
export default function ReportEPCTable({data,children}){
    const columns = useMemo(
        ()=>[
            {
                Header:"Properties Address",
                className:"RPropertiesAddressCol",
                accessor: "document.id"
            },
            {
                Header:"Document",
                className:"RDocumentCol",
                accessor: "date"
            },
            {
                Header:"Current Rating",
                className:"RCurrentRatingCol",
                accessor: "document.type"
            },
            {
                Header:"Date",
                className:"RDateCol",
                accessor: "document.title"
            },
            {
                Header:"Action",
                className:"RActionCol",
                accessor: "document.title"
            },
        ],[]);
    return(
        <>
            <div className="ReportEPCTableContainerAgent">
                <PropertyTableContainer columns={columns} data={data} tablename={'EPCtable'} >
                    <REPCRows/>
                </PropertyTableContainer>
            </div>
        </>
    );
}
