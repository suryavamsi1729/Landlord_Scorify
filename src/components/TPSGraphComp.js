import React,{useState,useEffect} from "react";
import "./TenantProfileSectionStyle.css";
import { Line } from "react-chartjs-2";
import { Chart, elements } from "chart.js/auto";
import axios from "axios";

export default function TPSGraphComp(){
    const [details,setDetails]=useState([77,86,67,49,90,83,55,76,69,71,83,84,10,100]);
    useEffect(()=>{
       const fetchData=async()=>{
          try{
            const response=await axios.get("http://127.0.0.1:8000/landlords/epc/reports/84958037-b6a3-4ee6-b481-83bc5256a5ad");
            const epcScores = response.data.map(report => report.epc_score);
            
            setDetails(epcScores);
          }catch(err){
             console.log("Error while fetching data",err);
          }
       }  
       fetchData();
    },[])    
    Chart.register({
        id: 'verticalLinePlugin',
        beforeDraw: (chart) => {
          if (chart.tooltip._active && chart.tooltip._active.length) {
            const activePoint = chart.tooltip._active[0];
            const ctx = chart.ctx;
            const x = activePoint.element.x;
            const topY = chart.scales.y.top;
            const bottomY = chart.scales.y.bottom;
      
            ctx.save();
            ctx.beginPath();
            ctx.setLineDash([3,3]); 
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#D4D4D8';
            ctx.stroke();
            ctx.restore();
          }
        }
      });
    const labels = ['Jan','Feb','Mar',"Apr",'May','Jun','JUl','Agu','Sep','Oct','Nov','Dec']
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove','mouseover'],
        plugins: {
            legend:{
                display: false
            },
            tooltip:{
                events: ['click'],
                enabled: true,
                position: 'nearest',
                
            }
        },
        elements:{
            point:{
                borderWidth: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#9FBEFF",
                radius: 4.5,
                hoverRadius: 9,
                hoverBorderWidth: 6,
            },
            line:{
                borderColor: "#5A74FA",
                borderWidth: 2,
            }
        },
        scales: {
            x:{
                grid:{
                    display: false,
                },
                ticks:{
                    padding: 5,
                    color: "#09090B",
                    font:{
                        size: 14,
                        family: 'Urbanist',
                        weight: 600,
                    }
                }
            },
            y:{
                min: 0,
                max: 100,
                ticks: {
                    padding: 10,
                    color: "#09090B",
                    font:{
                        size: 14,
                        family: 'Urbanist',
                        weight: 600,
                    }
                },
                grid:{
                    color: '#D4D4D8',
                    drawTicks: true,
                },
                border: {
                    dash: function(context) {
                        if (context.tick.value == 0) {
                        return null;
                        }
                        return [2,3];
                    },
                },
            }
        }
    }
    const data = {
        labels,
        datasets: [
            {
                label: "Poor Ventilation",
                data: details,
            },
        ]
    }
    return(
        <>
        <div className="LineGraphSection">
            <Line options={options} data={data}/>
        </div>
            
        </>
    );
}