import {React,useContext} from "react";
import'./Applience.css';
import ApplienceComp from "./ApplienceComp";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import './Construction.css';

export default function ApplienceSection(){
    const {dispatch} = useContext(MainContext);
    return(
        <>
            <div className="under-construction-container">
            <h1 className="title">We are building something great</h1>
            <p className="message">Hold for Next update.Catch you soon!</p>
            <div className="construction-icon">🎉</div>
        </div>
            {/* <div className="ApplienceSection">
                <div className="container-fluid">
                    <div className="row m-0 gy-4">
                        <div className="col-6">
                        <Link  to="/dashboard/applience/oven" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Oven",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(100%)'}}>
                            <ApplienceComp data={{
                                title:"Oven",
                                text: "Westinghouse WVE613S",
                                sno: "103TRBS42333",
                                con:"Good"
                            }}/>
                        </Link>
                        </div>
                        <div className="col-6">
                        <Link  to="/dashboard/applience/washingmachine" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Oven",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(100%)'}}>
                            <ApplienceComp data={{
                                title:"Washing machine",
                                text: "Westinghouse WVE613S",
                                sno: "103TRBS42333",
                                con:"Good"
                            }}/>
                        </Link>
                        </div>
                        <div className="col-6">
                        <Link  to="/dashboard/applience/oven" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Oven",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(100%)'}}>
                            <ApplienceComp data={{
                                title:"Oven",
                                text: "Westinghouse WVE613S",
                                sno: "103TRBS42333",
                                con:"Good"
                            }}/>
                        </Link>
                        </div>
                        <div className="col-6">
                        <Link  to="/dashboard/applience/oven" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Oven",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(100%)'}}>
                            <ApplienceComp data={{
                                title:"Oven",
                                text: "Westinghouse WVE613S",
                                sno: "103TRBS42333",
                                con:"Good"
                            }}/>
                        </Link>
                        </div>
                        <div className="col-6">
                        <Link  to="/dashboard/applience/oven" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Oven",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(100%)'}}>
                            <ApplienceComp data={{
                                title:"Oven",
                                text: "Westinghouse WVE613S",
                                sno: "103TRBS42333",
                                con:"Good"
                            }}/>
                        </Link>
                        </div>
                        <div className="col-6">
                        <Link  to="/dashboard/applience/oven" onClick={()=>{
                                dispatch({
                                    type:"path",
                                    payload:{
                                        path:"Oven",
                                        sidebar:false
                                    }
                                });
                            }} style={{textDecoration:'none',padding:'0px',width:'calc(100%)'}}>
                            <ApplienceComp data={{
                                title:"Oven",
                                text: "Westinghouse WVE613S",
                                sno: "103TRBS42333",
                                con:"Good"
                            }}/>
                        </Link>
                        </div>
                        
                    </div>
                </div>
                
            </div> */}
        </>
    )
}