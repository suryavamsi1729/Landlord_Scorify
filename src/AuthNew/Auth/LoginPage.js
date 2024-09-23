import { useState } from 'react';
import React from "react";
import './Login.css';
import LoginScreen from './LoginScreen';
export default function LoginPage({updateSate}){
    const [pageRender,setpageRender] = useState('login');
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