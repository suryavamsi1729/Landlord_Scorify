import React, { useRef, useState,useEffect} from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import api from '../../api'

export default function LoginScreen({ setpageRender }) {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [toggleIcon, setToggleIcon] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const HideShowPwd = () => {
        setToggleIcon(!toggleIcon);
        if (toggleIcon) {
            passwordRef.current.type = "password";
        } else {
            passwordRef.current.type = "text";
        }
    };

    useEffect(()=>{
         const token=localStorage.getItem('access_token');
         if(token){
            navigate('/dashboard');
         }
    },[navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('accounts/login/', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });

            if (response.status === 200){
                const { refresh,access}=response.data.token;
                localStorage.setItem('access_token', access);
                localStorage.setItem('refresh_token',refresh);
                navigate('/dashboard');
            }
        } catch (error) {
            setErrorMessage('Enter correct email or password');
        }
    };

    return (
        <>
            <div className="Heading">
                <h1 className="HeadingText m-0">Login</h1>
                <p className="loginHeadingText m-0">
                    Please fill the below details to enter into the platform.
                </p>
            </div>
            <div className="FormConatiner d-flex flex-column align-items-center">
                <form className="FormEleContainer d-flex flex-column gap-2" onSubmit={handleSubmit}>
                    {errorMessage && (
                        <p className="error-message" style={{ color: 'red' }}>
                            {errorMessage}
                        </p>
                    )}
                    <div className="inputEle d-flex flex-column gap-1">
                        <label className="userName">UserName</label>
                        <input
                            className="UserNameinput"
                            ref={emailRef}
                            placeholder='Enter UserName'
                            required
                            type="text"
                        />
                    </div>
                    <div className="inputEle d-flex flex-column gap-1 mb-3">
                        <label className="userName">Password</label>
                        <div className="PasswordInput d-flex flex-row">
                            <input
                                className="pswEle"
                                ref={passwordRef}
                                placeholder='Enter Password'
                                required
                                type="password"
                            />
                            <div className="ShowandHideIconPswd d-flex flex-column justify-content-center align-items-center">
                                {
                                    toggleIcon ?
                                    <svg onClick={HideShowPwd} width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13.1615 8.05311C13.1615 9.79911 11.7455 11.2141 9.9995 11.2141C8.2535 11.2141 6.8385 9.79911 6.8385 8.05311C6.8385 6.30611 8.2535 4.89111 9.9995 4.89111C11.7455 4.89111 13.1615 6.30611 13.1615 8.05311Z" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M9.998 15.3549C13.806 15.3549 17.289 12.6169 19.25 8.05285C17.289 3.48885 13.806 0.750854 9.998 0.750854H10.002C6.194 0.750854 2.711 3.48885 0.75 8.05285C2.711 12.6169 6.194 15.3549 10.002 15.3549H9.998Z" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    :
                                    <svg onClick={HideShowPwd} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.76069 11.3668C7.18569 10.7928 6.83569 10.0128 6.83569 9.1378C6.83569 7.3848 8.24769 5.9718 9.99969 5.9718C10.8667 5.9718 11.6647 6.3228 12.2297 6.8968" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M13.1049 9.69897C12.8729 10.989 11.8569 12.007 10.5679 12.241" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M4.65463 14.4724C3.06763 13.2264 1.72363 11.4064 0.749634 9.13735C1.73363 6.85835 3.08663 5.02835 4.68363 3.77235C6.27063 2.51635 8.10163 1.83435 9.99963 1.83435C11.9086 1.83435 13.7386 2.52635 15.3356 3.79135" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.4477 5.99084C18.1357 6.90484 18.7407 7.95984 19.2497 9.13684C17.2827 13.6938 13.8067 16.4388 9.99965 16.4388C9.13665 16.4388 8.28565 16.2988 7.46765 16.0258" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.887 1.24963L2.11304 17.0236" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                }
                            </div>
                        </div>
                        <p className="LinkText">
                            <span onClick={() => navigate('/forgotpassword')} style={{ cursor: 'pointer' }}>Forgot Password?</span>
                        </p>
                    </div>
                    <button className="submitButton">Login</button>
                </form>
            </div>
            <p className="Signupoption">
                Don’t have an account? <span className="textlink" onClick={() => navigate('/signup')} style={{ cursor: 'pointer' }}>Signup</span>
            </p>
        </>
    );
}
