import React, { useState, useEffect } from "react";
import './Filespinner.css';

const FileSpinner=({statusCode}) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Extracting data");

  useEffect(() => {
    if (statusCode===200){
      setProgress(100);
      setStatus("Completed");
      return;
    }

    const totalDuration = 3 * 60 * 1000; 
    const intervalDuration=1000; 
    const progressIncrement=100/(totalDuration/intervalDuration);

    const progressInterval=setInterval(()=>{
      setProgress(prev=>{
        if(prev < 100)return prev+progressIncrement;
        return 100;
      });
    },intervalDuration);

    if(progress<33) {
      setStatus("Extracting data");
    } else if(progress < 66) {
      setStatus("Analyzing with AI");
    } else if(progress < 100) {
      setStatus("Processing");
    }

    return ()=>clearInterval(progressInterval);
  }, [progress,statusCode]);

  return (
    <>
    <div className="spinner-overlay">
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        <div className="progress-text">{Math.round(progress)}%</div>
      </div>
      <div className={`status-text ${progress === 100 ? 'fade-out' : ''}`}>{status}</div>
    </div>
    </>
  );
};

export default FileSpinner;