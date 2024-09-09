import {Children, React,useMemo} from "react";
import './Properties.css';
import PropertyTableContainer from "./PropertyTableContainer";
import PropertyTableRow from "./PropertyTableRow";
export default function PropertyTable({data,children}){
    const columns = useMemo(
        ()=>[
            {
                Header:"Properties Adderess",
                className:"PropertiesAdderesscol",
                accessor: "document.id"
            },
            {
                Header:"Tenancy",
                className:"TenancyCol",
                accessor: "date"
            },
            {
                Header:"Time in Property",
                className:"TimeinPropertyCol",
                accessor: "expiry_date"
            },
            {
                Header:"Prop. Score",
                className:"PropScoreCol",
                accessor: "document.type"
            },
            {
                Header:"compliance Level",
                className:"complianceLevelCol",
                accessor: "document.title"
            },
            {
                Header:"Open Repairs",
                className:"OpenRepairsCol",
                accessor: "cretor.name"
            },
            {
                Header:"Inspections Due",
                className:"InspectionsDueCol",
                accessor: "expiry_date"
            }
        ],[]);
    return(
        <>
            <div className="PropertyTableContainer">
                <PropertyTableContainer columns={columns} data={data} tablename={'propertytable'} >
                    {/* {children} */}
                    <PropertyTableRow/>
                </PropertyTableContainer>
            </div>
        </>
    );
}