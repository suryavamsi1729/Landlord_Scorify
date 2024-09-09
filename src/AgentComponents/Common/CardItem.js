import React from "react";
import './MDBContentStyle.css';

const CardItem =(props) => {
  return (
    <div className="ItmCardContainer">
        {props.children}
    </div>
  )
}

export default CardItem