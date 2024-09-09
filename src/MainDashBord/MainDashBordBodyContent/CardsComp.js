import React, { useEffect, useState } from "react";
import './MDBContentCompStyle.css';
import HouseInfoCard from "./HouseInfoCard";
import api from "../../api";

export default function CardsComp() {
    const [property, setProperty] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('landlord/dashboard/');
                console.log(response.data.properties[0].property[0].property_type);
                setProperty(response.data.properties[0].property[0].property_type);
                setAge(response.data.properties[0].property[0].house_age);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <div className="CardsContainer">
                <HouseInfoCard data={{ heading: property, subheading: "Property Type" }} />
                <HouseInfoCard data={{ heading: "04 Years", subheading: "Current Tenancy" }} />
                <HouseInfoCard data={{ heading: age, subheading: "House Age" }} />
            </div>
        </>
    );
}
