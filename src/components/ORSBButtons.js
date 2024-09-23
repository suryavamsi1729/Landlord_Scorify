import React from "react";
import './OpenRepairsSection.css';

export default function ORSBButton ({name,clickEvent}){
    return (
        <>
            <button onClick={(event)=>clickEvent(event)} className="ORSBBtn d-flex flex-row justify-content-center align-items-center mb-3">
                {name}
            </button>
        </>
    );
}