import React, { useContext, useEffect, useState } from "react";
import './FloarMapPhotos.css';
import FMPSGalleryComp from "./FMPSGalleryComp";
import { Link } from "react-router-dom";
import { MainContext } from "../Context/MainContext";
import api from "../api";

export default function FloarMapPhotosSection() {
    const [roomData, setRoomData] = useState({});  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await api.get('landlord/dashboard/');
                const property_id = response1.data.properties[0].property[0].id;
                const response = await api.get(`landlord/house-photo/${property_id}/`);
                const houseItems = response.data;
                const formattedData = {};
                houseItems.forEach(item => {
                    const itemType = item.item_type.toLowerCase().replace(" ", "");
                    if (!formattedData[itemType]) {
                        formattedData[itemType] = []; 
                    }

                    const itemData = item.house_item.map(photo => ({
                        id: photo.id,
                        image: photo.image,
                        status: photo.status
                    }));
                    
                    formattedData[itemType] = [...formattedData[itemType], ...itemData];
                });

                setRoomData(formattedData);
            } catch (err) {
                console.log("Error while fetching data", err);
            }
        };

        fetchData();
    }, []);

    const { dispatch } = useContext(MainContext);

    const rooms = Object.keys(roomData).map((roomType, index) => ({
        type: roomType,
        path: `/dashboard/floarmapandphotos/${roomType}`
    }));

    return (
        <div className="FloarMapPhotosSection">
            <div className="Container-fluid p-0">
                <div className="row m-0">
                    {rooms.map((room, index) => (
                        <div key={index} className="col-12 col-sm-2 col-md-4 col-lg-3 p-2">
                            <Link
                                to={room.path}
                                onClick={() => {
                                    dispatch({
                                        type: "path",
                                        payload: {
                                            path: `Dashboard Floar Map And Photo ${room.type}`,
                                            sidebar: false
                                        }
                                    });
                                }}
                                style={{ textDecoration: 'none', padding: '0px', width: 'calc(100%)', font: 'none' }}
                            >
                                <FMPSGalleryComp title={room.type} data={roomData[room.type]} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
