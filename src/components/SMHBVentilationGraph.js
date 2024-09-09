import React from "react";
import './MouldandHumidityStyle.css';
export default function SMHBVentilationGraph({score,title}){
    
    return(
        <>
            <div className="PieChartVentilation d-flex flex-column align-items-center justify-content-center" >
                <div className="Indicator d-flex flex-column align-items-center" style={{transform:'rotate(30deg)'}}>
                    <div className="arrow"></div>
                </div>
                <div className="PieChartVentilationText gap-1 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="score m-0">{`${score}%`}</h1>
                    <p className="Nametext m-0">{title}</p>
                </div>
            </div>
        </>
    );
}