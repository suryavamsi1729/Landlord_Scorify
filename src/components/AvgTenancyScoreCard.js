import React from "react";
import './TenantProfileSectionStyle.css';
import SMHBVentilationGraph from "./SMHBVentilationGraph";
import ATSCInfoComp from "./ATSCInfoComp";
import ATSTableComp from "./ATSTableComp";
import RadialGaugeComp from "./RadialGaugeComp";
export default function AvgTenancyScoreCard(){
    return(
    <>
        <div className="AvgTenancyScoreCardSection">
            <div className="row m-0">
                <div className="col-12 col-md-6 col-lg-4 p-4 d-flex flex-row justify-content-center align-items-center">
                    {/* <SMHBVentilationGraph score={75} title={"Tenancy Score"}/> */}
                    <RadialGaugeComp value={''} title={'Tenancy Score'}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-4 d-flex flex-row justify-content-center align-items-center">
                    <ATSCInfoComp score={''} text={"Lorem ipsum dolor sit amet consectetur. Et a sed dictumst praesent massa faucibus. Venenatis maecenas duis lobortis sagittis lobortis pellentesque ac cursus. In magnis convallis eu ac. Pellentesque interdum sed dictumst sociis purus purus tempor morbi amet."}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-4 d-flex flex-row justify-content-center align-items-center">
                    <ATSTableComp/>
                </div>
            </div>
        </div>
    </>
    );
}