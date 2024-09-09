import React from "react";
import './MDBContentCompStyle.css';
export default function CardItm(props){
    return(<>
        <div className="ItmCardContainer">
            {props.children}
        </div>
    </>);
}