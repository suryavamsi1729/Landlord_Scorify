import React from "react";
import './MDBContentCompStyle.css';
export default function HeaderSection(){
    return(
        <>
             <div className='SectionMainHeader'>
                <div className="Container-fluid">
                    <div className="row m-0">
                        <div className="col-12 p-0 d-flex flex-row justify-content-between">
                            <div className="InputField">
                                <div className='Heading'></div>
                                <div className='InputBox'>
                                    <div className='Icon'>
                                    <svg className="IconSvgSearch" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8.80547" cy="8.80541" r="7.49047" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14.0153 14.4043L16.9519 17.3334" stroke="#71717A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </div>
                                    <div className='InputSearch'>
                                        <input className='InputSearchTag' type="text" placeholder='Search here...'/>
                                    </div>
                                </div>
                                <div className='HelpingErrorMessageCounter'>
                                    {/* <h1 className="HelpingErrorMessage"></h1>
                                    <h1 className="Counter"></h1> */}
                                </div>
                            </div>
                            {/* <div className="ButtonGroup">
                                <div className="Button">
                                    <div className="Icon">
                                    <svg className="Iconsvg" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.8928 15.8916C13.346 18.4387 9.5748 18.989 6.48867 17.5618C6.03308 17.3783 5.65956 17.2301 5.30447 17.2301C4.3154 17.2359 3.08429 18.195 2.44446 17.5559C1.80462 16.916 2.76438 15.6839 2.76438 14.6889C2.76438 14.3337 2.622 13.9669 2.43859 13.5104C1.01068 10.4248 1.56175 6.65232 4.10854 4.10609C7.35965 0.853775 12.6417 0.853775 15.8928 4.10525C19.1498 7.36259 19.1439 12.6402 15.8928 15.8916Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13.2828 10.3442H13.2903" stroke="#21296D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.942 10.3442H9.9495" stroke="#21296D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.60115 10.3442H6.60865" stroke="#21296D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </div>
                                </div>
                                <div className="Button">
                                    <div className="Icon">
                                    <svg className="Iconsvg" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.99999 14.8731C12.6993 14.8731 14.8734 14.2703 15.0833 11.8505C15.0833 9.43241 13.5676 9.58791 13.5676 6.62101C13.5676 4.30353 11.371 1.66675 7.99999 1.66675C4.62897 1.66675 2.43236 4.30353 2.43236 6.62101C2.43236 9.58791 0.916656 9.43241 0.916656 11.8505C1.12745 14.2794 3.30147 14.8731 7.99999 14.8731Z" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.99064 17.3811C8.85386 18.6434 7.08052 18.6583 5.93286 17.3811" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    </div>
                                </div>
                                <div className="Button backgroundAvatar">
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}