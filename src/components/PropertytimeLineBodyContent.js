import React from "react";
import PTCDateContent from "./PTCDateContent";
export default function PropertytimeLineBodyContent(props){
    return(
        <>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="PropertytimeLineBodyContentContainer d-flex flex-column p-3">
                            <PTCDateContent/>
                            <PTCDateContent/>
                            <PTCDateContent/>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}