import React from "react";
import TPSGraphComp from "./TPSGraphComp";
import './TenantProfileSectionStyle.css';
export default function  TPSGraphSection(){
    return(
        <>
            <div className="TPSGraphSection d-flex flex-column gap-3 p-3">
                <h1 className="Heading">Score History</h1>
                
                    <TPSGraphComp/>
                    
            </div>
        </>
    );
}