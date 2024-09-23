import React from 'react';
import './DataSpinner.css';

const DataSpinner = () => {
  return (
    <div className="fetching-container">
      <div className="spinner"></div>
      <p>Fetching<span className="typing-dots"><span>.</span><span>.</span><span>.</span></span></p>
    </div>
  );
};

export default DataSpinner;
