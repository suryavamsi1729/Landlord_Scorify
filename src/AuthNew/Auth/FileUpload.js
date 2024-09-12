import { React, useCallback, useState, useRef } from "react";
import "./FileUpload.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import FileSpinner from "../Spinner/FileSpinner";
export default function FileUpload() {
  const navigate = useNavigate();
  const [postcode,setPostCode]=useState();
  const [formData, setFormData] = useState({
    mandatory: null,
    optional: null, 
  });
  const [uploadProgress, setUploadProgress] = useState({
    mandatory: 0,
    optional: 0, 
  });

  const OhandleFileChange = (e, type) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      [type]: file,
    }));
  };

  const simulateUploadProgress = (type) => {
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        const updatedProgress = { ...prevProgress };
        if (updatedProgress[type] < 100) {
          updatedProgress[type] += 10;
        } else {
          clearInterval(interval);
        }
        return updatedProgress;
      });
    }, 300); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.mandatory) {
      simulateUploadProgress("mandatory");
    } else {
      alert("Mandatory document is required!");
    }

    
    if (formData.optional) {
      simulateUploadProgress("optional");
    }

   
    console.log("Files submitted: ", formData);
  };
  return (
    <>
      <div className="UContainer d-flex flex-column justify-content-between align-items-center p-5">
        
        <div className="Logo">
          <img className="BrandLogoImg" src="/BrandLogo.jpg" alt="BrandLogo" />
        </div>

        <div className="InRows w-100 d-flex flex-row justify-content-center align-items-center gap-3" style={{alignSelf:'center'}}>
                            <div className="InputCol w-100 d-flex flex-column">
                                <label className="UName" style={{alignSelf:'center'}}> Enter property PostCode</label>
                                <div className="InContainer" style={{alignSelf:'center'}}>
                                    <input className="pswEle" onSelect={(ev) => setPostCode(ev.target.value)} id="postcode" type="text" required/>
                                </div>
                            </div>
          </div>
          
        <h2 className="HeadingProfile m-0 text-center">Upload Documents</h2>

        <div className="container mt-4">
        <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Mandatory Document Upload */}
          <div className="col-md-6">
            <div className="upload-box">
              <h5>Mandatory Document</h5>
  
              <div className="file-upload">
                <input
                  type="file"
                  id="mandatory-upload"
                  onChange={(e) => OhandleFileChange(e, "mandatory")}
                />
   
                <label htmlFor="mandatory-upload">
                  <div className="svg">
                <svg width="50" color="blue" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2189 1.25 12.427 1.34567 12.5694 1.51191L15.5694 5.01191C15.839 5.3264 15.8026 5.79988 15.4881 6.06944C15.1736 6.33901 14.7001 6.30259 14.4306 5.98809L12.75 4.02744L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15L11.25 4.02744L9.56944 5.98809C9.29988 6.30259 8.8264 6.33901 8.51191 6.06944C8.19741 5.79988 8.16099 5.3264 8.43056 5.01191L11.4306 1.51191C11.573 1.34567 11.7811 1.25 12 1.25ZM6.99583 8.25196C7.41003 8.24966 7.74768 8.58357 7.74999 8.99778C7.7523 9.41198 7.41838 9.74963 7.00418 9.75194C5.91068 9.75803 5.1356 9.78642 4.54735 9.89448C3.98054 9.99859 3.65246 10.1658 3.40901 10.4092C3.13225 10.686 2.9518 11.0746 2.85315 11.8083C2.75159 12.5637 2.75 13.5648 2.75 15.0002V16.0002C2.75 17.4356 2.75159 18.4367 2.85315 19.1921C2.9518 19.9259 3.13225 20.3144 3.40901 20.5912C3.68577 20.868 4.07434 21.0484 4.80812 21.1471C5.56347 21.2486 6.56458 21.2502 8 21.2502H16C17.4354 21.2502 18.4365 21.2486 19.1919 21.1471C19.9257 21.0484 20.3142 20.868 20.591 20.5912C20.8678 20.3144 21.0482 19.9259 21.1469 19.1921C21.2484 18.4367 21.25 17.4356 21.25 16.0002V15.0002C21.25 13.5648 21.2484 12.5637 21.1469 11.8083C21.0482 11.0746 20.8678 10.686 20.591 10.4092C20.3475 10.1658 20.0195 9.99859 19.4527 9.89448C18.8644 9.78642 18.0893 9.75803 16.9958 9.75194C16.5816 9.74963 16.2477 9.41198 16.25 8.99778C16.2523 8.58357 16.59 8.24966 17.0042 8.25196C18.0857 8.25798 18.9871 8.28387 19.7236 8.41916C20.4816 8.55839 21.1267 8.82363 21.6517 9.34856C22.2536 9.95048 22.5125 10.7084 22.6335 11.6085C22.75 12.4754 22.75 13.5778 22.75 14.9453V16.0551C22.75 17.4227 22.75 18.525 22.6335 19.392C22.5125 20.2921 22.2536 21.0499 21.6517 21.6519C21.0497 22.2538 20.2919 22.5127 19.3918 22.6337C18.5248 22.7503 17.4225 22.7502 16.0549 22.7502H7.94513C6.57754 22.7502 5.47522 22.7503 4.60825 22.6337C3.70814 22.5127 2.95027 22.2538 2.34835 21.6519C1.74643 21.0499 1.48754 20.2921 1.36652 19.392C1.24996 18.525 1.24998 17.4227 1.25 16.0551V14.9453C1.24998 13.5777 1.24996 12.4754 1.36652 11.6085C1.48754 10.7084 1.74643 9.95048 2.34835 9.34856C2.87328 8.82363 3.51835 8.55839 4.27635 8.41916C5.01291 8.28386 5.9143 8.25798 6.99583 8.25196Z" fill="#1C274C"/>
</svg>
</div>   
                  <h6 className="input-h1">Drop Your File Here</h6>
                  <p className="input-para">or</p> 
                <div className="incontainer">
                <div
                  className="input-btn"
                  type="file"
                  onChange={(e) => OhandleFileChange(e, "mandatory")}
                >
                  Browse
                </div>
                </div>
                <p className="input-file">Maximum File size is 4MB</p> 
                </label>
    
                {formData.mandatory && (
                      <p>{formData.mandatory.name}</p>
                    )}
               
              </div>


              {uploadProgress.mandatory > 0 && (
                <div className="progress mt-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress.mandatory}%` }}
                    aria-valuenow={uploadProgress.mandatory}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {uploadProgress.mandatory}%
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Optional Document Upload */}
          <div className="col-md-6">
            <div className="upload-box">
              <h5>Optional Documents</h5>
              <div className="file-upload">
                <input
                  type="file"
                  id="optional-upload"
                  onChange={(e) => OhandleFileChange(e, "optional")}
                />
                <label htmlFor="optional-upload">
                <div className="svg">
                <svg width="50" color="blue" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2189 1.25 12.427 1.34567 12.5694 1.51191L15.5694 5.01191C15.839 5.3264 15.8026 5.79988 15.4881 6.06944C15.1736 6.33901 14.7001 6.30259 14.4306 5.98809L12.75 4.02744L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15L11.25 4.02744L9.56944 5.98809C9.29988 6.30259 8.8264 6.33901 8.51191 6.06944C8.19741 5.79988 8.16099 5.3264 8.43056 5.01191L11.4306 1.51191C11.573 1.34567 11.7811 1.25 12 1.25ZM6.99583 8.25196C7.41003 8.24966 7.74768 8.58357 7.74999 8.99778C7.7523 9.41198 7.41838 9.74963 7.00418 9.75194C5.91068 9.75803 5.1356 9.78642 4.54735 9.89448C3.98054 9.99859 3.65246 10.1658 3.40901 10.4092C3.13225 10.686 2.9518 11.0746 2.85315 11.8083C2.75159 12.5637 2.75 13.5648 2.75 15.0002V16.0002C2.75 17.4356 2.75159 18.4367 2.85315 19.1921C2.9518 19.9259 3.13225 20.3144 3.40901 20.5912C3.68577 20.868 4.07434 21.0484 4.80812 21.1471C5.56347 21.2486 6.56458 21.2502 8 21.2502H16C17.4354 21.2502 18.4365 21.2486 19.1919 21.1471C19.9257 21.0484 20.3142 20.868 20.591 20.5912C20.8678 20.3144 21.0482 19.9259 21.1469 19.1921C21.2484 18.4367 21.25 17.4356 21.25 16.0002V15.0002C21.25 13.5648 21.2484 12.5637 21.1469 11.8083C21.0482 11.0746 20.8678 10.686 20.591 10.4092C20.3475 10.1658 20.0195 9.99859 19.4527 9.89448C18.8644 9.78642 18.0893 9.75803 16.9958 9.75194C16.5816 9.74963 16.2477 9.41198 16.25 8.99778C16.2523 8.58357 16.59 8.24966 17.0042 8.25196C18.0857 8.25798 18.9871 8.28387 19.7236 8.41916C20.4816 8.55839 21.1267 8.82363 21.6517 9.34856C22.2536 9.95048 22.5125 10.7084 22.6335 11.6085C22.75 12.4754 22.75 13.5778 22.75 14.9453V16.0551C22.75 17.4227 22.75 18.525 22.6335 19.392C22.5125 20.2921 22.2536 21.0499 21.6517 21.6519C21.0497 22.2538 20.2919 22.5127 19.3918 22.6337C18.5248 22.7503 17.4225 22.7502 16.0549 22.7502H7.94513C6.57754 22.7502 5.47522 22.7503 4.60825 22.6337C3.70814 22.5127 2.95027 22.2538 2.34835 21.6519C1.74643 21.0499 1.48754 20.2921 1.36652 19.392C1.24996 18.525 1.24998 17.4227 1.25 16.0551V14.9453C1.24998 13.5777 1.24996 12.4754 1.36652 11.6085C1.48754 10.7084 1.74643 9.95048 2.34835 9.34856C2.87328 8.82363 3.51835 8.55839 4.27635 8.41916C5.01291 8.28386 5.9143 8.25798 6.99583 8.25196Z" fill="#1C274C"/>
</svg>
</div>   
                  <h6 className="input-h1">Drop Your File Here</h6>
                  <p className="input-para">or</p> 
                <div className="incontainer">
                <div
                  className="input-btn"
                  type="file"
                  onChange={(e) => OhandleFileChange(e, "mandatory")}
                >
                  Browse
                </div>
                </div>
                <p className="input-file">Maximum File size is 4MB</p> 
                </label>
                {/* {formData.mandatory && (
                      <p>{formData.optional.name}</p>
                    )} */}
              </div>
          
              {formData.optional && uploadProgress.optional > 0 && (
                <div className="progress mt-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${uploadProgress.optional}%` }}
                    aria-valuenow={uploadProgress.optional}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {uploadProgress.optional}%
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
         
        </div>
      
      </div>
    </>
  );
}