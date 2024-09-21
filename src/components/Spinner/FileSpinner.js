import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  
import './Filespinner.css';

const FileSpinner = ({ statusCode}) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Extracting data");
  const navigate = useNavigate();  

  useEffect(() => {
    let progressInterval;

    if (statusCode === 201) {
      const duration = 5000;
      const intervalDuration = 100;
      const steps = duration / intervalDuration;
      const fastIncrement = (100 - progress) / steps;

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + fastIncrement;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }

          // Set status directly within this block based on progress
          if (newProgress < 10) {
            setStatus("Extracting data");
          } else if (newProgress < 30) {
            setStatus("Extracting Images");
          } else if (newProgress < 50) {
            setStatus("Analyzing with AI");
          } else if (newProgress < 70) {
            setStatus("Processing");
          } else {
            setStatus("Finalizing");
          }

          return newProgress;
        });
      }, intervalDuration);
    } else {
      const totalDuration = 7 * 60 * 1000;
      const intervalDuration = 1000;
      const progressIncrement = 100 / (totalDuration / intervalDuration);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressIncrement;
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            return 100;
          }

          // Set status based on progress here as well
          if (newProgress < 10) {
            setStatus("Extracting data");
          } else if (newProgress < 30) {
            setStatus("Extracting Images");
          } else if (newProgress < 50) {
            setStatus("Analyzing with AI");
          } else if (newProgress < 70) {
            setStatus("Processing");
          } else {
            setStatus("Finalizing");
          }

          return newProgress;
        });
      }, intervalDuration);
    }

    return () => clearInterval(progressInterval);
  }, [statusCode]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 1000);  
      return () => clearTimeout(timer); 
    }
  }, [progress, navigate]);

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
