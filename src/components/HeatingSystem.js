import {React,useRef,useState,useEffect} from "react";
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import './EPC.css';
import TPSGraphComp from "./TPSGraphComp";
import './TenantProfileSectionStyle.css';
import RiskAssessmentCard from "./RiskAssessmentCard";
import api from "../api";

import HPEPCRTableComp from "./HPEPCRTableComp";
import RadialGaugeComp from "./RadialGaugeComp";
export default function HeatingSystem(){

    function convertDateFormat(dateString) { 
        const [year, month, day] = dateString.split('-');
        return `${day}/${month}/${year}`;
    }
    const [data,setData]=useState({})

    const [heatingData, setHeatingData] = useState();
    
    

    useEffect(()=>{
       const fetchData=async()=>{
        try{
            const res = await api.get('landlord/dashboard/');
            const pid = res.data.properties[0].property[0].id;
            const response=await api.get(`landlords/gascur/${pid}/`);
            const response1=await api.get("landlord/heating-safety/");
            setHeatingData(response1.data[0]);
            // console.log(response1.data[0]);
          setData({
            Img:response.data.view_document,
            due:convertDateFormat(response.data.report_date),
            expire:response.data.expiry_months,
            score:Math.round(response.data.repair_score),
          }) 

        //   sethdata(response1.data);
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
                        <img src={data.Img} className="HSImageUpload" alt="No Current Report Found"/>
                    </>
                );
                case 'Previous Report':
                    return(
                        <>
                            <div className="TableContainer p-3">
                                <HPEPCRTableComp/>
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
                                        <div className="Indicator-before" style={{width: `${20}%`}}></div>
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
                        <div className="HeatingSystemMainContainer d-flex flex-column align-items-center gap-3 p-3">
                            <img className="Imageele mb-3" src={"/GIF.jpg"} alt="img"/>
                            <div className="CardContainer d-flex flex-row gap-3 flex-wrap">

                                {heatingData?.heating_units.map((item,i)=>{
                                    return(
                                        <div className="Carditm" key={i}>
                                    <RiskAssessmentCard score={item.score} title={item.name}>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.7333 27.6951C11.3927 27.5307 10.0527 27.2652 8.71377 26.8988C7.50363 26.5675 6.66667 25.4865 6.66667 24.2547V4.08475C6.66667 2.85295 7.50363 1.77196 8.71377 1.44074C11.1398 0.776835 13.5693 0.444336 16 0.444336C18.4308 0.444336 20.8602 0.776835 23.2862 1.4408C24.4964 1.77202 25.3333 2.85301 25.3333 4.08482V24.2548C25.3333 25.4866 24.4964 26.5676 23.2862 26.8988C21.9473 27.2653 20.6073 27.5308 19.2667 27.6951V30.6404C19.2667 31.1458 18.8488 31.5554 18.3333 31.5554C17.8178 31.5554 17.4 31.1458 17.4 30.6404V27.8585C16.4673 27.9075 15.5327 27.9075 14.6 27.8585V30.6404C14.6 31.1458 14.1822 31.5554 13.6667 31.5554C13.1512 31.5554 12.7333 31.1458 12.7333 30.6404V27.6951Z" fill="#EF4444"/>
                                        <path d="M16.9428 11.6093L17.6094 10.9426C18.1301 10.4219 18.1301 9.57767 17.6094 9.05704C17.0887 8.53633 16.2445 8.53633 15.7238 9.05704L15.0572 9.72367C14.5365 10.2444 14.5365 11.0886 15.0572 11.6093C15.5779 12.13 16.4221 12.13 16.9428 11.6093Z" fill="white"/>
                                        <path d="M16 17.3333C19.6819 17.3333 22.6667 14.3486 22.6667 10.6667C22.6667 6.98474 19.6819 4 16 4C12.3181 4 9.33334 6.98474 9.33334 10.6667C9.33334 14.3486 12.3181 17.3333 16 17.3333ZM16 14.6667C13.7909 14.6667 12 12.8759 12 10.6668C12 8.45764 13.7909 6.6667 16 6.6667C18.2091 6.6667 20 8.45755 20 10.6667C20 12.8758 18.2091 14.6667 16 14.6667Z" fill="#FBBF24"/>
                                    </svg>
                                    </RiskAssessmentCard>
                                </div>
                                    )
                                })}
                            </div>
                        </div>
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
                                <RadialGaugeComp value={data.score} title={"Heating Score"}/>
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