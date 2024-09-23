import React, { useState } from "react";
import TPSGraphComp from "./TPSGraphComp";
import './TenantProfileSectionStyle.css';
import { AiOutlineLock } from "react-icons/ai"; // Import lock icon
import './lock.css'; // Lock icon styles

export default function TPSGraphSection() {
    const [locked] = useState(true); // Always locked

    return (
        <>
            <div className="TPSGraphSection d-flex flex-column gap-3 p-3">
                <h1 className="Heading">Score History</h1>
                <div className={`graph-container ${locked ? "locked" : ""}`}>
                    {/* Lock Icon always visible */}
                    <div className="overlay">
                        <div className="lock-circle"> {/* Circle effect for lock icon */}
                            <AiOutlineLock className="lock-icon" />
                        </div>
                    </div>
                    {/* Blurred background content */}
                    <div className="blurred">
                        <TPSGraphComp />
                    </div>
                   
                </div>
            </div>
        </>
    );
}
