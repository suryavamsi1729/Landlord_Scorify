import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { FaLock } from "react-icons/fa"; // Import lock icon
import "./TenantProfileSectionStyle.css";
import "./lock.css"; // Lock icon styles for the graph component

export default function TPSGraphComp() {
    const [details, setDetails] = useState([]);
    const [locked] = useState(true); // Always locked (for now)
    const [showText, setShowText] = useState(false); // State to manage text visibility on click

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Example API fetch (uncomment if needed)
                // const res = await api.get('landlord/dashboard/');
                // const pid = res.data.properties[0].property[0].id;
                // const response = await api.get(`landlords/epc/reports/${pid}`);
                // const epcScores = response.data.map(report => report.epc_score);
                // setDetails(epcScores);
            } catch (err) {
                console.log("Error while fetching data", err);
            }
        };
        fetchData();
    }, []);

    // Registering chart plugin for the vertical line
    Chart.register({
        id: 'verticalLinePlugin',
        beforeDraw: (chart) => {
            if (chart.tooltip._active && chart.tooltip._active.length) {
                const activePoint = chart.tooltip._active[0];
                const ctx = chart.ctx;
                const x = activePoint.element.x;
                const topY = chart.scales.y.top;
                const bottomY = chart.scales.y.bottom;

                ctx.save();
                ctx.beginPath();
                ctx.setLineDash([3, 3]);
                ctx.moveTo(x, topY);
                ctx.lineTo(x, bottomY);
                ctx.lineWidth = 1;
                ctx.strokeStyle = '#D4D4D8';
                ctx.stroke();
                ctx.restore();
            }
        }
    });

    const labels = ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                events: ['click'],
                enabled: true,
                position: 'nearest',
            }
        },
        elements: {
            point: {
                borderWidth: 1,
                backgroundColor: "#FFFFFF",
                borderColor: "#9FBEFF",
                radius: 4.5,
                hoverRadius: 9,
                hoverBorderWidth: 6,
            },
            line: {
                borderColor: "#5A74FA",
                borderWidth: 2,
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    padding: 5,
                    color: "#09090B",
                    font: { size: 14, family: 'Urbanist', weight: 600 },
                }
            },
            y: {
                min: 0,
                max: 100,
                ticks: {
                    padding: 10,
                    color: "#09090B",
                    font: { size: 14, family: 'Urbanist', weight: 600 },
                },
                grid: {
                    color: '#D4D4D8',
                    drawTicks: true,
                },
                border: {
                    dash: (context) => context.tick.value !== 0 ? [2, 3] : null,
                },
            }
        }
    };
    
    const data = {
        labels,
        datasets: [
            {
                label: "Poor Ventilation",
                data: details,
            },
        ]
    };

    // Function to handle lock icon click
    const handleLockClick = () => {
        setShowText(true); // Display the "Updated soon" text on click
    };

    return (
        <div className="LineGraphSection position-relative">
            {/* Lock Overlay */}
            {locked && (
                <div className="overlay">
                    <div 
                        className="lock-circle" 
                        onClick={handleLockClick} // Handle click event
                    > 
                        {/* Circle effect for lock icon */}
                        <FaLock className="lock-icon" />
                    </div>

                    {/* Hover text, only visible on click */}
                    {showText && (
                        <div className="updated-soon">
                            Updated soon
                        </div>
                    )}
                </div>
            )}
            
            {/* Blurred Graph Component */}
            <div className={`graph-content ${locked ? "blurred" : ""}`}>
                <Line options={options} data={data} />
            </div>
        </div>
    );
}
