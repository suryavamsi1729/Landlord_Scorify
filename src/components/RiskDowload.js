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
            // {
            //     "document":{
            //         "id":2,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":3,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":4,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":5,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":6,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":7,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":8,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":9,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":10,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":11,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":12,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":13,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":14,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":15,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":16,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":17,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":18,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":19,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":20,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":21,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":22,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":23,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":24,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":25,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":26,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":27,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":28,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":29,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":30,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":31,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":32,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":33,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":34,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":35,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":36,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":37,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":38,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":39,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":40,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":41,
            //         "type": "Check In Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":42,
            //         "type": "Inventory Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":43,
            //         "type": "Routine Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":44,
            //         "type": "Mid - Term Inspection",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":45,
            //         "type": "Check Out Report",
            //         "title": "Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus."
            //     },
            //     "cretor":{
            //         "name":"khadijah ali"
            //     },
            //     "date": "12/05/2024",
            //     "expiary_date":"12/05/2024",
            // },
            // {
            //     "document":{
            //         "id":46,
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