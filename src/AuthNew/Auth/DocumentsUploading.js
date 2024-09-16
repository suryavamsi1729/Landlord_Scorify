import React, { useState, useEffect, useContext } from 'react';
import { FormDataContext } from "../../Context/FormDataContext";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FileSpinner from '../../components/Spinner/FileSpinner';

const DocumentsUploading = () => {
  const { formdata } = useContext(FormDataContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(null);
 
  useEffect(() => {
    if (!formdata) {
      window.alert("Form Data is not available");
      navigate('/upload');
      return;
    }

    const upload = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("access_token");
        const response = await axios.post(
          "http://127.0.0.1:8000/landlord/upload-report/",
          formdata,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        // setStatusCode(response.status);
        if(response.status === 201){
          setStatusCode(response.status);
          navigate('/dashboard');
        }
      } catch (err) {
        setLoading(false);
        navigate('/upload');
        console.error("Error while fetching the data", err);
      }
    };

    upload();
  }, [formdata, navigate]);

  return (
    <> 
      {loading && <FileSpinner statusCode={statusCode} />}
   
    </>
  );
};

export default DocumentsUploading;
