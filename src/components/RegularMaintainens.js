import {React,useState,useMemo,useEffect} from "react";
import './OpenRepairsSection.css';
import RMSSideBar from './RMSSideBar';
import ORSMainContent from "./ORSMainContent";
import ORSMCOpenRepair from "./ORSMCOpenRepairs";
import ORTableContainer from "./ORTableContainer";
import RMMaintenanceSchedule from "./RMMaintenanceSchedule";
import RMServiceHistoryTable from "./RMServiceHistoryTable";
import UCServiceHistoryTable from "./UCServiceHistoryTable";
import {data,sizeOfData} from "./MOCK_DATA";
import axios from "axios";
export default function RegularMaintenance (){
    const columns = useMemo(
        ()=>[
            {
                Header:"Service Details",
                className: "ServiceDetailsColumnrm",
                accessor: "document.id"
            },
            {
                Header:"Completion Date",
                className: "CompletionDateColumnrm",
                accessor: "date"
            },
            {
                Header:"Status",
                className: "SatusColumnrm",
                accessor: "document.type"
            },
            {
                Header:"Report",
                className: "ReportColumnrm",
                accessor: "document.title"
            },
            {
                Header:"Photos",
                className: "PhotosColumnrm",
                accessor: "cretor.name"
            },
        ],[]);
    const [getOption,setOption] = useState("");
    const clickHandler = (name)=>{
        // console.log(name);
        setOption(name);
    }
    const optionRender = ()=>{
        switch (getOption) {
            case 'Up-Coming Service':
                return <UCServiceHistoryTable columns={columns} name={"table2"}/>
            case 'Service History':
                return <RMServiceHistoryTable columns={columns} name={"table2"}/>
                // return <ORTableContainer columns={columns} data={data} sizeOfData={sizeOfData} name={"table2"}/>;
            case 'Maintenance Schedule':
                return <RMMaintenanceSchedule/>;
            default:
                return <h1>Error</h1>;
        }
    }
    return (
        <>
            <div className="OpenReapairSection">
                <div className="container-fluid p-0 w-100 h-100">
                    <div className="row m-0 w-100 h-100">
                        <div className="col-4 p-0 pe-2 h-100">
                            <RMSSideBar clickEvent={clickHandler}/>
                        </div>
                        <div className="col-8 p-0 ps-1 h-100">
                            <ORSMainContent>
                                {
                                    optionRender()
                                }
                            </ORSMainContent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}