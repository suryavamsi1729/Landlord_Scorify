import React,{useState,useEffect} from "react";
import axios from "axios";
import './AgentsProfile.css';
import APSOtherDepartmentCard from "./APSOtherDepartmentCard";
import api from "../api";

export default function AgentsProfileSection(){
    const [data,setData]=useState({
        // Img:"/Avatar.jpg",
        // name:"Dexters Agency",
        // phone:"020 8810 1919",
        // email:"info@dexters.com",
        // website:"WWW.dexters.com",
        // location:"2, New Ealing Broadway, London W5 2NU",

    })
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await api.get("landlord/agent/");
                setData({
                    Img:response.data.data.profile_photo,
                    name:response.data.data.name,
                    phone:response.data.data.phone,
                    email:response.data.data.email,
                    website:response.data.data.website,
                    location:response.data.data.location,
                    
                })
                console.log(response.data.data);
            }catch(err){
                console.log("Error while fetching the data",err);
            }
        }  
        fetchData();
    },[])
    return(
        <>
            <div className="AgentsProfileSection py-3">
                <div className="container-fluid p-0">
                    <div className="row m-0 mb-3">
                        <div className="col-5 pe-2">
                            <div className="APSCard d-flex flex-column gap-3">
                                <div className="APCoverContainerTop">
                                    <div className="APCoverContainer" style={{backgroundImage:'url("/CovewrphotoAG.jpg")'}}>
                                        <div className="Avatar">
                                            <img className="AvTImg" src={data.Img} alt="img"/>
                                        </div>
                                    </div>
                                </div>
                                <h1 className="Heading m-0">{data.name}</h1>
                                <div className="btnGroupele d-flex flex-row gap-2 px-3">
                                    <button className="btnele d-flex flex-row justify-content-center align-items-center gap-2">
                                        <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4609 1.0835C14.545 1.426 16.9817 3.85933 17.3275 6.9435" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M11.4609 4.03613C12.9367 4.3228 14.09 5.47697 14.3775 6.9528" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.69295 9.39382C12.0171 12.7171 12.7712 8.87243 14.8877 10.9875C16.9282 13.0275 18.1019 13.4362 15.5157 16.0208C15.1919 16.281 13.1344 19.412 5.90374 12.1832C-1.32782 4.9535 1.80133 2.89387 2.06164 2.57012C4.65316 -0.0216324 5.05571 1.15798 7.09618 3.19794C9.2118 5.31391 5.3688 6.07051 8.69295 9.39382Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p className="Text m-0">{data.phone}</p>
                                    </button>
                                    <button className="btnele d-flex flex-row justify-content-center align-items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.9188 7.37598L11.2161 10.3868C10.5165 10.9418 9.5322 10.9418 8.83262 10.3868L5.09863 7.37598" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0907 17.5C16.6251 17.507 18.3333 15.4246 18.3333 12.8653V7.14168C18.3333 4.58235 16.6251 2.5 14.0907 2.5H5.90924C3.37478 2.5 1.66663 4.58235 1.66663 7.14168V12.8653C1.66663 15.4246 3.37478 17.507 5.90924 17.5H14.0907Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p className="Text m-0">{data.email}</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 ps-2">
                            <div className="CompanyDetailsCard d-flex flex-column gap-3 p-3">
                                <h1 className="Heading">Company Details</h1>
                                <div className="CDCInfo d-flex flex-column gap-3">
                                    <div className="top d-flex flex-row gap-3">
                                        <button className="btnele d-flex flex-column align-items-center gap-2">
                                        <svg className="Icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p className="text m-0">{data.website}</p>
                                        </button>
                                        <button className="btnele d-flex flex-column align-items-center gap-2">
                                        <svg className="Icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.79489 7.05613C4.79489 5.80713 5.80689 4.79513 7.05589 4.79413H8.08489C8.68189 4.79413 9.25389 4.55713 9.67789 4.13713L10.3969 3.41713C11.2779 2.53113 12.7099 2.52713 13.5959 3.40813L13.5969 3.40913L13.6059 3.41713L14.3259 4.13713C14.7499 4.55813 15.3219 4.79413 15.9189 4.79413H16.9469C18.1959 4.79413 19.2089 5.80613 19.2089 7.05613V8.08313C19.2089 8.68013 19.4449 9.25313 19.8659 9.67713L20.5859 10.3971C21.4719 11.2781 21.4769 12.7101 20.5959 13.5961L20.5949 13.5971L20.5859 13.6061L19.8659 14.3261C19.4449 14.7491 19.2089 15.3211 19.2089 15.9181V16.9471C19.2089 18.1961 18.1969 19.2081 16.9479 19.2081H16.9469H15.9169C15.3199 19.2081 14.7469 19.4451 14.3239 19.8661L13.6039 20.5851C12.7239 21.4711 11.2929 21.4761 10.4069 20.5971C10.4059 20.5961 10.4049 20.5951 10.4039 20.5941L10.3949 20.5851L9.67589 19.8661C9.25289 19.4451 8.67989 19.2091 8.08289 19.2081H7.05589C5.80689 19.2081 4.79489 18.1961 4.79489 16.9471V15.9161C4.79489 15.3191 4.55789 14.7471 4.13689 14.3241L3.41789 13.6041C2.53189 12.7241 2.52689 11.2931 3.40689 10.4071C3.40689 10.4061 3.40789 10.4051 3.40889 10.4041L3.41789 10.3951L4.13689 9.67513C4.55789 9.25113 4.79489 8.67913 4.79489 8.08113V7.05613" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.43164 14.5716L14.5716 9.43164" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M14.4955 14.5H14.5045" stroke="#21296D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M9.4955 9.5H9.5045" stroke="#21296D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                            <p className="text m-0">Lettings / Sales</p>
                                        </button>
                                    </div>
                                    <div className="top d-flex flex-row gap-3">
                                        <button className="btnele d-flex flex-column align-items-center gap-2">
                                        <svg className="Icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <p className="text m-0">Location:{data.location}</p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-0">
                        <div className="col-4">
                            <APSOtherDepartmentCard title={'Lettings'}/>
                        </div>
                        <div className="col-4">
                            <APSOtherDepartmentCard title={'Repairs & Management'}/>
                        </div>
                        <div className="col-4">
                            <APSOtherDepartmentCard title={'Sales'}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}