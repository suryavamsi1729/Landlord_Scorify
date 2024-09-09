import React from "react";
import './InspectionInventory.css';
export default function Tabs(){
    return(
        <>
            <div className="TabsSectionContainer d-flex flex-row gap-2">
                <button className="button lybtn">Last Year</button>
                <button className="button custbtn">Custom</button>
            </div>
        </>
    );
}