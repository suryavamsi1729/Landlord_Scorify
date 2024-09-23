import { React, useState, useEffect } from "react";
import './RegularMaintainens.css';
import './OpenRepairsSection.css';
import './InspectionInventory.css';
import ORTableRow from "./ORTableRow";
import api from "../api";
import DataSpinner from "./Spinner/DataSpinner";
export default function ORPTableContainer({ columns, name }) {
    const [pageStart, setPageStart] = useState(0);
    const [tableData, setTableData] = useState([]);
    const [tableSize, setTableSize] = useState(0);
    const [isdata,setIsData]=useState('')
    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-GB');
        return formattedDate;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('landlord/repairs/');
                if(response.status===200){

                
                const item = response.data;
                const transformData = item.repairs.map(val => ({
                    RepairDetails: val.title,
                    CompletionDate: formatDate(val.completion_date),
                    Status: val.status.charAt(0).toUpperCase() + val.status.slice(1),
                    CompletionReport: val.description,
                    RepairCost: `$ ${val.cost.toFixed(2)}`,
                    report: val.completion_report
                }));

                setTableData(transformData);
                setTableSize(transformData.length);
            }else if(response.status===404){
                setIsData("No Data Available");
            }
            else{
                setIsData("No Data Available");
            }
            } catch (err) {
                setIsData("No Data Available");
                console.log("Error while fetching data", err);
            }
        }
        fetchData();
    }, [tableData]);

   

    const data = (start, range) => {
        if (range <= 0) {
            return tableData.slice(0, 10);
        } else if (range > tableSize) {
            return tableData.slice(start, tableSize);
        } else {
            return tableData.slice(start, range);
        }
    }

    return (
        <>
            <div className="ORTableContainer">
                <table className="ORTable">
                    <thead>
                        <tr className="w-100 d-flex flex-row">
                            {columns.map((itm, i) => (
                                <th key={i} className={`${itm.className} tableCol`}>
                                    {itm.Header}
                                    {i < 3 && (
                                        <span className="Icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.1041 11.5625L9.99992 16.6667L4.89575 11.5625" fill="#D4D4D8" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.89567 8.4375L9.99984 3.33333L15.104 8.4375" fill="#D4D4D8" />
                                            </svg>
                                        </span>
                                    )}
                                </th>
                            ))}
                            <th className="ActionColumn tableCol">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.length === 0 ? (
                            <tr className="w-100 d-flex flex-row">
                                <td className="noDataCell" colSpan={columns.length + 1}>
                                    {isdata}
                                </td>
                            </tr>
                        ):(
                            data(pageStart, pageStart + 10).map((itm, i) => (
                                <ORTableRow key={i} data={itm} column={columns} name={name} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="ButtonGroupContainer ORTableBtn d-flex flex-row justify-content-end align-items-center gap-2">
                <button
                    onClick={() => {
                        if (pageStart - 10 <= 0) {
                            setPageStart(0);
                        } else {
                            setPageStart(pageStart - 10);
                        }
                    }}
                    className="BtnPrevious d-flex flex-row justify-content-center align-items-center"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="btnText m-0">Previous</p>
                </button>
                <button
                    onClick={() => {
                        if (pageStart + 10 >= tableSize) {
                            setPageStart(pageStart);
                        } else {
                            setPageStart(pageStart + 10);
                        }
                    }}
                    className="BtnNext d-flex flex-row justify-content-center align-items-center"
                >
                    <p className="btnText m-0">Next</p>
                    <svg className="nxtIconSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </>
    );
}
