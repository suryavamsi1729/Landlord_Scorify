import { React, useCallback, useState, useRef } from "react";
import "./UploadScreen.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FileSpinner from "../../components/Spinner/FileSpinner";
export default function UploadScreen() {
  const navigate = useNavigate();
  const [Message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}.slice(-2)`;
    const day = `0${date.getDate()}.slice(-2)`;
    return `${year}-${month}-${day}`;
  };
  const [files, setFiles] = useState({
    inventoryReport: null,
    epcReport: null,
    inspectionReport: null,
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState({
    inventoryReport: 0,
    epcReport: 0,
    inspectionReport: 0,
  });
  // Refs for file inputs
  const inventoryRef = useRef();
  const epcRef = useRef();
  const inspectionRef = useRef();

  // Handle file selection
  const handleFileChange = (e) => {
    console.log("hangelFileChanges");
    const { name, files: selectedFiles } = e.target;
    const size = selectedFiles?.size; // it's in bytes
    //added a max file size limit of 100Kb
    if (size / (1024 * 1024) > 4) {
      setMessage("File Size is less than 4MB");
      return;
    }
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: selectedFiles[0],
    }));
  };

  // Handle unselecting the file
  const handleUnselect = (fileType) => {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: null,
    }));

    // Clear the input field
    if (fileType === "inventoryReport") inventoryRef.current.value = null;
    if (fileType === "epcReport") epcRef.current.value = null;
    if (fileType === "inspectionReport") inspectionRef.current.value = null;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let jsonObj = {};
    const formData = new FormData();
    const today = new Date();
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        jsonObj = {
          ...jsonObj,
          report: file.name,
        };
        // formData.append(key, file.name);
        // console.log(file.name);
      }
      //   console.log(formData);
    });
    formData.append(
      "jsonObj",
      new Blob([JSON.stringify(jsonObj)], {
        type: "application/json",
      })
    );

    try {
      formData.append("report", files.inventoryReport);
      formData.append("date", "2024-06-11");
      formData.append("type", "Initial Inspection");
      formData.append("title", "Annual property Inspection Report");
      formData.append(
        "expiry_date","2024-06-11");
      formData.append("past_inventory", "False");
      console.log("trying");
      const token = localStorage.getItem("access_token");
      const response = await axios.post(
        "http://127.0.0.1:8000/landlord/upload-report/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: ({ loaded, total }) => {
            const percentCompleted = Math.round((loaded / total) * 100);
            setUploadProgress(percentCompleted);
          },
        }
      );

     
      // console.log("testing");
      // console.log(response.data);
      //   alert("Files uploaded successfully!");
      setUploadProgress(0);
      setUploadComplete((pre) => ({
        ...pre,
        inventoryReport: 1,
        epcReport: 0,
        inspectionReport: 0,
      }));
      setFiles((pre) => ({
        ...pre,
        inventoryReport: null,
        epcReport: null,
        inspectionReport: null,
      }));
      window.alert("Uploaded Successfully");
      setLoading(false);
      navigate("/dashboard"); 
    } catch (error) {
      // console.log("Error uploading files:", error);
      //   alert("Failed to upload files.");
      setMessage("Upload Failed");
      setUploadProgress(0);
      setUploadComplete((pre) => ({
        ...pre,
        inventoryReport: 0,
        epcReport: 0,
        inspectionReport: 0,
      }));
      setFiles((pre) => ({
        ...pre,
        inventoryReport: null,
        epcReport: null,
        inspectionReport: null,
      }));
    }finally{
      setLoading(false);
    }
  };
  // Trigger file input click
  const handleBrowseClick = (ref) => {
    ref.current.click();
  };
 
  return (
    <>
      {loading && <FileSpinner/>}
      <div className="UploadContainer d-flex flex-column justify-content-between align-items-center p-5">
        <div className="Logo">
          <img className="BrandLogoImg" src="/BrandLogo.jpg" alt="BrandLogo" />
        </div>
        <h1 className="HeadingProfile m-0 text-center">Upload Document</h1>

        <div className="w-auto h-auto">
          <form
            onSubmit={handleSubmit}
            className="w-auto h-auto d-flex flex-column justify-content-center align-items-center gap-3"
          >
            <div className="DocumentsSection w-auto h-auto d-flex flex-column justify-content-start align-items-center gap-3">
              <div className="UploadItmContainer d-flex flex-row justify-content-center align-items-center">
                <div
                  className="TickContaoner d-flex flex-column justify-content-center align-items-center"
                  style={
                    uploadComplete.inventoryReport == 1
                      ? { backgroundColor: "#22C55E", borderColor: "#22C55E" }
                      : {}
                  }
                >
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.24121 3.20821L3.21954 5.18571L7.17454 1.23071"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="DocumentIconContainer d-flex flex-column justify-content-center align-items-center">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2572 1.2915C11.2572 1.2915 4.85965 1.29484 4.84965 1.29484C2.54965 1.309 1.12549 2.82234 1.12549 5.13067V12.794C1.12549 15.114 2.56049 16.6332 4.88049 16.6332C4.88049 16.6332 11.2772 16.6307 11.288 16.6307C13.588 16.6165 15.013 15.1023 15.013 12.794V5.13067C15.013 2.81067 13.5772 1.2915 11.2572 1.2915Z"
                      fill="#21296D"
                      stroke="#21296D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0967 12.5194H5.08008"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0967 9.03068H5.08008"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.37616 5.54997H5.08032"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="DocumentNameContainer d-flex flex-column justify-content-center align-items-start">
                  <p className="m-0 NameText">Inventory Report</p>
                  {inventoryRef.current?.value && (
                    <p className="m-0 Mb-text">{`${(
                      inventoryRef.current.files[0]?.size /
                      (1024 * 1024)
                    ).toFixed(3)} MB`}</p>
                  )}
                </div>
                <button
                  className="EachBrowsBtn"
                  type="button"
                  onClick={() => handleBrowseClick(inventoryRef)}
                >
                  Browse
                </button>
                <input
                  type="file"
                  name="inventoryReport"
                  onChange={handleFileChange}
                  ref={inventoryRef} // Reference to the input
                  style={{ display: "none" }}
                />
                {files.inventoryReport && (
                  <div
                    onClick={() => handleUnselect("inventoryReport")}
                    className="WrongIConContainer d-flex flex-column justify-content-center align-items-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9963 6.99561L7.00293 10.9889"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9974 10.9914L7.00073 6.9939"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.612 1.29175H5.38783C2.87033 1.29175 1.29199 3.07425 1.29199 5.59675V12.4034C1.29199 14.9259 2.86283 16.7084 5.38783 16.7084H12.6112C15.137 16.7084 16.7087 14.9259 16.7087 12.4034V5.59675C16.7087 3.07425 15.137 1.29175 12.612 1.29175Z"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="UploadItmContainer d-flex flex-row justify-content-center align-items-center">
                <div
                  className="TickContaoner d-flex flex-column justify-content-center align-items-center"
                  style={
                    uploadComplete.epcReport == 1
                      ? { backgroundColor: "#22C55E", borderColor: "#22C55E" }
                      : {}
                  }
                >
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.24121 3.20821L3.21954 5.18571L7.17454 1.23071"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="DocumentIconContainer d-flex flex-column justify-content-center align-items-center">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2572 1.2915C11.2572 1.2915 4.85965 1.29484 4.84965 1.29484C2.54965 1.309 1.12549 2.82234 1.12549 5.13067V12.794C1.12549 15.114 2.56049 16.6332 4.88049 16.6332C4.88049 16.6332 11.2772 16.6307 11.288 16.6307C13.588 16.6165 15.013 15.1023 15.013 12.794V5.13067C15.013 2.81067 13.5772 1.2915 11.2572 1.2915Z"
                      fill="#21296D"
                      stroke="#21296D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0967 12.5194H5.08008"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0967 9.03068H5.08008"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.37616 5.54997H5.08032"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="DocumentNameContainer d-flex flex-column justify-content-center align-items-start">
                  <p className="m-0 NameText">EPC Report</p>
                  {epcRef.current?.value && (
                    <p className="m-0 Mb-text">{`${(
                      epcRef.current.files[0]?.size /
                      (1024 * 1024)
                    ).toFixed(3)} MB`}</p>
                  )}
                </div>
                <button
                  className="EachBrowsBtn"
                  type="button"
                  onClick={() => handleBrowseClick(epcRef)}
                >
                  Browse
                </button>
                <input
                  type="file"
                  name="epcReport"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={epcRef} // Reference to the input
                  style={{ display: "none" }}
                />
                {files.epcReport && (
                  <div
                    onClick={() => handleUnselect("epcReport")}
                    className="WrongIConContainer d-flex flex-column justify-content-center align-items-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9963 6.99561L7.00293 10.9889"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9974 10.9914L7.00073 6.9939"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.612 1.29175H5.38783C2.87033 1.29175 1.29199 3.07425 1.29199 5.59675V12.4034C1.29199 14.9259 2.86283 16.7084 5.38783 16.7084H12.6112C15.137 16.7084 16.7087 14.9259 16.7087 12.4034V5.59675C16.7087 3.07425 15.137 1.29175 12.612 1.29175Z"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="UploadItmContainer d-flex flex-row justify-content-center align-items-center">
                <div
                  className="TickContaoner d-flex flex-column justify-content-center align-items-center"
                  style={
                    uploadComplete.inspectionReport == 1
                      ? { backgroundColor: "#22C55E", borderColor: "#22C55E" }
                      : {}
                  }
                >
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.24121 3.20821L3.21954 5.18571L7.17454 1.23071"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="DocumentIconContainer d-flex flex-column justify-content-center align-items-center">
                  <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2572 1.2915C11.2572 1.2915 4.85965 1.29484 4.84965 1.29484C2.54965 1.309 1.12549 2.82234 1.12549 5.13067V12.794C1.12549 15.114 2.56049 16.6332 4.88049 16.6332C4.88049 16.6332 11.2772 16.6307 11.288 16.6307C13.588 16.6165 15.013 15.1023 15.013 12.794V5.13067C15.013 2.81067 13.5772 1.2915 11.2572 1.2915Z"
                      fill="#21296D"
                      stroke="#21296D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0967 12.5194H5.08008"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.0967 9.03068H5.08008"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7.37616 5.54997H5.08032"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div className="DocumentNameContainer d-flex flex-column justify-content-center align-items-start">
                  <p className="m-0 NameText">Inspection Report</p>
                  {inspectionRef.current?.value && (
                    <p className="m-0 Mb-text">{`${(
                      inspectionRef.current.files[0]?.size /
                      (1024 * 1024)
                    ).toFixed(3)} MB`}</p>
                  )}
                </div>
                <button
                  className="EachBrowsBtn"
                  type="button"
                  onClick={() => handleBrowseClick(inspectionRef)}
                >
                  Browse
                </button>
                <input
                  type="file"
                  name="inspectionReport"
                  onChange={handleFileChange}
                  ref={inspectionRef} // Reference to the input
                  style={{ display: "none" }}
                />
                {files.inspectionReport && (
                  <div
                    onClick={() => handleUnselect("inspectionReport")}
                    className="WrongIConContainer d-flex flex-column justify-content-center align-items-center"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.9963 6.99561L7.00293 10.9889"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.9974 10.9914L7.00073 6.9939"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.612 1.29175H5.38783C2.87033 1.29175 1.29199 3.07425 1.29199 5.59675V12.4034C1.29199 14.9259 2.86283 16.7084 5.38783 16.7084H12.6112C15.137 16.7084 16.7087 14.9259 16.7087 12.4034V5.59675C16.7087 3.07425 15.137 1.29175 12.612 1.29175Z"
                        stroke="#21296D"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            {/* Progress Bar */}
            {uploadProgress > 0 && (
              <div style={{ marginTop: "20px" }}>
                <progress value={uploadProgress} max="100" />
                <span> {uploadProgress}%</span>
              </div>
            )}

            {/* Submit Button */}
            <button className="EachBrowsBtn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="text-center">
          {Message == "" ? null : (
            <p
              className="MessageText"
              style={
                Message == "Uploaded Successfully"
                  ? { color: "#22C55E" }
                  : { color: "red" }
              }
            >
              {Message}
            </p>
          )}
        </div>
        <div className="footerSection  d-flex flex-row justify-content-between">
          <p className="Text-ele text-start m-0">EcoMobile d.o.c.</p>
          <p className="Text-ele text-end m-0">+385-1-555-66-36</p>
        </div>
      </div>
    </>
  );
}