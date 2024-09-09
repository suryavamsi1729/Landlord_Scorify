import React, { useEffect, useState } from "react";
import './MouldandHumidityStyle.css';
import SMHVentilationScoreCard from "./SMHBVentilationScoreCard";
import SMHGraphComp from "./SMHGraphComp";
import SMHTCardsComp from "./SMHTCardsComp";
import api from "../api";

export default function MouldandHumidityComp() {
   
    const [avgData, setAvgData] = useState(null);
    const [ltData, setLtData] = useState(null);
    const [city, setCity] = useState(null);
    const [condition, setCondition] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [hdata, setHdata] = useState(null);
    const [ldata, setLdata] = useState(null);
    const [tempcond, setTempcond] = useState(null);
    const [dew, setDew] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('landlord/mould/');
                // console.log(response);
                setAvgData(response.data.mould[0].avg_humidity_30_days);
                setLtData(response.data.mould[0].humidity);
                setCity(response.data.city);
                setCondition(response.data.mould[0].condition);
                setTemperature(response.data.mould[0].temperature);
                setHumidity(response.data.humidity);
                setHdata(response.data.high_temp_c);
                setLdata(response.data.min_temp_c);
                setTempcond(response.data.condition);
                setDew(response.data.current_dewpoint_c);
            } catch (error) {
                console.log("Error while fetching the data", error);
            }
        };
        fetchData();
    }, []);

    const data = [
        {
            heading: 'Average - Last 30 Days',
            data: avgData
        },
        {
            heading: 'Latest Data',
            data: ltData
        },
        {
            heading: 'Condition',
            data: condition
        }
    ];

    return (
        <>
            <div className="SectionModuleandHumidty">
                <div className="container-fluid p-0">
                    <div className="row g-3 m-0">
                        {data.map((itm) => {
                            return (<SMHTCardsComp data={itm} />);
                        })}
                    </div>
                    <div className="row g-3 m-0">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="row m-0">
                                <div className="col-12 mb-3 p-0">
                                    <SMHVentilationScoreCard />
                                </div>
                                <div className="col-6 p-0 pe-2">
                                    <div className="Wethercard d-flex flex-column justify-content-around align-items-center p-3 gap-2" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/b87d/5c38/e9be0bd4446dbc59190e8deb01de2c9e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ju9GtX0sySNt-Kr6tepLR87lB2pVJjQ9MSUnnFu1dlTe~hGA3KJsHl5tDlv4mIi~EsAd5QgfyQ9K924DTvE2YxPpTrN4XzqwMmWnfTzMQ2PUIdoYFM6iza3kX5Lp1OlTCIx~TNmdTRIzLCPE3rKONlLFneWOWy-mu0UOrWRGsyGnATadRGhZtq6q1OqyFE6reO5wAHGkSWmzfcrzlIW56J2mYzBEt6Rd7vvymFb6vIZMmXVtQgQlcwmXbtlDN-JP1eWEUk2UK6oLt4sozVMS7NoD5GjnuBGeu-luhMXos2WhTcVAq89CMSVsohYZJWtyWCQt-O~AbICN3cNh32nDzg__)', backgroundSize: 'cover' }}>
                                        <h1 className="WetherCard-Heading m-0">
                                            {city}
                                        </h1>
                                        <p className="WetherCard-temp m-0">
                                            {temperature}
                                        </p>
                                        <div className="bottom d-flex flex-column align-items-center gap-1">
                                            <p className="Temp-type m-0">{tempcond}</p>
                                            <div className="side d-flex flex-row gap-1">
                                                <p className="high m-0">H:{hdata}°</p>
                                                <p className="high m-0">L:{ldata}°</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 p-0 ps-2">
                                    <div className="Humiditycard  d-flex flex-column justify-content-around align-items-left p-3 gap-2">
                                        <div className="top d-flex flex-row gap-2">
                                            <svg className="Icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.8305 44C10.6399 44 4 37.4448 4 29.2542V28.8C4 19.5932 15.1112 11.7776 18.8305 4C21.7778 11.7776 34 18.8985 34 29.2542C34 37.7873 26.7951 44 18.8305 44Z" fill="#21296D" />
                                                <path d="M41.9999 33.0762C40.6977 33.0762 39.5145 32.0627 38.6392 31.0149C37.8771 30.1023 36.36 30.1023 35.5978 31.0149C34.7225 32.0627 33.5394 33.0762 32.2372 33.0762C30.9349 33.0762 29.7518 32.0627 28.8765 31.0149C28.1143 30.1023 26.5973 30.1023 25.8351 31.0149C24.9598 32.0627 23.7767 33.0762 22.4744 33.0762C21.1722 33.0762 19.989 32.0627 19.1137 31.0149C18.3516 30.1023 16.8345 30.1023 16.0723 31.0149C15.1971 32.0627 14.0139 33.0762 12.7117 33.0762" stroke="#5A74FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M42.0001 25.4492C40.6978 25.4492 39.5147 24.4357 38.6394 23.3879C37.8772 22.4753 36.3602 22.4753 35.598 23.3879C34.7227 24.4357 33.5396 25.4492 32.2374 25.4492C30.9351 25.4492 29.752 24.4357 28.8767 23.3879C28.1145 22.4753 26.5975 22.4753 25.8353 23.3879C24.96 24.4357 23.7769 25.4492 22.4746 25.4492" stroke="#5A74FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <h1 className="Humidity-Heading m-0">
                                                Humidity
                                            </h1>
                                        </div>
                                        <p className="Humidity-percent m-0">
                                            {humidity}%
                                        </p>
                                        <p className="HumiditybottomText m-0">
                                            The dew point is {dew}° right now.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <SMHGraphComp />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
