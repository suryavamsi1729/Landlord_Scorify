import React from "react";
import './Properties.css';
export function PropertiesCount(){
    return(
        <>
            <div className="CardContainer">
            
            </div>
        </>
    )
}
export function CardContainer({children,className}){
    return(
        <>
            <div className={`CardContainer d-flex flex-column p-3 ${className}`}>
                {children}
            </div>
        </>
    )
}