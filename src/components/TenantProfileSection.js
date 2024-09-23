import React,{useEffect,useState} from "react";
import api from "../api";
import './TenantProfileSectionStyle.css';
import TPSProfileCardSection from "./TPSProfileCardSection";
import AvgTenancyScoreCard from "./AvgTenancyScoreCard";
import TPSGraphSection from "./TPSGraphSection";
export default function TenantProfileSectionComp(){
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
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
    return (
        <>
            <div className="TenantProfileSection">
                <div className="container-fluid p-0">
                    <div className="row m-0 gy-3">
                        <div className="col-12 p-0">
                            <AvgTenancyScoreCard/>
                        </div>
                        <div className="col-12 p-0">
                            <TPSProfileCardSection details={details}/>
                        </div>
                        <div className="col-12 p-0">
                            <TPSGraphSection/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}