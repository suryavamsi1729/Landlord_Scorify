import React,{useState,useEffect,useContext} from 'react';
import { FormDataContext } from "../../Context/FormDataContext";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import  FileSpinner from '../../components/Spinner/FileSpinner'
const DocumentsUploading = () => {
    const {formdata} = useContext(FormDataContext);
   const navigate=useNavigate();
   const [loading, setLoading] = useState(false);

  useEffect(()=>{
    console.log(formdata.date);
    const upload=async()=>{
     try{
        setLoading(true);
        const token = localStorage.getItem("access_token");
        const response = await axios.post(
          "landlord/upload-report/",
          formdata,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            }
          }
        );
        if(response.status==200){
            <FileSpinner statusCode={response.status}/>
            navigate('/dashboard');
        }
     }catch(err){
        setLoading(false);
        console.log("Error while fecthing the data",err);
        // navigate('/upload');
     }
    }
   upload();
  },[])
  return (
    <> 
     {<FileSpinner/>}

        </>
  )
}

export default DocumentsUploading