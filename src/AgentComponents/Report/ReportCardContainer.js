import React from "react";
import './Report.css';
import MultiColorProgressBar from "../CircularProgressMUlTI";
export default function ReportCardContainer({children,title}){
    
    return(
        <>
            <div className={'p-3 d-flex flex-row justify-content-center align-items-center gap-3 ReportProgressBarContainer'}>
                <div className="CircularLoaderele">
                    <MultiColorProgressBar aRating={5} bRating={45} cRating={100} dRating={10} />
                </div>
                <div className="InfoContainer d-flex flex-column gap-3">
                    <h1 className="Heading m-0 text-center">{title}</h1>
                    <p className="ReportCount m-0 text-center">{`Total Reports : ${140}`}</p>
                    <div className="RatingContainer d-flex flex-row flex-wrap gap-2">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}