import React from "react";
export default function PTCTimeContent(props){
    return(
        <>
            <div className="PTCTimeContentContainer d-flex flex-row align-items-center gap-3">
                <h6 className="PTCTimeContentHeading m-0">12:14 PM</h6>
                <div className="PTCTimeContentDot"></div>
                <h6 className="PTCTimeContentText m-0">Lorem ipsum dolor sit amet consectetur. Mollis enim nam vel tristique tellus quam volutpat risus. </h6>
                <div className="PTCTimeContentChip d-flex flex-row align-items-center justify-content-center"><p className="Lable m-0">Landlord</p></div>
                <div className="PTCTimeContentLine"></div>
            </div>
        </>
    );
}