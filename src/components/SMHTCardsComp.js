import React from "react";
import './MouldandHumidityStyle.css';
export default function SMHTCardsComp({data,children}){
    return(
        <>
        <div className="col-12 col-md-6 col-lg-4">
            <div className="SMHTCardsContainer d-flex flex-row align-itmes-center gap-3 p-2">
                <div className="SMHTCardsIcon d-flex flex-column justify-content-center align-items-center">
                <svg className="Icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8305 44C10.6399 44 4 37.4448 4 29.2542V28.8C4 19.5932 15.1112 11.7776 18.8305 4C21.7778 11.7776 34 18.8985 34 29.2542C34 37.7873 26.7951 44 18.8305 44Z" fill="#21296D"/>
                    <path d="M41.9999 33.0762C40.6977 33.0762 39.5145 32.0627 38.6392 31.0149C37.8771 30.1023 36.36 30.1023 35.5978 31.0149C34.7225 32.0627 33.5394 33.0762 32.2372 33.0762C30.9349 33.0762 29.7518 32.0627 28.8765 31.0149C28.1143 30.1023 26.5973 30.1023 25.8351 31.0149C24.9598 32.0627 23.7767 33.0762 22.4744 33.0762C21.1722 33.0762 19.989 32.0627 19.1137 31.0149C18.3516 30.1023 16.8345 30.1023 16.0723 31.0149C15.1971 32.0627 14.0139 33.0762 12.7117 33.0762" stroke="#5A74FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42.0001 25.4492C40.6978 25.4492 39.5147 24.4357 38.6394 23.3879C37.8772 22.4753 36.3602 22.4753 35.598 23.3879C34.7227 24.4357 33.5396 25.4492 32.2374 25.4492C30.9351 25.4492 29.752 24.4357 28.8767 23.3879C28.1145 22.4753 26.5975 22.4753 25.8353 23.3879C24.96 24.4357 23.7769 25.4492 22.4746 25.4492" stroke="#5A74FA" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </div>
                <div className="SMHTTextContainer d-flex flex-column justify-content-center gap-2">
                    <h1 className="Heading m-0">
                        {data.heading}
                    </h1>
                    <p className="HumidityVal m-0">
                        {data.data}
                    </p>
                </div>
                {children}
            </div>
        </div>
        </>
    )
}