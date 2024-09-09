import React from "react";
import './MDBContentCompStyle.css';
import CardsComp from "./CardsComp";
import LocationCard from "./LocationCard";
import CurrentScoreCard from "./CurrentScoreCard";
export default function SectionPropertyScoreDetails({locationcard,Property,Age,Score,Date}){
    return(
        <>
        <div className="SectionPropertyScoreDetailsContainer">
            <div className="ContentSection">
                <LocationCard data={locationcard} ></LocationCard>
                <CardsComp prop={Property} age={Age}></CardsComp>
            </div>
            <CurrentScoreCard score={Score} date={Date}></CurrentScoreCard>
        </div>
        </>
    );
}