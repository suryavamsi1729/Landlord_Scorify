import React,{useState,useEffect} from "react";
import './OpenRepairsSection.css';
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import RadialGaugeComp from "./RadialGaugeComp";
export default function ORSGraphSection({value,heading}){
    const [score,setScore]=useState('');
    
    return(
        <>
            <div className="ORSGraphSection d-flex flex-column align-items-center gap-2 p-3">
                <h1 className="Heading">{heading}</h1>
                <RadialGaugeComp value={value} title={heading} />
                {/* <SMHBVentilationGraph score={75} title={"Ventilation Score"}/> */}
            </div>
        </>
    );
}