import {React,useState} from "react";
import './dropDown.css';
export default function DropDown({setoption}){
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setoption(event.target.value);
    };
    const handleContainerClick = () => {
        // Programmatically trigger the select dropdown when the container is clicked
        document.getElementById("document-type-asd").click();
        document.getElementById('document-type-asd').focus();
      };
    return(
        <>
        <div className="DropDownContainer d-flex flex-row justify-content-start align-items-center gap-2">
          <label className="Lable" htmlFor="document-type">Choose Document Type:</label>
          <div className="selectOptionContainer">
                <select id="document-type-asd" className="selectOptionValueContainer"  value={selectedOption} onChange={(e)=>handleOptionChange(e)} >
                <option value="Gas Safety">Gas Safety</option>
                <option value="EICR">EICR</option>
                <option value="Fire Safety">Fire Safety</option>
                <option value="Insurance Policy">Insurance Policy</option>
                <option value="Tenancy Agreement">Tenancy Agreement</option>
                </select>
          </div>
          
        </div>
        </>
    );
}