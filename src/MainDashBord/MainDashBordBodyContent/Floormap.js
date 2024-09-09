import {React,useContext,useEffect,useState} from "react";
import { MainContext } from "../../Context/MainContext";
import CardItm from './CardItm'
import './MDBContentCompStyle.css';
import { Link } from 'react-router-dom';

const Floormap = ({img1,img2,img3,img4}) => {
const {dispatch} = useContext(MainContext);
  return (
    <Link 
            to="/dashboard/floarmapandphotos"
            onClick={() => {
               
                dispatch({
                    type: "path",
                    payload: {
                        path: "Dashboard Floor Map And Photo",
                        sidebar: false
                    }
                });
            }} 
            style={{ textDecoration: 'none', padding: '0px', width: 'calc(100%)', font: 'none' }}>
            
            <div className="GalaryContainer">
                <h1 className="heading">Floor Map & Photos</h1>
                <div className="imgitmcontainer">
                    <div className="imgcol">
                        {/* Conditional rendering for each image */}
                        {img1 && <img className="img1" src={img1} style={{ borderRadius: "8px" }} alt="img1" />}
                    </div>
                    <div className="imgcol2">
                        <div className="imgrow1">
                            {img2 && <img className="img2" src={img2} style={{ borderRadius: "8px" }} alt="img2" />}
                        </div>
                        <div className="imgrow2">
                            <div className="imgcol">
                                {img3 && <img className="img3" src={img3} style={{ borderRadius: "8px" }} alt="img3" />}
                            </div>
                            <div className="imgcol">
                                {img4 && <img className="img4" src={img4} style={{ borderRadius: "8px" }} alt="img4" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
  )
}

export default Floormap