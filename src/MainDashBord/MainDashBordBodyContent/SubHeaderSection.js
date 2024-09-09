import {React,useState,useContext} from "react";
import './MDBContentCompStyle.css';
import UploadButton from "./UploadButton";
import UploadDownloadBtn from "./UploadDownloadBtn";
import { useLocation } from "react-router-dom";
import Header from "../../AgentComponents/Calendar/Header";
import { MainContext } from "../../Context/MainContext";
export default function SubHeaderSection(props){
    const { DateCal,dispatch } = useContext(MainContext);
    const [currentDate,setCurrentDate]=useState(DateCal);
    const prevmonth=()=>{ 
        setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()-1,1));
        dispatch({
            type:"date",
            payload:{
                currentValDate: new Date(currentDate.getFullYear(),currentDate.getMonth()-1,1)
            }
        })
      };
      const nextmonth=()=>{
        setCurrentDate(new Date(currentDate.getFullYear(),currentDate.getMonth()+1,1));
        dispatch({
            type:"date",
            payload:{
                currentValDate: new Date(currentDate.getFullYear(),currentDate.getMonth()+1,1)
            }
        })
      }
    const loc = useLocation();
    const mypathArray = [];
    const pathMaker = ()=>{
        loc.pathname.split("/").forEach((itm)=>{
           if(itm!==""){
                mypathArray.push(itm);
           }
        })
    }
    
    const renderbtn = ()=>{
        switch (loc.pathname) {
            case "/dashboard": return <UploadButton/>;
            case "/dashboard/inspections&inventory": return <UploadDownloadBtn/> ;
            case "/dashboard/riskassessment/download": return <UploadDownloadBtn/> ;
            case "/reports/epc": return <UploadButton/>;
            case "/reports/tenantself-inspections": return <UploadButton/>;
            case "/reports/inventory": return <UploadButton/>;
            case "/reports/check-out": return <UploadButton/>;
            case '/calendar': return <Header currentDate={currentDate} prevMonth={prevmonth} nextMonth={nextmonth}/> ;
            case "/agent/dashboard":return <UploadButton/>; 
            case "/agent/Calendar" :return <Header 
            currentDate={new Date()}
            prevMonth={()=>{}}
            nextMonth={()=>{}}
            />;
            default:
                break
        }
    }
    return(
        <>
            {
            pathMaker()
            }
            <div className='SectionSubMainHeader'>
                <div className="SectionPathContainer">
                    <div className="PathwrapperSection">
                        {
                        mypathArray.map((itm,i)=>{
                            return (
                                <>
                                    <h5 className={`${i!==mypathArray.length-1?"PathTextInactive":"PathText"} m-0`}>{itm}</h5>
                                    <h5 className={`${i===mypathArray.length-1?"PathTextSpecialInactive":"PathTextSpecial"} m-0`}>/</h5>
                                </>
                            );
                        })
                        }
                    </div>
                </div>
                {renderbtn()}
            </div>
        </>
    );
}