import {React,useState,useEffect,useMemo} from "react";
import './OpenRepairsSection.css';
import OpenRepairSectionSideBar from "./OpenRepairSectionSideBar";
import ORSMainContent from "./ORSMainContent";
import ORSMCOpenRepair from "./ORSMCOpenRepairs";
import ORTableContainer from "./ORTableContainer";
import ORPTableContainer from "./ORPTableContainer";
// import {data,sizeOfData} from "./MOCK_DATA";
export default function OpenRepairsSection (){
    const columns = useMemo(
        ()=>[
            {
                Header:"Repair Details",
                className: "RepairDetailsColumn",
                accessor: "document.id"
            },
            {
                Header:"Completion Date",
                className: "CompletionDateColumn",
                accessor: "date"
            },
            {
                Header:"Status",
                className: "SatusColumn",
                accessor: "document.type"
            },
            {
                Header:"Completion Report",
                className: "CompletionReportColumn",
                accessor: "document.title"
            },
            {
                Header:"Repair Cost",
                className: "RepairCostColumn",
                accessor: "cretor.name"
            },
        ],[]);
    const [getOption,setOption] = useState("Open Repairs");
    const clickHandler = (name)=>{
        // console.log(name);
        setOption(name);
    }
    const optionRender = ()=>{
        switch (getOption) {
            case 'Open Repairs':
                return <ORPTableContainer columns={columns}  name={"table1"}/>;
            
            case 'Repairs History':
                return <ORTableContainer columns={columns}  name={"table1"}/>;
                // return <ORTableContainer columns={columns} data={data} sizeOfData={sizeOfData} name={"table1"}/>;
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
                            <OpenRepairSectionSideBar clickEvent={clickHandler}/>
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