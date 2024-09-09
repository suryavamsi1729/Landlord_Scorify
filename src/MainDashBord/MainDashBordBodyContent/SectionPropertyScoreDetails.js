import React from "react";
import './MDBContentCompStyle.css';
import CardsComp from "./CardsComp";
import LocationCard from "./LocationCard";
import CurrentScoreCard from "./CurrentScoreCard";
export default function SectionPropertyScoreDetails(){
    return(
        <>
        <div className="SectionPropertyScoreDetailsContainer">
            <div className="ContentSection">
                <LocationCard ></LocationCard>
                <CardsComp></CardsComp>
            </div>
            <CurrentScoreCard></CurrentScoreCard>
        </div>
        </>
    );
}