import React, { useEffect, useState } from "react";
import './MDBContentCompStyle.css';
import HouseInfoCard from "./HouseInfoCard";
import api from "../../api";

export default function CardsComp({prop,age}) {
    return (
        <>
            <div className="CardsContainer">
                <HouseInfoCard data={{ heading: prop, subheading: "Property Type" }} />
                <HouseInfoCard data={{ heading: "04 Years", subheading: "Current Tenancy" }} />
                <HouseInfoCard data={{ heading: age, subheading: "House Age" }} />
            </div>
        </>
    );
}
