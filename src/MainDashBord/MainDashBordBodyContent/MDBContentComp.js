import {React,useContext} from "react";
import './MDBContentCompStyle.css';
import HeaderSection from "./HeaderSection";
import SubHeaderSection from "./SubHeaderSection";
import { MainContext } from "../../Context/MainContext";
// import { Outlet } from "react-router-dom";
export default function MDBContentComp(props){
    const data = useContext(MainContext);
    return(
        <>
            <div className={data.sidebar? "MDBContentContainer" : "MDBContentContainerSmall"}>
                <HeaderSection></HeaderSection>
                <SubHeaderSection path={props.path}></SubHeaderSection>
                {props.children}
            </div>
        </>
    );
}