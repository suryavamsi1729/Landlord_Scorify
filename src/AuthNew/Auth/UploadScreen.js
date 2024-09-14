import { React, useCallback, useState, useRef ,useEffect,useContext} from "react";
import "./UploadScreen.css";
import DropDown from "./DropDown";
import { FormDataContext } from "../../Context/FormDataContext";
import "./FileUpload.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { MainContext } from '../../Context/MainContext';
import api from "../../api";

export default function UploadScreen() {
  const {email} = useContext(MainContext);
  const {dispatch,formdata} = useContext(FormDataContext);
  const [address, setAddress] = useState({
    formatted_address_1: '',
    formatted_address_2: '',
    formatted_address_3: '',
    formatted_address_4: '',
    postcode:''
});
  const navigate = useNavigate();
  const [Message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    mandatory: null,
    optional: null, 
  });
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}.slice(-2)`;
    const day = `0${date.getDate()}.slice(-2)`;
    return `${year}-${month}-${day}`;
  };
  const [getoption,setoption] = useState("Gas Safety");
  const SetOption = (ele)=>{
      if(ele === ""){
        setoption(getoption);
      }
      else{
        setoption(ele);
      }
  };
  const [files, setFiles] = useState({
    inventoryReport: null,
    epcReport: null,
    inspectionReport: null,
  });
  const [optionalfiles,setoptionalfiles] = useState(
    {
      "Gas Safety":null,
      "EICR":null,
      "Fire Safety":null,
      "Insurance Policy":null,
      "Tenancy Agreement":null,
    }
  );
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState({
    inventoryReport: 0,
    epcReport: 0,
    inspectionReport: 0,
  });
  const [filename,setFilename]=useState("");
  // const {email} = useContext(MainContext);
  // Refs for file inputs
  const inventoryRef = useRef();
  const epcRef = useRef();
  const inspectionRef = useRef();

  // Handle file selection
  const handleFileChange = (e,opt) => {
    console.log(opt);
    console.log(getoption);

    console.log("hangelFileChanges");
    const { name, files: selectedFiles } = e.target;
    const size = selectedFiles?.size; // it's in bytes
    //added a max file size limit of 100Kb
    if (size / (1024 * 1024) > 4) {
      setMessage("File Size is less than 4MB");
      return;
    }
    if(opt==="optional"){
      console.log(selectedFiles[0]);
      setoptionalfiles((prevFiles) => ({
        ...prevFiles,
        [getoption]: selectedFiles[0],
      }));
      setFilename(selectedFiles[0]?.name);
    }
    else{
      setFiles((prevFiles) => ({
        ...prevFiles,
        [name]: selectedFiles[0],
      }));
    }
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.getaddress.io/scripts/getaddress-autocomplete-1.3.6.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      
      if (window.getAddress) {
        window.getAddress.autocomplete(
          'textbox_id',
          'cX9Pb7orKE2O7p4wr9uHZg43744',
          {
            output_fields: {
              formatted_address_1: 'formatted_address_1',
              formatted_address_2: 'formatted_address_2',
              formatted_address_3: 'formatted_address_3',
              formatted_address_4: 'formatted_address_4',
              postcode: 'postcode'
            },
            select_on_focus: true,
            clear_list_on_select: true,
            suggestion_count: 6,
            minimum_characters: 2,
            bind_output_fields: true
          }
        );
      }


      document.addEventListener("getaddress-autocomplete-suggestions", function (e) {
        console.log(e.suggestions);
      });

      document.addEventListener("getaddress-autocomplete-suggestions-failed", function (e) {
        console.log(e.status);
        console.log(e.message);
      });

      document.addEventListener("getaddress-autocomplete-address-selected", function (e) {
        const selectedAddress = e.address;

        setAddress({
          formatted_address_1: selectedAddress.line_1 || '',
          formatted_address_2: selectedAddress.line_2 || '',
          formatted_address_3: selectedAddress.town_or_city || '',
          formatted_address_4: selectedAddress.county || '',
          postcode: selectedAddress.postcode || ''
        });
      });

      document.addEventListener("getaddress-autocomplete-address-selected-failed", function (e) {
        console.log(e.status);
        console.log(e.message);
      });
    };

    return () => {
      document.body.removeChild(script);
    };
},[]);
const [zip,setZip]=useState('');
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
    if(!zip){
      window.alert("Please enter zipcode");
      return;
    }
    e.preventDefault();
    setLoading(true);
    let jsonObj = {};
    let dataToContext = {};
    const formData = new FormData();
    const today = new Date();
    Object.entries(files).forEach(([key, file]) => {
      if (file) {
        jsonObj = {
          ...jsonObj,
          report: file.name,
        };

      }
    });
    formData.append(
      "jsonObj",
      new Blob([JSON.stringify(jsonObj)], {
        type: "application/json",
      })
    );
    try {
      formData.append("report", files.inventoryReport);
      {files.epcReport && formData.append("epcReport", files.epcReport);}
      {files.inspectionReport && formData.append("inspectionReport", files.inspectionReport);}
      {optionalfiles.EICR &&  formData.append("EICR", optionalfiles.EICR);}
      {optionalfiles["Gas Safety"] &&  formData.append("Gas Safety", optionalfiles.EICR);}
      {optionalfiles["Fire Safety"] &&  formData.append("Fire Safety", optionalfiles.EICR);}
      {optionalfiles["Tenancy Agreement"] &&  formData.append("Tenancy Agreement", optionalfiles.EICR);}
      {optionalfiles["Insurance Policy"] &&  formData.append("Insurance Policy", optionalfiles.EICR);}
      formData.append("date", "2024-06-11");
      formData.append("type", "Initial Inspection");
      formData.append("title", "Annual property Inspection Report");
      formData.append("expiry_date","2024-06-11");
      formData.append("past_inventory", "False");
      formData.append('address', `${address.formatted_address_1} ${address.formatted_address_2}`);
      formData.append('zipcode', address.postcode);
      formData.append('city', `${address.formatted_address_3} ${address.formatted_address_4}`);
      formData.append('house_name',zip);
      dataToContext = {
        ...dataToContext,
        "report":files.inventoryReport,
        "epcReport": files.epcReport,
        "inspectionReport": files.inspectionReport,
        "EICR": optionalfiles.EICR,
        "Gas Safety":optionalfiles["Gas Safety"],
        "Fire Safety":optionalfiles["Fire Safety"],
        "Insurance Policy":optionalfiles["Insurance Policy"],
        "Insurance Policy":optionalfiles["Insurance Policy"],
        "date": "2024-06-11",
        "type":"Initial Inspection",
        "title":"Annual property Inspection Report",
        "expiry_date":"2024-06-11",
        "past_inventory":"False",
        'address':`${address.formatted_address_1} ${address.formatted_address_2}`,
        'zipcode':address.postcode,
        'city': `${address.formatted_address_3} ${address.formatted_address_4}`,
        'house_name':zip,
      }
      const token = localStorage.getItem("access_token");
      // const response = await axios.post(
      //   "",
      //   formData,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //       "Content-Type": "multipart/form-data",
      //     },
      //     onUploadProgress: ({ loaded, total }) => {
      //       const percentCompleted = Math.round((loaded / total) * 100);
      //       setUploadProgress(percentCompleted);
      //     },
      //   }
      // );

     

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
      dispatch({
        type:"formdata",
        payload:{
            formdata:dataToContext,
        },
      });

    const response =await api.post('accounts/sendotp', { 
        email:email 
    });
      window.alert("Uploaded Successfully");
      setLoading(false);
      navigate("/verifyotp"); 
    } catch (error) {
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
      {loading && <Spinner/>}
      <div className="UploadContainer d-flex flex-column justify-content-between align-items-center p-5">
        <div className="Logo">
          <img className="BrandLogoImg" src="/BrandLogo.jpg" alt="BrandLogo" />
        </div>
        <div className="InputRows d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol d-flex flex-column w-100">
                                <label className="userName py-1">Zip Code</label>
                                <div className="InputContainer">
                                    {/* <input className="pswEle" onChange={(ev) => setZip(ev.target.value)} placeholder='Enter Code' id="textbox_id" type="text" /> */}
                                    <input className="pswEle" onChange={(ev) => setZip(ev.target.value)} placeholder='Enter Zip Code' id="textbox_id" type="text" required/>
                                </div>
                            </div>
            </div>
        <h1 className="HeadingProfile m-0 text-center">Upload Document</h1>

        <div className="w-100 h-auto">
          <form
            onSubmit={handleSubmit}
            className="w-100 h-auto d-flex flex-column justify-content-center align-items-center gap-3"
          >
            <div className="row h-100">
            <div className="col-md-6 h-100 d-flex flex-column align-items-center gap-5">
            <h5 className="m-0">Mandatory Documents</h5>
            <div className="DocumentsSection w-auto h-auto d-flex flex-column justify-content-start align-items-center gap-3">
              <div className="UploadItmContainer w-auto d-flex flex-row justify-content-center align-items-center">
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

                <div className="DocumentNameContainer  d-flex flex-column justify-content-center align-items-start">
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
              <div className="UploadItmContainer w-auto d-flex flex-row justify-content-center align-items-center">
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
              <div className="UploadItmContainer w-auto d-flex flex-row justify-content-center align-items-center">
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
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center ">
            <div className="upload-box">
                
              <h5>Optional Documents</h5>
              <DropDown setoption={SetOption}/>
              <div className="file-upload">
                <input
                  type="file"
                  id="optional-upload"
                  onChange={(e) => handleFileChange(e, "optional")}
                />
                <label htmlFor="optional-upload">
                <div className="svg p-0">
                <svg width="50" color="blue" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.2189 1.25 12.427 1.34567 12.5694 1.51191L15.5694 5.01191C15.839 5.3264 15.8026 5.79988 15.4881 6.06944C15.1736 6.33901 14.7001 6.30259 14.4306 5.98809L12.75 4.02744L12.75 15C12.75 15.4142 12.4142 15.75 12 15.75C11.5858 15.75 11.25 15.4142 11.25 15L11.25 4.02744L9.56944 5.98809C9.29988 6.30259 8.8264 6.33901 8.51191 6.06944C8.19741 5.79988 8.16099 5.3264 8.43056 5.01191L11.4306 1.51191C11.573 1.34567 11.7811 1.25 12 1.25ZM6.99583 8.25196C7.41003 8.24966 7.74768 8.58357 7.74999 8.99778C7.7523 9.41198 7.41838 9.74963 7.00418 9.75194C5.91068 9.75803 5.1356 9.78642 4.54735 9.89448C3.98054 9.99859 3.65246 10.1658 3.40901 10.4092C3.13225 10.686 2.9518 11.0746 2.85315 11.8083C2.75159 12.5637 2.75 13.5648 2.75 15.0002V16.0002C2.75 17.4356 2.75159 18.4367 2.85315 19.1921C2.9518 19.9259 3.13225 20.3144 3.40901 20.5912C3.68577 20.868 4.07434 21.0484 4.80812 21.1471C5.56347 21.2486 6.56458 21.2502 8 21.2502H16C17.4354 21.2502 18.4365 21.2486 19.1919 21.1471C19.9257 21.0484 20.3142 20.868 20.591 20.5912C20.8678 20.3144 21.0482 19.9259 21.1469 19.1921C21.2484 18.4367 21.25 17.4356 21.25 16.0002V15.0002C21.25 13.5648 21.2484 12.5637 21.1469 11.8083C21.0482 11.0746 20.8678 10.686 20.591 10.4092C20.3475 10.1658 20.0195 9.99859 19.4527 9.89448C18.8644 9.78642 18.0893 9.75803 16.9958 9.75194C16.5816 9.74963 16.2477 9.41198 16.25 8.99778C16.2523 8.58357 16.59 8.24966 17.0042 8.25196C18.0857 8.25798 18.9871 8.28387 19.7236 8.41916C20.4816 8.55839 21.1267 8.82363 21.6517 9.34856C22.2536 9.95048 22.5125 10.7084 22.6335 11.6085C22.75 12.4754 22.75 13.5778 22.75 14.9453V16.0551C22.75 17.4227 22.75 18.525 22.6335 19.392C22.5125 20.2921 22.2536 21.0499 21.6517 21.6519C21.0497 22.2538 20.2919 22.5127 19.3918 22.6337C18.5248 22.7503 17.4225 22.7502 16.0549 22.7502H7.94513C6.57754 22.7502 5.47522 22.7503 4.60825 22.6337C3.70814 22.5127 2.95027 22.2538 2.34835 21.6519C1.74643 21.0499 1.48754 20.2921 1.36652 19.392C1.24996 18.525 1.24998 17.4227 1.25 16.0551V14.9453C1.24998 13.5777 1.24996 12.4754 1.36652 11.6085C1.48754 10.7084 1.74643 9.95048 2.34835 9.34856C2.87328 8.82363 3.51835 8.55839 4.27635 8.41916C5.01291 8.28386 5.9143 8.25798 6.99583 8.25196Z" fill="#1C274C"/>
</svg>
</div>   
                  <h6 className="input-h1 p-0">Drop Your File Here</h6>
                  <p className="input-para p-0">or</p> 
                <div className="incontainer p-0">
                <div
                  className="input-btn"
                  type="file"
                  onChange={(e) => handleFileChange(e, "mandatory")}
                >
                  Browse
                </div>
                </div>
                <p className="input-file">Maximum File size is 4MB</p> 
                <p className="namefile">{filename} </p>
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
    
      </div>
    </>
  );
}