import React, { useState, useEffect } from "react";
import TPSprofileCard from "./TPSProfileCard";
import './TenantProfileSectionStyle.css';
// import axios from "axios";
import api from "../api";
export default function TPSProfileCardSection({details}){
    const imageUrl = [`url(/CoveWrphoto.jpg)`,`url(/CoveWrphoto2.jpg)`,`url(/CoveWrphoto3.jpg)`,`url(/CoveWrphoto4.jpg)`]
    return (
        <>
            <div className="TPSProfileCardSection w-100 p-0">
                <div className="row m-0 gy-2">
                    {
                        details.map((itm, i) => (
                            <div key={i} className="col-12 col-md-4 col-lg-3 px-2 ps-0">
                                <TPSprofileCard imgUrl={imageUrl[i%details.length]} data={itm} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
