import React,{useEffect,useState} from "react";
import './MouldandHumidityStyle.css';
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import api from "../api";
// import RadialGaugeComp from "./RadialGaugeComp";
import MRadialGaugeComp from './MRadialGaugeComp'
export default function SMHVentilationScoreCard(){
    const [score,setScore]=useState("0");
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response = await api.get('landlord/mould/');
    
                setScore(response.data.mould[0].ventilation_score);
            }catch(error){
                console.log("Error while fetching the data",error);
            }  
        }
   fetchData(); 
},[]);
    return(
        <>
        <div className="VentilationScoreCard d-flex flex-column align-items-center m-0 p-3">
            <h1 className="heading">Ventilation Score</h1>
            <MRadialGaugeComp value={score} title={score}/>
            {/* <SMHBVentilationGraph score={score} title={"Ventilation Score"}/> */}
        </div>
        </>
    );
}