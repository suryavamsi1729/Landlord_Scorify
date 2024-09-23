import React,{useEffect} from "react";
import './Login.css';
import { useState,useRef } from 'react';
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import Spinner from "../../components/Spinner/Spinner";
import {useNavigate} from "react-router-dom";
import api from "../../api";
export default function ForgotPassword({setpageRender}){
    const [getEmail,setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success,setSucess]=useState('');
    const navigate=useNavigate();   
    const [loading, setLoading] = useState(false);
    const {dispatch} = useContext(MainContext);
    const handleSubmit = async (e) =>{
        setLoading(true);
        setErrorMessage('');
        setSucess('');
        e.preventDefault();
        dispatch({
            type:"emailset",
            payload:{
                email:getEmail
            },
        });
        try {
            const response = await api.post('accounts/forgot-password/', {
                email: getEmail,
            });
            
            if (response.status ===200){
                    setLoading(false);
                    setSucess('Link sent successfully to your email');
                    navigate('/setpassword');
            }
            
        }catch(error){
            setLoading(false);
            if (error.response && error.response.status === 404) {
                setErrorMessage("Email not found");
            } else {
                setErrorMessage("Enter correct email");
            }
        }finally{
            setLoading(false);
           
        }
    };
    return(
        <>
            {loading && <Spinner/>}
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
              
                    <div className="inputEle d-flex flex-column gap-3">
                        <label className="userName">Email Address</label>
                        <input className="UserNameinput" onChange={(ev) => setEmail(ev.target.value)} placeholder='Enter Email Address' required type="email"/>
                    </div>
                    <button className="submitButton">Send Email</button>
                </form>
                {(errorMessage || success)&&(
                            <p
                    className="message"
                    style={{
                        color: errorMessage ? 'red' : 'green',
                        fontSize: '18px',
                        fontWeight: 'bold',
                    }}
                >
                    {errorMessage || success}
                </p>)}
            </div>
            <div className="w-100 d-flex flex-row justify-content-between">
                    <p className="Text-ele text-start m-0"></p>
                    <p className="Text-ele text-end m-0"></p>
            </div>
        </>
    );
}