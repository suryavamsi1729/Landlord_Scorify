import { useState } from 'react';
import React from "react";
import './Login.css';
export default function PasswordSetSuccessful({setoptionPages}){
    return(
        <>
            <div className='PasswordSetcontainer d-flex flex-column align-itmes-center'>
                <div className='IconContainer d-flex flex-column align-items-center'>
                    <img className='BrandImg' src={'/BrandLogo.jpg'} alt={'Brand Logo'}/>
                </div>
                <div className='InputFieldsButtons d-flex flex-column align-items-center justify-content-between'>
                    <div className='SuccessEle d-flex flex-column justify-content-center align-items-center'>
                        <svg width="72" height="57" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 34L22.25 50.25L66 6.5" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <div className='TextContainer d-flex flex-column gap-3'>
                        <h1 className='HeadingText text-center m-0'>The password has been successfully set.</h1>
                        <p className='SubHeadingText text-center m-0'>You will be redirected to the login page.</p>
                    </div>
                    <button className='BackToLoginBtn' onClick={()=>{setoptionPages('login')}}>Back to Login</button>
                    
                </div>
                <div className="w-100 d-flex flex-row justify-content-between">
                    <p className="Text-ele text-start m-0">EcoMobile d.o.c.</p>
                    <p className="Text-ele text-end m-0">+385-1-555-66-36</p>
                </div>
            </div>
        </>
    )
}