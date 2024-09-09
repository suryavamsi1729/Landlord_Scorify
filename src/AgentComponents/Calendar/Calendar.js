import React,{useState,useContext,useEffect} from 'react';
import './Calendar.css';
import image from './Tap.svg';
import { MainContext } from '../../Context/MainContext';
const Calendar = () => { 
  const { DateCal} = useContext(MainContext);
  const [currentDate,setCurrentDate]=useState(DateCal);
  useEffect(()=>{
    setCurrentDate(DateCal);
  },[DateCal]);
  const events=({
    '2024-08-15': [{ title: 'tap liking in', type: 'pink' }],
    '2024-08-21':[{title:'tap linking in',type:'blue'}],
    '2024-07-22':[{title:'tap linking on',type:'pink'}],
    '2024-08-08':[{title:'tap linking in',type:'blue'}],
  });
 const Days=()=>{
     const daysofWeek=['MON','TUE','WEB','THU','FRI','SAT','SUN'];
     return(
        <div className="calendar-days-row">
            
            {daysofWeek.map((day,index)=>(
                <div className="calendar-day-name" >
                    {day}
                </div>
            ))}
        </div>
     )
 }

 const cells=()=>{
    const monthStart=new Date(currentDate.getFullYear(),currentDate.getMonth(),1);
    const startDate=monthStart.getDay()===0?-6:1-monthStart.getDay();
    let day=startDate;
    const rows=[];

    for(let i=0;i<42;i++){
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const formattedDate = date.getDate();
        const dateString = date.toISOString().split('T')[0];
        const isCurrentMonth = date.getMonth() === currentDate.getMonth();
  
        const dayClasses = `col cell ${!isCurrentMonth ? 'disabled' : ''}`;

        rows.push(
           <div className={dayClasses} key={i}>
               <span className="number">
                {formattedDate}
               </span>
               {events[dateString] && events[dateString].map((event,idx)=>(
                  <div key={idx} className={`event ${event.type}`}>
                    <img src={image}/>
                    {event.title}  
                </div> 
               ))}
           </div>
        );
        day++;
        
    }
    return(
      <div className="body">
        {rows}
      </div>
    )
 }

  return (
  <div className="CardsContainerele">
    <div className="HouseInfoCardContainer">
      {/* {Header()} */}
         {/* <Header /> */}
         {/* <Header currentDate={currentDate} prevMonth={prevmonth} nextMonth={nextmonth}/> */}
        {Days()}
      {cells()}
    </div>  
  </div>
  )
}

export default Calendar;