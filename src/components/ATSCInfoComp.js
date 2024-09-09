import React from "react";
import './TenantProfileSectionStyle.css';
export default function ATSCInfoComp({score,text}){
    return(
    <>
        <div className="ATSCInfoSection d-flex flex-column justify-content-between">
            <div className="TopSection d-flex flex-column gap-2">
                <div className="HeadingSection d-flex flex-row justify-content-between">
                    <h1 className="Heading m-0">Tenancy Score</h1>
                    <h1 className="Score m-0">{score}</h1>
                </div>
                <p className="Text m-0">
                    {text}
                </p>
            </div>
            <div className="BottomSection d-flex flex-column gap-2">
                <div className="d-flex flex-row gap-2">
                    <button className="buttoncomp btntop d-flex flex-row align-items-center justify-content-center">Inspection Reports</button>
                    <button className="buttoncomp btntop d-flex flex-row align-items-center justify-content-center">Post for tenants</button>
                </div>
                <button className="buttoncomp d-flex flex-row align-items-center justify-content-center">Maintenance Requests</button>
            </div>
        </div>
    </>
    );
}