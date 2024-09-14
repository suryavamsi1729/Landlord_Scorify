import React from "react";
import './spinner.css'; 

const Spinner = () => {
  return (
    <div className="spin-overlay">
      <div className="spin-container">
        <div className="load"></div>
      </div>
    </div>
  );
};

export default Spinner;
