import React, { useState, useEffect } from "react";
import './Filespinner.css';

const FileSpinner = ({ statusCode}) => {
  const [progress,setProgress]=useState(0);
  const [status, setStatus]=useState("Extracting data");

  useEffect(() => {
    let progressInterval;
    if (statusCode===201) {
      const duration=5000; 
      const intervalDuration=100; 
      const steps=duration/intervalDuration; 
      const fastIncrement=(100-progress)/steps;

      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress=prev+fastIncrement;
          if (newProgress>=100){
            clearInterval(progressInterval);
            return 100;
          }

        
          if (newProgress<10) {
            setStatus("Extracting data");
          } else if (newProgress<30) {
            setStatus("Extracting Images");
          } else if (newProgress<50) {
            setStatus("Analyzing with AI");
          } else if (newProgress<70) {
            setStatus("Processing");
          } else {
            setStatus("Finalizing");
          }

          return newProgress;
        });
      }, intervalDuration);
    } else {
      const totalDuration=5*60*1000; 
      const intervalDuration=1000; 
      const progressIncrement=100/(totalDuration/intervalDuration);

      progressInterval = setInterval(()=>{
        setProgress(prev => {
          if (prev < 100) return prev + progressIncrement;
          clearInterval(progressInterval);
          return 100;
        });

        if (progress<10) {
          setStatus("Extracting data");
        } else if (progress<24) {
          setStatus("Extracting Images");
        } else if (progress<50) {
          setStatus("Analyzing with AI");
        } else if (progress<70) {
          setStatus("Processing");
        } else {
          setStatus("Finalizing");
        }
      }, intervalDuration);
    }

    return () => clearInterval(progressInterval);
  }, [statusCode, progress]);

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
