import React from "react";
import "./Calendar.css";

const Header=({currentDate,prevMonth,nextMonth})=>{
    const monthYear=currentDate.toLocaleDateString('en-US',{month:'long',year:'numeric'});
    return(
       <div className="calendar-header">
         <button onClick={prevMonth}>&lt;</button>
         <h1>{monthYear}</h1>
         <button onClick={nextMonth}>&gt;</button>
       </div>
    )
 }

export default Header;
 