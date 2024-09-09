import {React,useRef,useState,useEffect,useContext} from "react";
import { MainContext } from "../Context/MainContext";
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import RASUploadReport from "./RASUploadReport";
import './EPC.css';
import { Link } from "react-router-dom";
import RadialGaugeComp from "./RadialGaugeComp";
import api from "../api";
export default function RiskAssessmentSection(){
    const {dispatch} = useContext(MainContext);
    const btnRef = useRef([]);
    const [score,setScore]=useState();
    const [getActive,setActive] = useState('Upload Reports');
    useEffect(()=>{
            btnRef.current[0].classList.add('ActiveEleBtn');

            const fetchData=async()=>{
                try{
                  const response=await api.get('/landlord/safety-report');
                 
                  setScore(Math.round(response.data[0].score)); 

                }catch(err){
                    console.log("Error while fetching the Data",err);
                } 
            }
            fetchData();
        },[])
    const OnClickEvent = (event)=>{
        btnRef.current.forEach(element => {
            element.classList.remove('ActiveEleBtn');
        });
        event.target.classList.add('ActiveEleBtn');
        setActive(event.target.innerText);
    }
    const OptionalRender = ()=>{
        switch (getActive) {
            case 'Upload Reports':
                return(
                    <>
                        <RASUploadReport/>
                    </>
                );
            case 'Download Reports':
                return(
                    <>
                        <RASUploadReport/>
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
                                    Upload Reports
                                </button>
                                <Link  to="/dashboard/riskassessment/download" onClick={()=>{
                                    dispatch({
                                        type:"path",
                                        payload:{
                                            path:"applience",
                                            sidebar:false
                                        }
                                    });
                                    
                                }} style={{textDecoration:'none',color:'#18181B',padding:'0px',width:'calc(100%)'}}>
                                <div ref = {(ele)=>{btnRef.current[1]=ele}} className="TabBtnele d-flex flex-column justify-content-center align-items-center" onClick={(e)=>{OnClickEvent(e)}}>
                                    Download Reports
                                </div>
                                </Link>
                            </div>
                            <div className="ScoreCardEle d-flex flex-column align-items-center gap-3 p-3 pb-5">
                                <h1 className="heading">Safety Score</h1>
                                <RadialGaugeComp value={score} title={"Safty Score"}/>
                                {/* <SMHBVentilationGraph score={75} title={"Ventilation Score"}/> */}
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