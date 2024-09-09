import {React,useState,useEffect} from "react";
import './MDBContentCompStyle.css';
import api from "../../api";


export default function CurrentScoreCard(){
    const [date,setDate]= useState('30th Aug');
    const [rangle,setRAngle]= useState(0);
    const [score,SetScore]=useState();
    useEffect(()=>{
        const fetchData=async()=>{
         
        const response = await api.get('landlord/dashboard/');
        const dateStr = response.data.properties[0].property[0].next_inspection_date;
        const dateObj = new Date(dateStr);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const suffixes = ["th", "st", "nd", "rd"];
        const day = dateObj.getDate();
        const daySuffix = (day % 10 <= 3 && ![11, 12, 13].includes(day)) ? suffixes[day % 10] : suffixes[0];
        const month = months[dateObj.getMonth()];
        const formattedDate = `${day}${daySuffix} ${month}`;
        setDate(formattedDate);
        SetScore(Math.round(response.data.properties[0].property[0].score));
    //  setDetails({
    //     date:formattedDate,
    //     score:"800"
    //     // score:response.data.properties[0].property[0].score,
    //  })
        }
        fetchData();      
     },[])
     useEffect(()=>{
        const per = (score/1000)*100;
        const angel= (per/100)*180;
        setRAngle(angel);
     });
    return(
        <>
            <div className="CurrentScoreCardContainer">
                <h1 className="HeadingCurrentScore">Current Score</h1>
                <div className="HalfPieChartContainer">
                    <div className="ScaleContainer">
                        <p className="ScaleText id-1">Very poor</p>
                        <p className="ScaleText id-2">Poor</p>
                        <p className="ScaleText id-3">Fair</p>
                        <p className="ScaleText id-4">Good</p>
                        <p className="ScaleText id-5">Excellent</p>
                    </div>
                    {/* <button className="LastScoreBtn">{"Last Score: 864"}</button> */}
                    <div className="CurrentScoreInfoContainer">
                        <h1 className="CurrentScoreVal">{score}</h1>
                        <p className="MaxScoreVal">Out of 1000</p>
                    </div>
                    <div className="GraphContainer">
                        <div className="vectorsContainer">
                            <div className="rod"></div>
                            <div className="rod"></div>
                            <div className="rod"></div>
                            <div className="rod"></div>
                        </div>
                    </div>
                    <div className="IndicatorContainer">
                        <div className="IndicatorPointerContainer" style={{transform:`rotate(${rangle}deg)`}}>
                            <div className="IndicatorPointer">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="NextInspectiondate">Next Inspection due on {date}</div>
            </div>
        </>
    );
}