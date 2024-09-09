import React,{useEffect,useState} from "react";
import './MouldandHumidityStyle.css'
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import api from "../api";

export default function SMHGraphComp(){
    const [details,SetDetails]=useState([1,2,3,0,9,10,0,11]);
    useEffect(()=>{
        const fetchData=async()=>{
            try{
            const response = await api.get('landlord/mould/');

              let k=response.data.mould[0].mould_presence_90_days;
              let fd=Object.values(k).map(val=>parseInt(val));
             
              SetDetails(fd);
            }catch(error){
              console.log("Error while fetching data",error);
            }
        }
        fetchData();
    })
    const options = {
        responsive: true,
        elements: {
            point: {
                pointStyle: false
            }
        },
        plugins: {
            legend:{
                display: false
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
                        size: 14
                    }
                }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                  padding: 10,
                  color: "#09090B",
                  font:{
                      size: 14
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
    const labels = [1,5,9,13,17,21,25,29,33,37,41,45,49,53,57,61,65,69,73,77,81,85,89]
    const linefun = (m,c)=>{
        let arrayele=[]
        labels.forEach((itm)=>{
            let a= (m*itm)+c;
            arrayele.push(a)
        });
        return arrayele;
    }
    const data = {
        labels,
        datasets: [
            // {
            //     label: "Poor Ventilation",
            //     data:"fhf",
            //     backgroundColor: "#5A74FA",
            //     borderColor: "#5A74FA",
            // },
            {
                label: "Moderate Ventilation",
                data: details,
                backgroundColor: "#FF8AED",
                borderColor: "#FF8AED",
            }
            // {
            //     label: "Good Ventilation",
            //     data: linefun(-0.1,20),
            //     backgroundColor: "#50E0FF",
            //     borderColor: "#50E0FF",
            // }
        ]
    }
    return(
        <>
            <div className="SMHGraphContainer d-flex flex-column  gap-4 p-3">
                <h1 className="Heading m-0">Module Presence Over 90 Days with diffrent ventilation</h1>
                <Line options={options} data={data}/>
                <div className="legendContiner d-flex flex-row justify-content-center gap-2">
                    <div className="lablecontainer d-flex flex-row align-items-center gap-1">
                        <div className="Ylable d-flex flex-row justify-content-center align-items-center">Y</div>
                        <p className="YlableText m-0">Module Presence (%) by</p>
                    </div>
                    <div className="lablecontainer d-flex flex-row align-items-center gap-1">
                        <div className="Ylable d-flex flex-row justify-content-center align-items-center">X</div>
                        <p className="YlableText m-0">Days for</p>
                    </div>
                    <div className="lablecontainer d-flex flex-row align-items-center gap-1">
                        <div className="Ylable lable-color-1"></div>
                        <p className="YlableText m-0">Poor Ventilation</p>
                    </div>
                    <div className="lablecontainer d-flex flex-row align-items-center gap-1">
                        <div className="Ylable lable-color-2"></div>
                        <p className="YlableText m-0">Moderate Ventilation, and</p>
                    </div>
                    <div className="lablecontainer d-flex flex-row align-items-center gap-1">
                        <div className="Ylable lable-color-3"></div>
                        <p className="YlableText m-0">Good Ventilation</p>
                    </div>
                </div>
            </div>
        </>
    );
}