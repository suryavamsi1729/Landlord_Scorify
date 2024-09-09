import React from "react";
import './OpenRepairsSection.css';
import ORSMCORPopUp from "./ORSMCORPopUp";
export default function ORSMCOpenRepair(){
    return (
        <>
            <img className="ORFloarMapImg" src="/floarmapimg.jpg" alt="floorMap"/>
            <ORSMCORPopUp>
            <svg width="60" height="60" viewBox="32 32 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_bd_107_17402)">
                <g clip-path="url(#clip0_107_17402)">
                <rect x="32" y="32" width="60" height="60" rx="30" fill="white"/>
                <g clip-path="url(#clip1_107_17402)">
                <path d="M74.8359 72.5188C73.9522 71.3209 72.3531 69.5923 72.3531 69.5923C72.3531 69.5923 70.754 71.3209 69.8703 72.5189C68.5855 74.2603 67.9609 75.5977 67.9609 76.6076C67.9609 79.0295 69.9313 80.9998 72.3531 80.9998C74.7749 80.9998 76.7453 79.0295 76.7453 76.6076C76.7453 75.5977 76.1207 74.2603 74.8359 72.5188Z" fill="#5A74FA"/>
                <path d="M66.9899 58.382L66.6723 58.3853C66.2632 58.3896 65.8785 58.2337 65.5879 57.9463C65.2974 57.6588 65.1374 57.2753 65.1374 56.8666V53.7059H62.3138V51.8235H67.0197V49.9412H62.3138V49H60.4315V49.9412H55.7256V51.8235H60.4315V53.7059H57.608V56.6338C57.608 57.6142 56.8104 58.4118 55.83 58.4118H53.4492C53.5024 58.6931 53.5293 58.9787 53.5295 59.265V64.1467C53.5292 64.433 53.5023 64.7187 53.4492 65H67.0197C68.0577 65 68.9021 65.8444 68.9021 66.8824V67.8235H75.4903V66.8824C75.4903 62.1952 71.677 58.382 66.9899 58.382Z" fill="#52525B"/>
                <path d="M48.9114 56.5293H47.2549V66.8822H48.9114C50.4198 66.8822 51.647 65.655 51.647 64.1466V59.2649C51.647 57.7565 50.4198 56.5293 48.9114 56.5293Z" fill="#5A74FA"/>
                </g>
                <path d="M92 32L32 92" stroke="#EF4444" stroke-width="3"/>
                </g>
                <rect x="33.5" y="33.5" width="57" height="57" rx="28.5" stroke="#EF4444" stroke-width="3"/>
                </g>
                <defs>
                <filter id="filter0_bd_107_17402" x="0" y="0" width="124" height="124" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="12"/>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_107_17402"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="16"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.445312 0 0 0 0 0.445312 0 0 0 0 0.625 0 0 0 0.16 0"/>
                <feBlend mode="normal" in2="effect1_backgroundBlur_107_17402" result="effect2_dropShadow_107_17402"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_107_17402" result="shape"/>
                </filter>
                <clipPath id="clip0_107_17402">
                <rect x="32" y="32" width="60" height="60" rx="30" fill="white"/>
                </clipPath>
                <clipPath id="clip1_107_17402">
                <rect width="32" height="32" fill="white" transform="translate(46 49)"/>
                </clipPath>
                </defs>
            </svg>
            </ORSMCORPopUp>
        </>
    );
}