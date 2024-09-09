import React from "react";
import './OpenRepairsSection.css';
export default function ORSMainContent({children}){
    return(
        <>
            <div className="ORSMainContentSection d-flex flex-column justify-content-between h-100">
                {children}
            </div>
        </>
    );
}