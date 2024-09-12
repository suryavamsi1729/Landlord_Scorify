import React,{useState,useEffect} from "react";
import axios from "axios";
import './AgentsProfile.css';

export default function APSOtherDepartmentCard({title}){
    const [data,setData]=useState({  
        // phone:"020 8810 1919",
        // email:"info@dexters.com",
    })
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get("http://127.0.0.1:8000/landlord/87c3fd8f-9ddb-4509-9dfc-f9fc962d8705/agent/");
                setData({      
                    phone:response.data.data.phone,
                    email:response.data.data.email,     
                })
                console.log(response.data.data);
            }catch(err){
                console.log("Error while fetching the data",err);
            }
        }  
        fetchData();
    },[])
    return (
        <>
            <div className="otherDepartmentCard d-flex flex-column gap-3 p-3">
                <h1 className="Heading">{title}</h1>
                    <div className="btnGroupele pb-4 d-flex flex-column gap-3 px-2">
                        <button className="btnele w-100 d-flex flex-row justify-content-center align-items-center gap-2">
                            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4609 1.0835C14.545 1.426 16.9817 3.85933 17.3275 6.9435" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M11.4609 4.03613C12.9367 4.3228 14.09 5.47697 14.3775 6.9528" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69295 9.39382C12.0171 12.7171 12.7712 8.87243 14.8877 10.9875C16.9282 13.0275 18.1019 13.4362 15.5157 16.0208C15.1919 16.281 13.1344 19.412 5.90374 12.1832C-1.32782 4.9535 1.80133 2.89387 2.06164 2.57012C4.65316 -0.0216324 5.05571 1.15798 7.09618 3.19794C9.2118 5.31391 5.3688 6.07051 8.69295 9.39382Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="Text m-0">{data.phone}</p>
                        </button>
                        <button className="btnele w-100 d-flex flex-row justify-content-center align-items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.9188 7.37598L11.2161 10.3868C10.5165 10.9418 9.5322 10.9418 8.83262 10.3868L5.09863 7.37598" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0907 17.5C16.6251 17.507 18.3333 15.4246 18.3333 12.8653V7.14168C18.3333 4.58235 16.6251 2.5 14.0907 2.5H5.90924C3.37478 2.5 1.66663 4.58235 1.66663 7.14168V12.8653C1.66663 15.4246 3.37478 17.507 5.90924 17.5H14.0907Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="Text m-0">{data.email}</p>
                        </button>
                    </div>
                <button className="MassageBtn">Message</button>
            </div>
        </>
    );
}