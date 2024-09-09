import React from "react";
import './spinner.css'; 

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default Spinner;
