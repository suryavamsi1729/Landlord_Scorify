import {React,useRef,useState,useEffect} from "react";
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import './EPC.css';
import TPSGraphComp from "./TPSGraphComp";
import './TenantProfileSectionStyle.css';
import RiskAssessmentCard from "./RiskAssessmentCard";
import api from "../api";

import HPEPCRTableComp from "./HPEPCRTableComp";
import RadialGaugeComp from "./RadialGaugeComp";
import HSystem from "./HSystem";
export default function HeatingSystem(){

    function convertDateFormat(dateString) { 
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
    const [data,setData]=useState({})
    const [score,Setscore]=useState();
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("landlord/heating-safety/");
                Setscore(response.data[0].score);
            } catch (err) {
                console.log("Error while Fetching the Data", err);
            }
        }
        fetchData();
    }, []);
    
    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res = await api.get('landlord/dashboard/');
            const pid = res.data.properties[0].property[0].id;
            const response=await api.get(`landlords/gascur/${pid}/`);
            setData({
            Img:response.data.view_document,
            due:convertDateFormat(response.data.report_date),
            expire:response.data.expiry_months,
            score:Math.round(response.data.repair_score),
          }) 
        }catch(err){
            console.log("Error while Fetching the Data",err);
        }
       } 
       fetchData();
    },[]);



    const btnRef = useRef([]);
    const subBtnRef = useRef([]);
    const [getActive,setActive] = useState('Gas Safety Certificate');
    const [subgetActive,subsetActive] = useState('Current Report');
    const setele = ()=>{
        subsetActive('');
    }
    useEffect(
        ()=>{
            btnRef.current.forEach(element => {
                element.classList.remove('ActiveEleBtn');
            });
            btnRef.current[0].classList.add('ActiveEleBtn');
        },[]
    );
    useEffect(
        ()=>{
            if(getActive === 'Gas Safety Certificate'){
                if(subgetActive === 'Current Report'){
                    subBtnRef.current[0].classList.add('activeBtn');
                }
            }
        },[getActive]
    )

    
    const OnClickEvent = (event)=>{
        btnRef.current.forEach(element => {
            element.classList.remove('ActiveEleBtn');
        });
        event.target.classList.add('ActiveEleBtn');
        setActive(event.target.innerText);
        if(event.target.innerText == 'Heating System'){
            subsetActive('')
        }
        else{
            subsetActive('Current Report');
        }
    }
    const OnClickEventsub = (event)=>{
        subBtnRef.current.forEach(element => {
            element.classList.remove('activeBtn');
        });
        event.target.classList.add('activeBtn');
        subsetActive(event.target.innerText);
    }
    const subOptionalRender = ()=>{
        switch (subgetActive) {
            case 'Current Report':
                return(
                    <>
                        {data.Img?(<img src={data.Img} className="HSImageUpload" alt="No Current Report Found"/>):(
                                <td colSpan="4" className='noDataCell'>No Data Available</td>   
                        )}

                    </>
                );
                case 'Previous Report':
                    return(
                        <>
                            <div className="TableContainer p-3">
                                <HPEPCRTableComp />
                            </div> 
                            
                        </>
                    );
            default:
                return(
                    <h1>Error</h1>
                );
            }
    }
    const OptionalRender = ()=>{
        switch (getActive) {
            case 'Gas Safety Certificate':
                return(
                    <>
                        <div className="HeatingSystemMainContainer d-flex flex-column gap-3 p-3">
                            <div className="TopSection d-flex flex-row justify-content-between">
                                <div className="btnGroupItms d-flex flex-row gap-3">
                                <button ref = {(ele)=>{subBtnRef.current[0]=ele}} className="btnitm" onClick={(e)=>{OnClickEventsub(e)}}>
                                    Current Report
                                </button>
                                <button ref = {(ele)=>{subBtnRef.current[1]=ele}} className="btnitm" onClick={(e)=>{OnClickEventsub(e)}}>
                                    Previous Report
                                </button>
                                </div>
                                <div className="IndicatorLoaderContainer d-flex flex-column">
                                    <div className="textContainer d-flex flex-row justify-content-between">
                                        <p className="text">Due Date : <span>{data.due}</span></p>
                                        <p className="text">Expired in : <span>{data.expire}</span></p>
                                    </div>
                                    <div className="Indicator">
                                        <div className="Indicator-before" style={{width: `${data.score/100*10}%`}}></div>
                                    </div>
                                </div>
                            </div>
                            {
                                subOptionalRender()
                            }
                        </div>
                    </>
                );
            case 'Heating System':
                return(
                    <> 
                        <HSystem/>  
                    </>
                );
            default:
                return(
                    <h1>Error</h1>
                );
            }
    }
    
    return (
        <>
        <div className="EPCSection">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-4">
                        <div className="SideSection d-flex flex-column gap-3">
                            <div className="BtnGroupEle d-flex flex-column gap-3">
                                <button ref = {(ele)=>{btnRef.current[0]=ele}} className="TabBtnele" onClick={(e)=>{OnClickEvent(e)}}>
                                    Gas Safety Certificate
                                </button>
                                <button ref = {(ele)=>{btnRef.current[1]=ele}} className="TabBtnele" onClick={(e)=>{OnClickEvent(e)}}>
                                    Heating System
                                </button>
                            </div>
                            <div className="ScoreCardEle d-flex flex-column align-items-center gap-5 p-3 pb-5" style={{height:'420px'}}>
                                <h1 className="heading">Heating Score</h1>
                                <RadialGaugeComp value={score} title={"Heating Score"}/>
                                {/* <SMHBVentilationGraph score={data.score} title={"Repair Score"}/> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        
                        {
                            OptionalRender()
                        }
                        
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}