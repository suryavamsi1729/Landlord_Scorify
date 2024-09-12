import {React,useState,useEffect} from "react";
import './OpenRepairsSection.css';
import ORSSBButton from "./ORSSBButtons";
import ORSGraphSection from "./ORSGraphSection";
import api from "../api";
const removeClick =()=>{
    const elements = document.querySelectorAll('.ORSSBBtn');
    elements.forEach((itm)=>{
        itm.classList.remove('ORSSBBtnActive');
    })
}

export default function OpenRepairSectionSideBar({clickEvent}){
    const [score,setScore]=useState();
    useEffect(()=>{
        clickEvent('Open Repairs');
        removeClick();
        document.querySelectorAll('.ORSSBBtn ')[0].classList.add('ORSSBBtnActive');

        const fetchData = async () => {
            try {
                const response = await api.get('landlord/repairs/');
                setScore(Math.round(response.data.total_repair_score)); 
            } catch (err) {
                console.log("Error while fetching data", err);
            }
        }
        fetchData();
    },[]);
    return (
        <>
            <div className="OpenReapairSideBar">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <ORSSBButton key={1} clickEvent={(event)=>{
                            clickEvent('Open Repairs');
                            removeClick();
                            event.target.classList.add('ORSSBBtnActive');
                            }} name={'Open Repairs'}/>
                        {/* <ORSSBButton key={2} clickEvent={()=>{clickEvent('Open Repairs')}}  name={'Open Repairs'}/> */}
                        <ORSSBButton key={3} clickEvent={(event)=>{
                            clickEvent('Repairs History');
                            removeClick();
                            event.target.classList.add('ORSSBBtnActive');
                            }} name={'Repairs History'}/>
                    </div>
                    <div className="col-12 p-0">
                        <ORSGraphSection  value={score} heading={"Repair score"}/>
                    </div>
                </div>
            </div>
        </>
    );
}