import {useEffect,useState} from "react";
import React from 'react';
import './Properties.css';
import PropertyTable from "./PropertyTable";
import RegularMaintenanceTable from "../MaintenanceandRepair/RegularMaintenanceTable";
import OpenRepairTable from "../MaintenanceandRepair/MROpenRepairTable";
import InspectionAgentTable from "../Inspection/InspectionAgentTable";
import ReportEPCTable from "../Report/ReportEPCTable";
import { ASITData,ASITsizeOfData,ASITsearchingData } from "../Report/ASITData";
import { REPCdata,REPCsizeOfData,REPCsearchingData } from "../Report/REPCData";
import TentSelfInspectionTable from "../Report/TentSelfInspectionTable";
import { InspectionTAData,ITAsizeOfData,INTsearchingData } from "../Inspection/InspectionTAData";
import { MRdata , MRsearchingData, MRsizeOfData } from "../MaintenanceandRepair/RMData";
import { MRORdata,MRORsearchingData,MRORsizeOfData } from "../MaintenanceandRepair/MRORData";
import { data,sizeOfData,PTsearchingData } from "./PropertiesData";
export default function AllTablesSection({tablename,className,pageSize,children,data,tableSize,setSearchData}){
    const [pageStart , setPageStart] = useState(0);
    // const optionreander = ()=>{
    //     let datapasss;
    //     switch (tablename) {
    //         case 'propertytable':
    //             currentdatasize=sizeOfData();
    //             datapasss =searchState==""?data(pageStart,pageStart+pageSize):PTsearchingData(searchState);
    //             return <PropertyTable data={datapasss}/>
    //         case 'MRtable':
    //             currentdatasize=MRsizeOfData();
    //             datapasss =searchState==""?MRdata(pageStart,pageStart+pageSize):MRsearchingData(searchState);
    //             return <RegularMaintenanceTable data={datapasss}/>
    //         case 'MRORtable':
    //             currentdatasize=MRORsizeOfData();
    //             datapasss =searchState==""?MRORdata(pageStart,pageStart+pageSize):MRORsearchingData(searchState);
    //             return <OpenRepairTable data={datapasss}/>
    //         case 'inspectiontable':
    //             currentdatasize=ITAsizeOfData();
    //             datapasss =searchState==""?InspectionTAData(pageStart,pageStart+pageSize):INTsearchingData(searchState);
    //             return <InspectionAgentTable data={datapasss}/>
    //         case 'REPCtable':
    //             currentdatasize=REPCsizeOfData();
    //             datapasss =searchState==""?REPCdata(pageStart,pageStart+pageSize):REPCsearchingData(searchState);
    //             return <ReportEPCTable data={datapasss}/>
    //         case 'RTSItable':
    //             currentdatasize=ASITsizeOfData();
    //             datapasss =searchState==""? ASITData(pageStart,pageStart+pageSize):ASITsearchingData(searchState);
    //             return <TentSelfInspectionTable data={datapasss}/>
    //         default:
    //             break;
    //     }
    // }
    
    return(
        <>
            <div className={`PropertiesTable d-flex flex-column p-3 ${className}`}>
                <div className="TopSection d-flex flex-row gap-2">
                    <div className="SearchContainetr d-flex flex-row gap-2">
                        <div className="Icon">
                            <svg className="IconSvgSearch" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8.80547" cy="8.80541" r="7.49047" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14.0153 14.4043L16.9519 17.3334" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className='InputSearch'>
                            <input onChange={(e) => setSearchData(e.target.value)} className='InputSearchTag' type="text" placeholder='Search here...'/>
                        </div>
                    </div>
                    <div className="ButtonGroupContainer d-flex flex-row justify-content-end align-items-center gap-2">
                        <button className="SortBtn BtnEle d-flex flex-row align-items-center gap-2">
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0328 14.8032V3.45508" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.4308 11.3896L13.0327 14.8035L9.63452 11.3896" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.75911 1.19336V12.5415" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.36108 4.60725L4.75923 1.19336L8.15738 4.60725" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Short By
                        </button>
                        <button className="FilterBtn BtnEle d-flex flex-row align-items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.60826 13.8279H3.35767" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.9504 5.75072H16.201" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.27183 5.70521C7.27183 4.6255 6.39002 3.75 5.30254 3.75C4.21505 3.75 3.33325 4.6255 3.33325 5.70521C3.33325 6.78492 4.21505 7.66042 5.30254 7.66042C6.39002 7.66042 7.27183 6.78492 7.27183 5.70521Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6666 13.7951C16.6666 12.7153 15.7855 11.8398 14.698 11.8398C13.6098 11.8398 12.728 12.7153 12.728 13.7951C12.728 14.8748 13.6098 15.7503 14.698 15.7503C15.7855 15.7503 16.6666 14.8748 16.6666 13.7951Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Filter
                        </button>
                    </div>
                </div>
                {
                    React.cloneElement(children,{data:data(pageStart,pageStart+pageSize)})
                }
                <div className="ButtonGroupContainer BottomSection d-flex flex-row justify-content-end  align-items-center gap-2">
                    <button onClick={()=>{
                        if(pageStart-pageSize<=0){
                            setPageStart(0);
                        }
                        else{
                            setPageStart(pageStart-pageSize);
                        }
                        
                    }} className="BtnPrevious d-flex flex-row justify-content-center align-items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p className="btnText m-0">Previous</p>
                    </button>
                    <button onClick={()=>{
                        console.log(tableSize);
                        if(pageStart+pageSize>=tableSize){
                            setPageStart(pageStart);
                        }
                        else{
                            setPageStart(pageStart+pageSize);
                        }
                        
                    }} className="BtnNext d-flex flex-row justify-content-center align-items-center">
                        <p className="btnText m-0">Next</p>
                        <svg className="nxtIconSvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.9165 15.8334L7.08317 10.0001L12.9165 4.16675" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}