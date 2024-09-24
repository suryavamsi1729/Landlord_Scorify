import React from "react";
export default function RiskAssessmentCard({children,title,score}){
    return(
        <>
            <div className="RiskAssessmentCardele d-flex flex-row gap-2">
                <div className="IconCaontainer d-flex flex-row justify-content-center align-items-center">
                    {children}
                </div>
                <div className="ContentContainer d-flex flex-column gap-2">
                    <h1 className="Heading m-0">{title}</h1>
                    <div className="RiskIndicatorContainer d-flex flex-column justify-content-end">
                        <div className="IndicatorContainer">
                            <div className="indicator" style={{
                                position: 'absolute',
                                left: `calc(${score}% - 5px)`, 
                                width: '10px',
                                height: '100%',  
                                transition: 'left 0.3s ease', 
                            }} 
                            ></div>
                        </div>
                        <div className="SubContainer d-flex flex-column">
                            <div className="RiskIndicator"></div>
                            <div className="TextContainer d-flex flex-row">
                                <div className="Text">Low Risk</div>
                                <div className="Text">Medium Risk</div>
                                <div className="Text">High Risk</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}