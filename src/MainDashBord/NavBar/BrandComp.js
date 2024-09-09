import {React,useContext} from "react";
import './SideBarCompStyle.css';
import { MainContext } from "../../Context/MainContext";
import logo from './svg/Brand Logo.jpg'
import logo1 from './svg/Brand Logo1.jpg'
export default function BandComp(){
    const data = useContext(MainContext);
    return (
        <>
            <div className="BandContainer">
                <div className="BrandLogo">
                    {/* <img src={logo} className="BrandLogoImg" alt="brandimg"/> */}
                {
                    data.sidebar
                    ?
                    <img src={logo} className="BrandLogoImg" alt="brandimg"/>
                    :
                    <img src={logo1} className="BrandLogoImgSmall" alt="brandimg"/>
                }
                </div>
            </div>
        </>
    );
}