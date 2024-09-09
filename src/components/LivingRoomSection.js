import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LRSImageComp from "./LRSImageComp";
import api from "../api";

export default function LivingRoomSection() {
    const { itm } = useParams();
    const [roomData, setRoomData] = useState({
        checkin: [],
        checkout: [],
        inspection: [],
        services: []
    });
    const [getActive, setActive] = useState('checkin');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('landlord/dashboard/');
                const property_id = response.data.properties[0].property[0].id;
                const houseResponse = await api.get(`landlord/house-photo/${property_id}/`);

                const houseItems = houseResponse.data.find(item => 
                    item.item_type.toLowerCase().replace(" ", "") === itm.toLowerCase()
                );

                if (houseItems) {
                    const formattedData = {
                        checkin: [],
                        checkout: [],
                        inspection: [],
                        services: []
                    };  
                    houseItems.house_item.forEach(photo => {
                        const status = photo.status.toLowerCase();
                        if (formattedData[status]) {
                            formattedData[status].push({
                                id: photo.id,
                                image: photo.image,
                                upload_date: photo.upload_date
                            });
                        }
                    });

                    setRoomData(formattedData);
                }
            } catch (err) {
                console.log("Error while fetching data", err);
            }
        };
        fetchData();
    }, [itm]);

    const OnClickEvent = (event) => {
        setActive(event.target.dataset.status);
    };

    const OptionalRender = () => {
        const images = roomData[getActive];
        if (!images || images.length === 0) {
            return <h1>No images available</h1>;
        }
        return (
            <div className="d-flex flex-row flex-wrap gap-4">
                {images.map(photo => (
                    <LRSImageComp key={photo.id} image={photo.image} upload_date={photo.upload_date} />
                ))}
            </div>
        );
    };

    return (
        <div className="LivingRoomSection p-3 d-flex flex-column justify-content-center align-items-center">
            <div className="TabSection d-flex flex-row">
                <button 
                    data-status="checkin" 
                    className={`TabBtn ${getActive === 'checkin' ? 'TabBtnActive' : ''}`} 
                    onClick={OnClickEvent}
                >
                    Check In
                </button>
                <button 
                    data-status="inspection" 
                    className={`TabBtn ${getActive === 'inspection' ? 'TabBtnActive' : ''}`} 
                    onClick={OnClickEvent}
                >
                    Inspection
                </button>
                <button 
                    data-status="services" 
                    className={`TabBtn ${getActive === 'services' ? 'TabBtnActive' : ''}`} 
                    onClick={OnClickEvent}
                >
                    Services
                </button>
                <button 
                    data-status="checkout" 
                    className={`TabBtn ${getActive === 'checkout' ? 'TabBtnActive' : ''}`} 
                    onClick={OnClickEvent}
                >
                    Check Out
                </button>
            </div>
            <div className="ContentSection py-3">
                {OptionalRender()}
            </div>
        </div>
    );
}
