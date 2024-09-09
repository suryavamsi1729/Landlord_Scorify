import React from "react";
import './Applience.css';
export default function ApplienceComp({data}){
    return(
        <>
        <div className="ApplinceItmSection d-flex flex-row gap-4 p-3">
            <div className="textContainer d-flex flex-column gap-1">
                <h1 className="heading m-0">{data.title}</h1>
                <p className="text m-0">{data.text}</p>
                <p className="text m-0">Serial No. {data.sno}</p>
                <p className="text m-0">Condition : <span>{data.con}</span></p>
            </div>
            <div className="ImgContainer">
                <img className="AplicationImg" alt="appImg" src={'/imgApplience.jpg'}/>
            </div>
        </div>
        </>
    )
}