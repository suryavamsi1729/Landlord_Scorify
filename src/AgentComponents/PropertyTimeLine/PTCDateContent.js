import React from "react";
import './PropertytimelineStyle.css';
import PTCTimeContent from "./PTCTimeContent";
export default function PTCDateContent(props){
    return(
        <>
        <div className="PTCDateContentContainer p-0">
            <div className="container-fluid d-flex flex-column p-0 gap-3">
                <h6 className="DateHeading m-0">
                    JUL 24, 2024
                </h6>
                <div className="DateTimelineContentContainer d-flex flex-column">
                    <PTCTimeContent/>
                    <PTCTimeContent/>
                    <PTCTimeContent/>
                    <PTCTimeContent/>
                </div>
            </div>
        </div>
        </>
    );
}