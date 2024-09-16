import {React,useState} from "react";
import './RegularMaintainens.css';
import img from './svg/mn.png';

export default function MaintenanceSchedularItm({statusval,countval,title,reported,description,due_date,report_photos}){
    const [status,setStatus] = useState(statusval);
    const butrender = ()=>{
        switch (status) {
            case 'Completed':
                return (
                    <button className="completedBtn d-flex flex-row align-items-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="7.5" stroke="white" stroke-width="1.5"/>
                        <path d="M7.24121 10.2082L9.21954 12.1857L13.1745 8.23071" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Completed
                    </button>
                );
            case 'Pending':
                return (
                    <button className="StartedBtn d-flex flex-row justify-content-center align-items-center">
                        Start Now
                    </button>
                );
            default:
                return (
                    <button className="StartedBtn d-flex flex-row justify-content-center align-items-center">
                        Start Now
                    </button>
                );
        }
    }
    return(
        <>
            <div className={`MaintenanceSchedularItmContainer ${(status==='Pending')&&(countval===1)?"topLayer":""} d-flex flex-row gap-3`}>
                <div className="RMImageContainer d-flex flex-row justify-content-center">
                    <img className="w-100 h-100 RMImage" src={report_photos || img} alt={"image"}/>
                    <div className="RMImgDueDateContainer d-flex flex-column justify-content-center p-1">
                        <h1 className="heading m-0 ">Due Date</h1>
                        <p className="date m-0">{due_date}</p>
                    </div>
                </div>
                <div className="RMContentContainer d-flex flex-column  py-2">
                    <div className="topContainer d-flex flex-column">
                        <h1 className="heading m-0">{title}</h1>
                        <div className="chipClass">{reported}</div>
                    </div>
                    <p className="RMItmText m-0">{description}</p>
                </div>
                <div className="RMBtnContainer py-2">
                    {butrender()}
                </div>
                <div className={`verticalLine ${status==='Pending'?"":"verticalLineComplete"} ${(status==='Pending')&&(countval===1)?"disableline":""}`}></div>
            </div>
        </>
    )
}