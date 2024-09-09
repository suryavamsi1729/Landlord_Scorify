import React from "react";
import './TenantProfileSectionStyle.css';
import TPSProfileCardSection from "./TPSProfileCardSection";
import AvgTenancyScoreCard from "./AvgTenancyScoreCard";
import TPSGraphSection from "./TPSGraphSection";
export default function TenantProfileSectionComp(){
    return (
        <>
            <div className="TenantProfileSection">
                <div className="container-fluid p-0">
                    <div className="row m-0 gy-3">
                        <div className="col-12 p-0">
                            <AvgTenancyScoreCard/>
                        </div>
                        <div className="col-12 p-0">
                            <TPSProfileCardSection/>
                        </div>
                        <div className="col-12 p-0">
                            <TPSGraphSection/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}