import {React,useState} from "react";
import './Login.css';
import LoginPage from "./LoginPage";
import PasswordSetSuccessful from "./PasswordSetSuccessful";
export default function Authentication(){
    const [optionPages,setoptionPages]=useState('login');
    const updateSate = (val)=>{
        setoptionPages(val);
    }
    const mainpagesRender = ()=>{
        switch (optionPages) {
            case 'login':
                return(
                    <LoginPage updateSate={updateSate}/>
                );
                
                break;
            case 'success':
                return(
                    <PasswordSetSuccessful setoptionPages={setoptionPages}/>
                );
                
                break;
            default:
                break;
        }
    }
    return(
        <>
            <div className="w-100 h-100">
                {
                    mainpagesRender()
                }
            </div>
        </>
    );
}