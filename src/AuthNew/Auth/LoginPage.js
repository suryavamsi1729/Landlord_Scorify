import { useState } from 'react';
import React from "react";
import './Login.css';
import LoginScreen from './LoginScreen';
import ForgotPassword from './ForgotPassword';
import SetPassword from './SetPassword';
import Signup from './Signup';
export default function LoginPage({updateSate}){
    const [getUserName,setUserName] = useState('');
    const [getPassword,setPassword] = useState('');
    const [pageRender,setpageRender] = useState('login');
    const [getEmail,setEmail] = useState('');
 
    return(
        <div className="MaintaontainerLogin">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-4 p-0">
                        <div className="loginimgcontainer">
                            <img className="loginimg w-100 h-100" src={'/login.jpg'} alt="loginimg" loading="lazy"/>
                        </div>
                    </div>
                    <div className="col-8 p-0">
                        <div className="loginformcontainer d-flex flex-column justify-content-between">
                            {
                         <LoginScreen setpageRender={setpageRender}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}