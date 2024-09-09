import {React,useEffect} from 'react';
import GaugeComponent from 'react-gauge-component';
import './GuageEle.css';
const RadialGauge = ({value,lable}) => {
  const percent = (value/1000)*100;
  const angel = ((percent/100)*260) - 130;
  const angelStart= -130;
  const angelEnd = 130;
  return (
    <div id="guageEleId" style={{width: `50px`,height:'50px',paddingBottom:'10px',position:'relative'}}>
      <GaugeComponent
    value={50}
    type="radial"
    
    marginInPercent={ {top: 0.00, bottom: 0.00, left: 0.7, right: 0.7 }}
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
      colorArray: ['#5BE12C','#EA4228'],
      subArcs: [{limit: 20}, {}, {}, {}, {}],
      padding: 0.03,
      width: 0.2
    }}
    pointer={{
      type:'arrow',
      elastic: true,
      animationDelay: 0,
      width: 0,
      length: 0,
  }}
/>
    
    <div className='PonterElement d-flex flex-column justify-content-center align-items-center' style={{position:'absolute',bottom:'10px',left:'10px', width:'30px',height:'30px',borderRadius:'50%',background:"#FFFFFF",boxShadow:'0px 0px 14.47px 0px #72729F29',zIndex:100}}>
      <div style={{fontSize:'8px',lineHeight:'10px',fontWeight:600,color:'#18181B'}}>{value}</div>
      <div style={{fontSize:'5px',lineHeight:'7.5px',fontWeight:500,color:'#18181B'}}>{lable}</div>
    </div>
      <div id="PonterIdicatorEle" className='d-flex flex-column justify-content-start align-items-center' style={{position:'absolute',left:'calc(25px - 3.75px)',bottom:'6px',transform:`rotate(${angel}deg)`,width:'7.5px',height:'38px',backgroundColor:'transparent',zIndex:99}}>
        <div style={{width:'0px',height:'0px',borderLeft:'3.75px solid transparent',borderRight:'3.75px solid transparent',borderBottom:'7.5px solid #D9D9D9'}}></div>
      </div>
    
    </div>
  );
};

export default RadialGauge;
