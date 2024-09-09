import React from "react";
export default function HouseInfoCard(props){
    return(
        <>
            <div className="HouseInfoCardContainer">
                <h1 className="FlatText">{props.data.heading}</h1>
                <p className="Prototype">{props.data.subheading}</p>
            </div>
        </>
    );
}
