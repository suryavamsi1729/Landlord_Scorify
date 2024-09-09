import {React,useRef,useState,useEffect} from "react";
import './MaintenanceandRepair.css';
import RegularMaintenanceTable from "./RegularMaintenanceTable";
import OpenRepairTable from "./MROpenRepairTable";
import { MRdata,MRsizeOfData } from "./RMData";
import { MRORdata,MRORsizeOfData } from "./MRORData";
import AllTablesSection from "../Properties/AllTablesSections";
import MaintainanceTimeline from "../MaintainanceTimeline/MaintainanceTimeline";
import MainTenanceSchedule from "../MaintainanceTimeline/MainTenanceSchedule";
import RMTableContainer from "./RMTableContainer";
import ORTableContainer from "./ORTableContainer";
import api from "../../api";
export default function MaintenanceandRepair(){
    const [poupdata,setPopupdata] = useState();
    const [pageStart , setPageStart] = useState(0);
    const [pageStartor , setPageStartor] = useState(0);
    const [option,setoption] = useState('RM');
    const referesnces = useRef([]);
    const HandleClick = (e,i,s)=>{
        referesnces.current.forEach((ele)=>{
            ele.childNodes[1].classList.remove('Active');
            ele.classList.remove('Active');
        })
        referesnces.current[i].classList.add('Active');
        referesnces.current[i].childNodes[1].classList.add('Active');
        setoption(s);
    }
    const [rcount,Setrcount]=useState('');
    const [rmcount,Setrmcount]=useState('');
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await api.get('agent/open-repairs/');
                const response1=await api.get('agent/regular-maintenance/');
                Setrcount(response.data.repair_count);
                Setrmcount(response1.data.maintenance_count);
            }catch(err){
               console.log("Error while fetching the data",err);
            }
        }
        fetchData();
    })
    useEffect(
        ()=>{
            referesnces.current.forEach((ele)=>{
                ele.childNodes[1].classList.remove('Active');
                ele.classList.remove('Active');
            });
            referesnces.current[0].classList.add('Active');
            referesnces.current[0].childNodes[1].classList.add('Active');
        },[]
    )
    const renderoption = ()=>{
            switch (option) {
                case 'RM':
                    return(
                        <>
                            <RMTableContainer/>
                        </>
                    );
                case 'OR':
                    return(
                        <>
                            <ORTableContainer/>
                        </>
                    );
            }
    }
    return(
        <>
        <div className="SectionMaintenanceandRepair p-0">
            <div className="container-fluid p-0">
                <div className="row m-0 g-3">
                    <div className="col-6 p-0 pe-2">
                        <button ref={(ele)=>{referesnces.current[0]=ele}} className="RMBtnEle RegularMaintenanceBtn d-flex flex-column p-3 gap-3" onClick={(e)=>{HandleClick(e.target,0,'RM')}} >
                            <h1 className="Heading m-0">Regular Maintenance</h1>
                            <div className="ContentSection d-flex flex-column justify-content-center align-item-center gap-2">
                                <p className="Value m-0">{rmcount}</p>
                                <p className="Text m-0">Pending</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-6 p-0 ps-2">
                        <button ref={(ele)=>{referesnces.current[1]=ele}} className="RMBtnEle RegularMaintenanceBtn d-flex flex-column p-3 gap-3" onClick={(e)=>{HandleClick(e.target,1,'OR')}}>
                            <h1 className="Heading m-0">Open Repairs</h1>
                            <div className="ContentSection d-flex flex-column justify-content-center align-item-center gap-2">
                                <p className="Value m-0">{rcount}</p>
                                <p className="Text m-0">Open</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-12 p-0">
                        
                        {
                            renderoption()
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}