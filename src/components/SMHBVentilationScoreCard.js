import React,{useEffect,useState} from "react";
import './MouldandHumidityStyle.css';
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import api from "../api";
// import RadialGaugeComp from "./RadialGaugeComp";
import MRadialGaugeComp from './MRadialGaugeComp'
export default function SMHVentilationScoreCard({score}){
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