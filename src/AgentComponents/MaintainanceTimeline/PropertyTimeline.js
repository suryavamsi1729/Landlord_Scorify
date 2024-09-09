import React,{useEffect,useState} from 'react';
import './MaintainanceTimeline.css';
import img from './Avatar.png';
import markIcon from './Mark.png'; 
import api from '../../api';

const PropertyTimeline = ({ timelineEvents,className}) =>{
  function formatDateToCustom(dateString){
    const date = new Date(dateString);
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();
    return `${day} ${month},${year}`;
}

  const satus = ['c','c','c','c','c','c','c']
  return (
    <div className={`timeline-container PropertyTimeLineContainer ${className} mb-2`}>
      {timelineEvents.map((event, index) =>(
        <div key={index} className="timeline-item d-flex flex-row align-items-center" style={{zIndex:1000-index}}>
            <div className="timeline-date">{formatDateToCustom(event.created_at)}</div>
            <div className='ImgContainer d-flex flex-column justify-content-center align-items-center' style={{position:'relative',backgroundColor:satus[index]=='c'?'#F0FDF4':'#FAFAFA',borderColor:satus[index]=='c'?'#22C55E':'#D4D4D8'}}>
              <div className='TimeLine' style={{borderStyle:satus[index]=='c'?'solid':'dashed',borderColor:satus[index]=='c'?'#22C55E':'#D4D4D8'}}></div>
              {
                satus[index]=='c'?
                <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.861816 4.31195L3.82932 7.2782L9.76182 1.3457" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                :
                null
              }
            </div>
            <div className="timeline-content">
              <div className="timeline-text">{event.description}</div>
              <div className="timeline-person">
                <img src={img} alt={event.profile_photo}/>
                {/* event.personrole */}
                <div className={`timeline-role ${"agent"}`}>{"Agent"}</div>
              </div>
            </div>
            
        </div>
      ))}
      
    </div>
  );
};

export default PropertyTimeline;
