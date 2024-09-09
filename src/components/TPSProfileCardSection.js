import React, { useState, useEffect } from "react";
import TPSprofileCard from "./TPSProfileCard";
import './TenantProfileSectionStyle.css';
// import axios from "axios";
import api from "../api";
export default function TPSProfileCardSection() {
    const [details, setDetails] = useState([
        // {
        //     PFImg: "/pimgTP1.jpg",
        //     name: "Khadijah Ali",
        //     details: "Pharmacist"
        // },
        // {
        //     PFImg: "/pimgTP2.jpg",
        //     name: "Sara Jane",
        //     details: "Business Woman"
        // }
    ]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // const response = await axios.get("http://127.0.0.1:8000/landlord/87c3fd8f-9ddb-4509-9dfc-f9fc962d8705/tenants/");
                const response=await api.get('landlord/tenants/');
                
                const fetchdata = response.data.map((item) => ({
                    PFImg: item.profile_photo,
                    name: item.name,
                    details:item.occupation
                }));
             
                setDetails(fetchdata);
            } catch (err) {
                console.log("Error while fetching the data", err);
            }
        };
        fetchData();
    }, []);

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
