import {React, useState,useContext} from "react";
import './InspectionInventory.css';
import Tabs from "./Tabs";
import { MainContext } from "../Context/MainContext";
import { data,sizeOfData } from "./Data.js";
import RiskDowloadtable from "./RiskDowloadtable.js";
import DocumentViewerComp from "./DocumentViewerComp.js";
export default function RiskDowload(props){
    const [pageStart , setPageStart] = useState(0);
    const {docView,dispatch} = useContext(MainContext);
    const [tableData,setTableData]= useState(
        [
            // {
            //     "document":{
            //         "id":1,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
        ]
    )
    const [tableSize,setTableSize] = useState(tableData.length);
    const data = (start,range)=>{
        if(range<=0){
            return tableData.slice(0,10);
        }
        else if(range>tableSize){
            return tableData.slice(start,tableSize);
        }
        else{
            return tableData.slice(start, range);
        }
        
    }
    return(
        <>
        <div className="container-fluid p-0">
            <div className="row m-0">
                <div className="col-12 p-0">
                    <div className="InspectioInventorySectionContainer ">
                        {docView ?
                        <>
                        <DocumentViewerComp/>
                        
                        </>
                        :
                        <div className="w-100 h-100 p-0 m-0 d-flex flex-column gap-3">
                            <Tabs/>
                            {/* <RiskDowloadtable data={data(pageStart,pageStart+10)}/> */}
                            <RiskDowloadtable data={data(pageStart,pageStart+10)}/>
                            <div className="ButtonGroupContainer d-flex flex-row justify-content-end  align-items-center gap-2">
                                <button onClick={()=>{
                                    if(pageStart-10<=0){
                                        setPageStart(0);
                                    }
                                    else{
                                        setPageStart(pageStart-10);
                                    }
                                    
                                }} className="BtnPrevious d-flex flex-row justify-content-center align-items-center">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <p className="btnText m-0">Previous</p>
                                </button>
                                <button onClick={()=>{
                                    if(pageStart+10>=sizeOfData()){
                                        setPageStart(pageStart);
                                    }
                                    else{
                                        setPageStart(pageStart+10);
                                    }
                                    
                                }} className="BtnNext d-flex flex-row justify-content-center align-items-center">
                                    <p className="btnText m-0">Next</p>
                                    <svg className="nxtIconSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div> 
                        }
                        
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}