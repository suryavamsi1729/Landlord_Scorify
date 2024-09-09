import {React,useEffect,useState} from "react";
import GaugeComponent from 'react-gauge-component'
import './GaugeChart.css'; // Import custom CSS file

export default function  RadialGaugeComp ({value,title}) {
  const [rotate,setRotate]= useState(-130);
  // const percent = (value/1000)*100;
  // const angel = ((percent/100)*260) - 130;
  // const angelStart= -130;
  // const angelEnd = 130;
  useEffect(
    ()=>{
      const percent = (value/1000)*100;
  const angel = ((percent/100)*260) - 130;
  const angelStart= -130;
  const angelEnd = 130;
  setRotate(angel);
    }
  )
  return (
    <div className="gauge-container">
    <GaugeComponent
    value={0}
    type="radial"
    
    labels={{
      valueLabel:{
        hide:true,
      },
      tickLabels: {
        type: "inner",
        hideMinMax: true,
        defaultTickValueConfig:{
          hide:true
        },
        defaultTickLineConfig:{
          hide:true,
        },
        ticks: [
          { value: 20 },
          { value: 40 },
          { value: 60 },
          { value: 80 },
          { value: 100 }
        ]
      }
    }}
    arc={{
      colorArray: ['#EF4444','#F59E0B','#FCD34D','#22C55E','#15803D'],
      subArcs: [{limit: 20}, {}, {}, {}, {}],
      padding: 0.05,
      width: 0.15,
      cornerRadius: 10
    }}
    pointer={{
      type:'arrow',
      elastic: true,
      animationDelay: 0,
      width:0,
      length:0,

  }}
/>
<div className="pointerCircle d-flex flex-column justify-content-center align-items-center">
  <div id="PointerId" className="Rod d-flex flex-column justify-content-start align-items-center" style={{transform:`rotate(${rotate}deg)`}}>
    <div className="ArrowShape"></div>
  </div>
  <h1 className='Heading m-0'>{value}</h1>
  <p className="LableText m-0">{title}</p>
</div>

</div>
  );
};

