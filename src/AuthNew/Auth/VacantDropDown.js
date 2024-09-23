import { React, useState } from "react";
import './VacantDropDown.css';

export default function VacantDropDown({ setoption }) {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
        setoption(event.target.value);
    };

    const handleContainerClick = () => {
        // Programmatically trigger the select dropdown when the container is clicked
        document.getElementById("vacancy-status").click();
        document.getElementById('vacancy-status').focus();
    };

    return (
        <>
            <div className="VacantDropDown d-flex flex-row justify-content-start align-items-center gap-2">
                <label className="Lable" htmlFor="vacancy-status">Choose Occupancy Status:</label>
                <div className="SelectOptionContainer">
                    <select id="vacancy-status" className="selectOptionValueContainer" value={selectedOption} onChange={(e) => handleOptionChange(e)}>
                        <option value="Vacant">Vacant</option>
                        <option value="Occupied">Occupied</option>
                    </select>
                </div>
            </div>
        </>
    );
}
