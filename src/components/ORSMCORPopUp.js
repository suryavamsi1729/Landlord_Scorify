import React from "react";
import './OpenRepairsSection.css';
export default function ORSMCORPopUp({children}){
    const bool=false;
    return(
        <>
            <div className="popupConainer d-flex flex-column gap-2">
                <div className="SvgSection d-flex flex-row justify-content-end">
                    {children}
                </div>
                <div className="BodySection d-flex flex-column align-items-center gap-2">
                    {
                        bool?
                        <div className="detailesContainer  w-100 d-flex flex-column align-items-center gap-2">
                            <h1 className="detailes d-flex flex-row gap-2 m-0">
                                <span className="name donename">Repair Status:</span>
                                <span className="doneSpan">Done</span>
                            </h1>
                            <h1 className="detailes d-flex flex-row gap-2 m-0">
                                <span className="name">compilition :</span>
                                <span className="value">05 / 07 / 2024 at 14:50</span>
                            </h1>
                        </div>
                        :
                        <div className="detailesContainer  w-100 d-flex flex-column align-items-center gap-2">
                            <h1 className="detailes d-flex flex-row gap-2 m-0">
                                <span className="name">Received on :</span>
                                <span className="value">05 / 07 / 2024 at 14:50</span>
                            </h1>
                            <h1 className="detailes d-flex flex-row gap-2 m-0">
                                <span className="name">Repair Status :</span>
                                <span className="value">Arranging Visit</span>
                            </h1>
                            <h1 className="detailes d-flex flex-row gap-2 m-0">
                                <span className="name">Report:</span>
                                <span className="value">Cold water tap not turning on.</span>
                            </h1>
                        </div>
                    }
                    
                    <img className="popupImg" alt="popupImg" src="/popupimg.jpg"/>
                </div>
            </div>
        </>
    );
}