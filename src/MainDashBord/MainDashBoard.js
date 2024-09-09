import {React,useState,useEffect} from "react";
import './MainDashBordStyle.css';
import MDBContentComp from "./MainDashBordBodyContent/MDBContentComp";
import SideBarComp from "./NavBar/SideBarComp";
import { Outlet } from "react-router-dom";
import { MianProvider } from "../Context/MainContext";

export default function  MainDashBordComp({children}){
    const [toggleIcon,setToggleIcon] = useState(''); 
    const excellent = 20;
    const good = 16;
    const fair = 4;
    const maxScore = 1000;
    useEffect(() => {
        localStorage.setItem('toggleIcon', JSON.stringify(toggleIcon));
    }, [toggleIcon]);
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('toggleIcon'));
        if (items) {
            setToggleIcon(items);
        }
      }, []);
    return(
        <>
        <MianProvider>
            <div className="MainDashBordContainer">
                <div className="MDBCWrapper">
                    <SideBarComp/>
                    <MDBContentComp>{
                        children}
                        <Outlet/>
                    </MDBContentComp>
                </div>
            </div>
        </MianProvider>
        </>
    );
}