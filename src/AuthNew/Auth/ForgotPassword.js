import React,{useEffect} from "react";
import './Login.css';
import { useState,useRef } from 'react';
import {useNavigate} from "react-router-dom";
import api from "../../api";
export default function ForgotPassword({setpageRender}){
    const [getEmail,setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success,setSucess]=useState('');
    const navigate=useNavigate();
    useEffect(()=>{
      
    },[]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('accounts/forgot-password/', {
                email: getEmail,
            });
            console.log(response.data.message);
            if (response.status === 200){
                    setSucess('Link sent successfully to your email');
            }
            else if(response.status===404){
                   setErrorMessage("Email not found");
            }
        } catch (error) {
            setErrorMessage("Enter correct email");
        }
    };
    return(
        <>
             <div style={{cursor:'pointer'}} className='navigatebefor d-flex flex-column justify-content-center align-items-center' onClick={()=>navigate('/login')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.25 12.2743L19.25 12.2743" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="FormConatiner d-flex flex-column align-items-center">
                <div className="Heading">
                    <h1 className="HeadingText m-0">Forgot Password</h1>
                    <p className="loginHeadingText m-0">
                        No worries, we'll sent you reset instructions.
                    </p>
                </div>
                <form className="FormEleContainer d-flex flex-column gap-3" onSubmit={handleSubmit}>
                {errorMessage && (
                        <p className="error-message" style={{ color: 'red' }}>
                            {errorMessage}
                        </p>
                    )}
                    {success && (
                        <p className="error-message" style={{ color: 'green' }}>
                            {success}
                        </p>
                    )}
                    <div className="inputEle d-flex flex-column gap-3">
                        <label className="userName">Email Address</label>
                        <input className="UserNameinput" onChange={(ev) => setEmail(ev.target.value)} placeholder='Enter Email Address' required type="email"/>
                    </div>
                    <button className="submitButton">Send Email</button>
                </form>
            </div>
            <div className="w-100 d-flex flex-row justify-content-between">
                    <p className="Text-ele text-start m-0">EcoMobile d.o.c.</p>
                    <p className="Text-ele text-end m-0">+385-1-555-66-36</p>
            </div>
        </>
    );
}