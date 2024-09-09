import {React,useState,useEffect} from 'react';
export default function RepairStatus(){
    return(
        <div className='RepairStatus'>
            <div className='RSIndicator d-flex flex-column gap-1'>
                <div className='RSIndicatorArrowContainer'>
                    <div className='Arrow' style={{left:`${10}%`}}></div>
                </div>
                <div className='RSIndicatorScale'></div>
                <div className='RSIndicatorText d-flex flex-row'>
                    <div className='RSITextContainer w-25 text-center'>
                        <p className='Text text-center m-0'>Building <br/> Report</p>
                    </div>
                    <div className='RSITextContainer w-25 text-center'>
                        <p className='Text text-center m-0'>Arranging <br/> Engineer </p>
                    </div>
                    <div className='RSITextContainer w-25 text-center'>
                        <p className='Text text-center m-0'>Arranging <br/> Access </p>
                    </div>
                    <div className='RSITextContainer w-25 text-center'>
                        <p className='Text text-center m-0'>Completion <br/> Report</p>
                    </div>
                </div>
            </div>
        </div>
    )
}