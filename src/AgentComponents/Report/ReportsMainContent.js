import {React,useContext} from "react";
import './Report.css';
import ReportCardContainer from "./ReportCardContainer";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context/MainContext";

export default function ReportMainContent(){
    const {dispatch} = useContext(MainContext);
    return(
        <>
            <div className="MainContentSectionReportAgent p-3">
                <div className="container-fluid">
                    <div className="row gy-3">
                        <div className="col-12">
                            <div className="TopSection d-flex flex-row gap-2">
                                <div className="SearchContainetr d-flex flex-row gap-2">
                                    <div className="Icon">
                                        <svg className="IconSvgSearch" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8.80547" cy="8.80541" r="7.49047" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M14.0153 14.4043L16.9519 17.3334" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='InputSearch'>
                                        <input className='InputSearchTag' type="text" placeholder='Search here...'/>
                                    </div>
                                </div>
                                <div className="ButtonGroupContainer d-flex flex-row justify-content-end align-items-center gap-2">
                                    <button className="SortBtn BtnEle d-flex flex-row align-items-center gap-2">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.0328 14.8032V3.45508" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M16.4308 11.3896L13.0327 14.8035L9.63452 11.3896" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M4.75911 1.19336V12.5415" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M1.36108 4.60725L4.75923 1.19336L8.15738 4.60725" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Short By
                                    </button>
                                    <button className="FilterBtn BtnEle d-flex flex-row align-items-center gap-2">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.60826 13.8279H3.35767" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M10.9504 5.75072H16.201" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.27183 5.70521C7.27183 4.6255 6.39002 3.75 5.30254 3.75C4.21505 3.75 3.33325 4.6255 3.33325 5.70521C3.33325 6.78492 4.21505 7.66042 5.30254 7.66042C6.39002 7.66042 7.27183 6.78492 7.27183 5.70521Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6666 13.7951C16.6666 12.7153 15.7855 11.8398 14.698 11.8398C13.6098 11.8398 12.728 12.7153 12.728 13.7951C12.728 14.8748 13.6098 15.7503 14.698 15.7503C15.7855 15.7503 16.6666 14.8748 16.6666 13.7951Z" stroke="#52525B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Filter
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-6 p-0 pe-2">
                            <Link to="epc"
                            onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"/reports",
                                        sidebar:false
                                    }
                                });
                            }} 
                            style={{textDecoration:'none'}}>
                            <ReportCardContainer title={'EPC'}>
                                <div  className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#3C4BEF'}} className="Dot"></div>
                                    <p className="Text m-0">{`A Rating : ${5}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#FCD34D'}} className="Dot"></div>
                                    <p className="Text m-0">{`B Rating : ${45}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#22C55E'}} className="Dot"></div>
                                    <p className="Text m-0">{`C Rating : ${100}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#EF4444'}} className="Dot"></div>
                                    <p className="Text m-0">{`D Rating : ${10}`}</p>
                                </div>
                            </ReportCardContainer>
                            </Link>
                        </div>
                        <div className="col-6 p-0 ps-2">
                            <Link to="tenantself-inspections"
                            onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"/reports",
                                        sidebar:false
                                    }
                                });
                            }} 
                            style={{textDecoration:'none'}}>
                            <ReportCardContainer title={'Tenant Self-inspections'}>
                                <div  className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#3C4BEF'}} className="Dot"></div>
                                    <p className="Text m-0">{`A Rating : ${5}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#FCD34D'}} className="Dot"></div>
                                    <p className="Text m-0">{`B Rating : ${45}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#22C55E'}} className="Dot"></div>
                                    <p className="Text m-0">{`C Rating : ${100}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#EF4444'}} className="Dot"></div>
                                    <p className="Text m-0">{`D Rating : ${10}`}</p>
                                </div>
                            </ReportCardContainer>
                            </Link>
                        </div>                        
                        <div className="col-6 p-0 pe-2">
                            <Link to="inventory"
                            onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"/reports",
                                        sidebar:false
                                    }
                                });
                            }} 
                            style={{textDecoration:'none'}}>
                            <ReportCardContainer title={'Inventory'}>
                                <div  className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#3C4BEF'}} className="Dot"></div>
                                    <p className="Text m-0">{`A Rating : ${5}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#FCD34D'}} className="Dot"></div>
                                    <p className="Text m-0">{`B Rating : ${45}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#22C55E'}} className="Dot"></div>
                                    <p className="Text m-0">{`C Rating : ${100}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#EF4444'}} className="Dot"></div>
                                    <p className="Text m-0">{`D Rating : ${10}`}</p>
                                </div>
                            </ReportCardContainer>
                            </Link>
                        </div>                
                        <div className="col-6 p-0 ps-2">
                            <Link to="check-out"
                            onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"/reports",
                                        sidebar:false
                                    }
                                });
                            }} 
                            style={{textDecoration:'none'}}>
                            <ReportCardContainer title={'Check-Out'}>
                                <div  className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#3C4BEF'}} className="Dot"></div>
                                    <p className="Text m-0">{`A Rating : ${5}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#FCD34D'}} className="Dot"></div>
                                    <p className="Text m-0">{`B Rating : ${45}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#22C55E'}} className="Dot"></div>
                                    <p className="Text m-0">{`C Rating : ${100}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#EF4444'}} className="Dot"></div>
                                    <p className="Text m-0">{`D Rating : ${10}`}</p>
                                </div>
                            </ReportCardContainer>
                            </Link>
                        </div>
                        <div className="col-6 p-0 pe-2">
                            <Link to="gassafetycertificate"
                            onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"/reports",
                                        sidebar:false
                                    }
                                });
                            }} 
                            style={{textDecoration:'none',width:'100%'}}>
                            <ReportCardContainer title={'Gas Safety Certificate'}>
                                <div  className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#3C4BEF'}} className="Dot"></div>
                                    <p className="Text m-0">{`A Rating : ${5}`}</p>
                                </div>
                                <div className="RatingContainerCol d-flex flex-row justify-content-center align-items-center gap-2">
                                    <div style={{backgroundColor:'#FCD34D'}} className="Dot"></div>
                                    <p className="Text m-0">{`B Rating : ${45}`}</p>
                                </div>
                            </ReportCardContainer>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}