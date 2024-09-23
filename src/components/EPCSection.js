import { React, useRef, useState, useEffect } from "react";
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import './EPC.css';
import TPSGraphComp from "./TPSGraphComp";
import './TenantProfileSectionStyle.css';
import PEPCRTableComp from "./PEPCRTableComp";
import api from "../api";
import RadialGaugeComp from "./RadialGaugeComp";

export default function EPCSection() {

    const btnRef = useRef([]);
    const [getActive, setActive] = useState('Current EPC Report');
    const [img, setImg] = useState('');  
    const [epcScore, setEpcScore] = useState(0); 

    useEffect(() => {
        btnRef.current.forEach(element => {
            element.classList.remove('ActiveEleBtn');
        });
        btnRef.current[0].classList.add('ActiveEleBtn');

        const fetchData = async () => {
            try {
                const res = await api.get('landlord/dashboard/');
                const pid = res.data.properties[0].property[0].id;
                const response1 = await api.get(`landlords/epc/latest/${pid}`);
                const response2 = await api.get(`landlords/epc/scores/${pid}`);
                   
                setImg(response1.data.view_document);
                setEpcScore(response2.data[0].average_epc_score);

            } catch (err) {
                console.log("Error while fetching the data", err);
            }
        }
        fetchData();
    }, []);

    const OnClickEvent = (event) => {
        btnRef.current.forEach(element => {
            element.classList.remove('ActiveEleBtn');
        });
        event.target.classList.add('ActiveEleBtn');
        setActive(event.target.innerText);
    }

    const OptionalRender = () => {
        switch (getActive) {
            case 'Current EPC Report':
                return (
                    <>
                    {img?(<div className="ImageContainerUpload p-3">
                            <img src={img} className="ImageUpload" alt="No Epc Report Found" />
                        </div>):(
                            <div className="ImageContainerUpload p-3">
                            <div className='noDataCell'>No Data Available</div>
                        </div>
                        )}
                       
                    </>
                );
            case 'Previous EPC Report':
                return (
                    <>
                        <div className="PreviousEPCReport d-flex flex-column gap-3">
                            <div className="TableContainer p-3">
                                <PEPCRTableComp />
                            </div>
                            <div className="TPSGraphSection d-flex flex-column gap-3 p-3">
                                <h1 className="Heading">Your Journey to Net Zero</h1>
                                <TPSGraphComp />
                            </div>
                        </div>
                    </>
                );
            default:
                return (
                    <h1>Error</h1>
                );
        }
    }

    return (
        <>
            <div className="EPCSection">
                <div className="container-fluid p-0">
                    <div className="row m-0">
                        <div className="col-4">
                            <div className="SideSection d-flex flex-column gap-3">
                                <div className="BtnGroupEle d-flex flex-column gap-3">
                                    <button ref={(ele) => { btnRef.current[0] = ele }} className="TabBtnele" onClick={(e) => { OnClickEvent(e) }}>
                                        Current EPC Report
                                    </button>
                                    <button ref={(ele) => { btnRef.current[1] = ele }} className="TabBtnele" onClick={(e) => { OnClickEvent(e) }}>
                                        Previous EPC Report
                                    </button>
                                </div>
                                <div className="ScoreCardEle d-flex flex-column align-items-center gap-5 p-3 pb-5" style={{ height: '420px' }}>
                                    <h1 className="heading">EPC Score</h1>
                                   
                                    <RadialGaugeComp value={epcScore} title={"EPC Score"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-8">
                            {OptionalRender()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
