import {React,useState,useEffect} from "react";
import './OpenRepairsSection.css';
import ORSSBButton from "./ORSSBButtons";
import ORSGraphSection from "./ORSGraphSection";
const removeClick =()=>{
    const elements = document.querySelectorAll('.ORSSBBtn');
    elements.forEach((itm)=>{
        itm.classList.remove('ORSSBBtnActive');
    })
}
export default function RMSSideBar({clickEvent}){
    useEffect(()=>{
        clickEvent('Up-Coming Service');
        removeClick();
        document.querySelectorAll('.ORSSBBtn ')[0].classList.add('ORSSBBtnActive');
    },[]);
    return (
        <>
            <div className="OpenReapairSideBar">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <ORSSBButton key={1} clickEvent={(event)=>{
                            clickEvent('Up-Coming Service');
                            removeClick();
                            event.target.classList.add('ORSSBBtnActive');
                            }} name={'Up-Coming Service'}/>
                        <ORSSBButton key={2} clickEvent={(event)=>{
                            clickEvent('Maintenance Schedule');
                            removeClick();
                            event.target.classList.add('ORSSBBtnActive');
                            }}  name={'Maintenance Schedule'}/>
                        <ORSSBButton key={3} clickEvent={(event)=>{
                            clickEvent('Service History');
                            removeClick();
                            event.target.classList.add('ORSSBBtnActive');
                            }} name={'Service History'}/>
                    </div>
                    <div className="col-12 p-0">
                        <ORSGraphSection heading={"Regular Maintenance Score"}/>
                    </div>
                </div>
            </div>
        </>
    );
}