
import React, { useState, useEffect } from "react";
import './RegularMaintainens.css';
import MaintenanceSchedularItm from "./MaintenanceSchedularItm";
import api from "../api";

export default function RMMaintenanceSchedule() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("landlord/regular-maintenance/schedule/");
                
                if (Array.isArray(response.data.data)) {
                    setData(response.data.data);
                } else {
                    console.warn("Unexpected data format:", response.data);
                    setData([]);
                }
            } catch (err) {
                console.log("Error while fetching the data", err);
                setData([]);
            }
        };
        fetchData();
    }, []);

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        const getOrdinalSuffix = (day) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };
        const day = date.getDate();
        const month = date.toLocaleString('en-GB', { month: 'short' });
        const year = date.getFullYear();
        return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
    };

    return (
        <div className="w-100 h-100 RMMaintenanceSchedule d-flex flex-column justify-content-start p-2">
            {data.length === 0 ? (
                <div>No data available</div>
            ) : (
                data.map((item) => (
                    <MaintenanceSchedularItm
                        key={item.id}
                        statusval={item.status}
                        countval={item.score > 0 ? 1 : 0}
                        title={item.title}
                        reported={item.reported_by}
                        description={item.description}
                        due_date={formatDate(item.due_date)}
                        report_photos={item.images && item.images.length > 0 ? item.images[0].image : ''}
                    />
                ))
            )}
        </div>
    );
}