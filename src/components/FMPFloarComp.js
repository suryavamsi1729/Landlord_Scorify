import React from "react";
export default function FMPFloarComp({title}){
    return(
        <>
            <div className="GalleryContainer d-flex flex-column p-3">
                <h1 className="Heading m-0">{title}</h1>
                <div className="BodyCompFM d-flex flex-column justify-content-center align-items-center">
                    <img className="FloarImg" alt="Img" src="/floarmapimg.jpg"/>
                </div>
            </div>
        </>
    );
}