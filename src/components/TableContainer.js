import React from "react";
import TableRow from "./TableRow";
import './InspectionInventory.css'
export default function TableContainer({columns,data,children}){
    return(
        <>
            <table className="InspectionTable">
                <thead>
                    <tr className="d-flex flex-row">
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
                        <th className="HeaderItm d-flex flex-row justify-content-between align-items-center">
                            <p className="m-0">Action</p>
                            <span className="Icon">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1041 11.5625L9.99992 16.6667L4.89575 11.5625" fill="#D4D4D8"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.89567 8.4375L9.99984 3.33333L15.104 8.4375" fill="#D4D4D8"/>
                                </svg>
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody className="d-flex flex-column">
                    {
                        data.map((itm)=>{
                        //    return <TableRow data={itm}/>/
                        return React.cloneElement(children,{data:itm})
                        })
                    }
                </tbody>
            </table>
        </>
    );
}