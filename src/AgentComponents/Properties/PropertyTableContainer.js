import React, { Children } from "react";
import PropertyTableRow from "./PropertyTableRow";
import RMTableRows from "../MaintenanceandRepair/RMTableRows";
import MRORTableRows from "../MaintenanceandRepair/MRORTableRows";
import TentSelfInspectionTableRowsAgent from "../Report/TentSelfInspectionTableRowsAgent";
import REPCRows from "../Report/REPCRows";
import '../Common/InspectionInventory.css';
import InspectionTableRowsAgent from "../Inspection/InspectionTableRowsAgent";
export default function PropertyTableContainer({columns,data,tablename,children}){
    const tableRowrender = (itm)=>{
        switch (tablename) {
            case 'RMTable':
                return <RMTableRows data={itm}/>
            case 'propertytable':
                return <PropertyTableRow data={itm}/>
            case 'ORTable':
                return <MRORTableRows data={itm}/>
            case 'EPCtable':
                return <REPCRows data={itm}/>
            case 'ATSItable':
                return <TentSelfInspectionTableRowsAgent data={itm}/>
            case 'InspectionTAtable':
                return <InspectionTableRowsAgent data={itm}/>
            default: 
                break;
        }
    }
    return(
        <>
            <table className="PropertyTable">
                <thead>
                    <tr className="d-flex flex-row w-100">
                        {
                            columns.map((itm)=>{
                                return <th className={`HeaderItm ${itm.className} d-flex flex-row justify-content-between align-items-center`}>
                                    <p className="m-0">{itm.Header}</p>
                                    <span className="Icon">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1041 11.5625L9.99992 16.6667L4.89575 11.5625" fill="#D4D4D8"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89567 8.4375L9.99984 3.33333L15.104 8.4375" fill="#D4D4D8"/>
                                        </svg>
                                    </span>
                                </th>
                            })
                        }
                        
                    </tr>
                </thead>
                <tbody className="d-flex flex-column">
                    {
                        data.map((itm)=>{
                            //    return tableRowrender(itm);
                            return React.cloneElement(children,{data:itm});
                        })
                    }
                </tbody>
            </table>
        </>
    );
}