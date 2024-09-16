import React,{useContext,useEffect,useState} from "react";
import PTCDateContent from "./PTCDateContent";
import { MainContext } from "../Context/MainContext";
import api from "../api";
export default function PropertytimeLineBodyContent(props){
    // const {pid} = useContext(MainContext);
    useEffect(()=>{
    //    console.log(pid);
        const fetchData=async()=>{
            try{
                const res=await api.get('landlord/dashboard/');
                const pid=res.data.properties[0].property[0].id;
                console.log(pid);
                const response=await api.get(`landlord/property-timeline/${pid}/`);
                console.log(response.data);
            }catch(err){
                console.log("Error while fetching the data",err);
            }
        }
        fetchData();
       
    },[])
    return(
        <>
          <div className="under-construction-container">
            <h1 className="title">We are building something great</h1>
            <p className="message">Hold for Next update.Catch you soon!</p>
            <div className="construction-icon">🎉</div>
        </div>
            {/* <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-12 p-0">
                        <div className="PropertytimeLineBodyContentContainer d-flex flex-column p-3">
                            <PTCDateContent/>
                            <PTCDateContent/>
                            <PTCDateContent/>
                            {props.children}
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}