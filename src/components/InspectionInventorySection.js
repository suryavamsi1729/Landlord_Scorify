import { React, useState, useContext, useEffect } from "react";
import './InspectionInventory.css';
import Tabs from "./Tabs";
import { MainContext } from "../Context/MainContext";
import InspectionTable from "./InspectionTable";
import DocumentViewerComp from "./DocumentViewerComp.js";
import api from "../api.js";

export default function InspectionInventory(props) {
    const [pageStart, setPageStart] = useState(0);
    const { docView, dispatch } = useContext(MainContext);

    const [tableData, setTableData] = useState([]); 
    function convertDate(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }

 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get('landlord/dashboard/');
                const pid = res.data.properties[0].property[0].id;
                const response = await api.get(`landlord/inventory-inspection/${pid}/`);

                const fetchedData = response.data.data.map((item, index) => ({
                    document: {
                        id: index + 1,
                        type: item.document_type,
                        title: item.title,
                        file: item.document,
                    },
                    cretor: {
                        name: item.created_by.name,
                        profile_photo: item.created_by.profile_photo,
                    },
                    date: convertDate(item.date),
                    expiary_date: convertDate(item.expiry_date),
                }));
                setTableData(fetchedData); 
            } catch (err) {
                console.log("Error while fetching the data", err);
            }
        };
        fetchData();
    }, []);


    const tableSize = tableData.length;

    const data = (start, range) => {
        if (range <= 0) {
            return tableData.slice(0, 10);
        } else if (range > tableSize) {
            return tableData.slice(start, tableSize);
        } else {
            return tableData.slice(start, range);
        }
    };

    return (
        <>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="InspectioInventorySectionContainer">
                            {docView ? (
                                <DocumentViewerComp />
                            ) : (
                                <div className="w-100 h-100 p-0 m-0 d-flex flex-column gap-3">
                                    <Tabs />
                                    <InspectionTable data={data(pageStart, pageStart + 10)} />
                                    <div className="ButtonGroupContainer d-flex flex-row justify-content-end align-items-center gap-2">
                                        <button
                                            onClick={() => {
                                                setPageStart((prev) => Math.max(0, prev - 10));
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
                                                setPageStart((prev) => (prev + 10 >= tableSize ? prev : prev + 10));
                                            }}
                                            className="BtnNext d-flex flex-row justify-content-center align-items-center"
                                        >
                                            <p className="btnText m-0">Next</p>
                                            <svg className="nxtIconSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
