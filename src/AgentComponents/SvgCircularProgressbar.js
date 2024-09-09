import React from "react";
import './SvgCircularProgressbar.css';
import GaugeComponent from 'react-gauge-component';
export default function SvgCircularProgressbar({percentage,text}){
    const start=-37.5;
    return(
      <>
          <div className="progressbarContainer">
          <GaugeComponent 
          value={90}
            type="radial"
            minValue= {0}
            style={{width:'100px',}}
            marginInPercent={{top: 0.05, bottom: 0, left: 0.05, right: 0.05}}
            arc={{
              colorArray: ['#5BE12C','#EA4228'],
              subArcs: [{limit: 20}, {}, {}, {}, {}],
              padding: 0.05,
              width: 0.2
            }}
            labels={{
              valueLabel:{
                hide:true
              },
              tickLabels: {
                type: "inner",
                hideMinMax: true,
              }
            }}
            pointer={
              {
                type: "arrow", elastic: true
              }
            }
          />
          </div>
      </>
    )
}