import React from "react";
import './SideBarCompStyle.css';
import BandComp from "./BrandComp";
import NavigationBarComp from "./NavigationBarComp";
import LandLordNavBarCom from "./LandLordNavBarCom";
export default function SideBarComp(){
    return(
        <>
            <div className="SideBarContainer">
                <BandComp></BandComp>
                {/* <NavigationBarComp></NavigationBarComp> */}
                <LandLordNavBarCom/>
            </div>
        </>
    );
}