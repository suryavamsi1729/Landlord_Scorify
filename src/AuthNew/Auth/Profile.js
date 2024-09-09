import React, { useState,useEffect} from "react";
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";
import axios from "axios";
import './ProfileStyle.css';
import { useNavigate } from 'react-router-dom';
import api from "../../api";
import { type } from "@testing-library/user-event/dist/type";
import Spinner from "../../components/Spinner/Spinner";

export default function ProfileScreen() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [code, setCode] = useState('code');
    const [profileImage, setProfileImage] = useState(null);
    const [previewImage, setPreviewImage] = useState("/profile.png"); 
    const [error, setError] = useState('');
    const [zip,setZip]=useState('');
    const navigate=useNavigate();
    const [secAdd,setSecAdd] = useState('');
    const [trdAdd,setTrdAdd] = useState('');
    const [town,setTown] = useState('');
    const [country,setCountry] = useState('');
    const [postCode,setPostCode] = useState('');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const {dispatch} = useContext(MainContext);
    const [loading, setLoading] = useState(false);

    const [address, setAddress] = useState({
        formatted_address_1: '',
        formatted_address_2: '',
        formatted_address_3: '',
        formatted_address_4: '',
        postcode: ''
      });
        
    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();

        dispatch({
            type:"emailset",
            payload:{
                email:emailAddress
            },
        })
        setError('');

        if (!firstName || !lastName || !emailAddress || !password || !confirmPassword || !phoneNumber) {
            setError('Please fill all the fields');
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            setLoading(false);
            return;
        }
        if (!passwordRegex.test(password)) {
            setError("Password must be at least 8 characters long, contain at least one uppercase letter, and one number");
            setLoading(false);
            return;
        }
       
     const phoneRegex = /^[0-9]{10}$/;
    if(!phoneRegex.test(phoneNumber)){
    setError('Please enter a valid 10-digit phone number');
    setLoading(false);
    return;
 }
        try {
            const formData = new FormData();
        // formData.append('profile_photo', profileImage); 
        formData.append('email', emailAddress);
        formData.append('password', password);
        formData.append('password2', confirmPassword);
        formData.append('user_type', "landlord");
        formData.append('name', `${firstName} ${lastName}`);
        formData.append('phone', phoneNumber);
        formData.append('address', `${address.formatted_address_1} ${address.formatted_address_2}`);
        formData.append('zipcode', address.postcode);
        formData.append('city', `${address.formatted_address_3} ${address.formatted_address_4}`);
        formData.append('house_name', zip);  

        const response = await api.post('accounts/landlord/signup/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
            setLoading(false);
            if (response.status === 200){
                navigate('/verifyotp');
            }
            else if(response.status==400){
                setLoading(false);
                window.alert("Please signup again");
                navigate('/signup');
            }
        } catch (error){
            setLoading(false);
            if (error.response && error.response.data) {
                setError(error.response.data.message);
                console.log(error.response);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setProfileImage(file);
            setPreviewImage(URL.createObjectURL(file)); 
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
        //   document.removeEventListener("getaddress-autocomplete-suggestions", () => {});
        //   document.removeEventListener("getaddress-autocomplete-suggestions-failed", () => {});
        //   document.removeEventListener("getaddress-autocomplete-address-selected", () => {});
        //   document.removeEventListener("getaddress-autocomplete-address-selected-failed", () => {});
          document.body.removeChild(script);
        };
      }, []);


    return (
        <>
            {loading && <Spinner />}
            <div className="ProfileScreenContainer d-flex flex-column justify-content-between align-items-center p-5">
                <div className="Logo">
                    <img className="BrandLogoImg" src="/BrandLogo.jpg" alt="BrandLogo" />
                </div>
                <h1 className="HeadingProfile m-0 text-center">Profile Details</h1>
                <form className="DetailesContainer d-flex flex-column justify-content-between align-items-center" onSubmit={handleSubmit}>

                    <div className="ProfileImgContainer">
                        <img className="ProfileImg" src={previewImage} alt="ImgProfile" />
                        <div className="EditSection d-flex flex-column justify-content-center align-items-center">
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageChange} 
                                style={{ display: "none" }} 
                                id="upload-profile-image"
                            />
                            <label htmlFor="upload-profile-image" style={{ cursor: "pointer" }}>
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4562 16.0358H16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.65001 2.16233C10.2964 1.38982 11.4583 1.27655 12.2469 1.90978C12.2905 1.94413 13.6912 3.03232 13.6912 3.03232C14.5575 3.55599 14.8266 4.66925 14.2912 5.51882C14.2627 5.56432 6.34329 15.4704 6.34329 15.4704C6.07981 15.7991 5.67986 15.9931 5.25242 15.9978L2.21961 16.0358L1.53628 13.1436C1.44055 12.7369 1.53628 12.3098 1.79975 11.9811L9.65001 2.16233Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.18396 4.00073L12.7275 7.49" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </label>
                        </div>
                    </div>
                    <div className="DetailesSection d-flex flex-column align-items-center justify-content-center gap-3">
                        <div className="InputRows d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol d-flex flex-column">
                                <label className="userName">First Name</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setFirstName(ev.target.value)} placeholder='Enter First Name' required type="text" />
                                </div>
                            </div>
                            <div className="InputCol d-flex flex-column">
                                <label className="userName">Last Name</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => {
                                        setLastName(ev.target.value);
                                        console.log("SetvalueS");
                                        }}
                                        placeholder='Enter Last Name' required type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="InputRows d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol d-flex flex-column">
                                <label className="userName">Email Address</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => {
                                        setEmailAddress(ev.target.value);
                                        }} 
                                        placeholder='Enter Email Address' required type="email" />
                                </div>
                            </div>
                            <div className="InputCol d-flex flex-column">
                                <label className="userName">Phone Number</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setPhoneNumber(ev.target.value)} placeholder='Enter Phone Number' required type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="InputRows d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol d-flex flex-column">
                                <label className="userName">Password</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setPassword(ev.target.value)} placeholder='Enter Password' required type="password" />
                                </div>
                            </div>
                            <div className="InputCol d-flex flex-column">
                                <label className="userName">Confirm Password</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setConfirmPassword(ev.target.value)} placeholder='Confirm Password' required type="password" />
                                </div>
                            </div>
                        </div>
                        <div className="InputRows d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol d-flex flex-column w-100">
                                <label className="userName">Zip Code</label>
                                <div className="InputContainer">
                                    {/* <input className="pswEle" onChange={(ev) => setZip(ev.target.value)} placeholder='Enter Code' id="textbox_id" type="text" /> */}
                                    <input className="pswEle" onChange={(ev) => setZip(ev.target.value)} placeholder='Enter Zip Code' id="textbox_id" type="text" required/>
                                </div>
                            </div>
                        </div>

                        <div className="InputRows w-100 d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol w-50 d-flex flex-column">
                                <label className="userName">Second Address Line</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setSecAdd(ev.target.value)} id="formatted_address_1" type="text" />
                                </div>
                            </div>
                            <div className="InputCol w-50 d-flex flex-column">
                                <label className="userName">Third Address Line</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setTrdAdd(ev.target.value)} id="formatted_address_2" type="text" required/>
                                </div>
                            </div>
                        </div>
                        <div className="InputRows w-100 d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol w-50 d-flex flex-column">
                                <label className="userName">Town</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setTown(ev.target.value)} id="formatted_address_3" type="text" required/>
                                </div>
                            </div>

                            <div className="InputCol w-50 d-flex flex-column">
                                <label className="userName">Country</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onChange={(ev) => setCountry(ev.target.value)} id="formatted_address_4" type="text" required/>
                                </div>
                            </div>
                        </div>
                        <div className="InputRows w-100 d-flex flex-row justify-content-center align-items-center gap-3">
                            <div className="InputCol w-100 d-flex flex-column">
                                <label className="userName">PostCode</label>
                                <div className="InputContainer">
                                    <input className="pswEle" onSelect={(ev) => setPostCode(ev.target.value)} id="postcode" type="text" required/>
                                </div>
                            </div>
                        </div>
                            

                        <div className="InputRows d-flex flex-column justify-content-center align-items-center gap-1">
                        {/* <div style={{cursor:'pointer'}} className="InputContainer d-flex flex-row justify-content-center align-items-center gap-1">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.1579 6.48661H4.3804C2.68457 6.48661 1.30957 7.86161 1.30957 9.55744L1.30957 13.6199C1.30957 15.3149 2.68457 16.6899 4.3804 16.6899H13.6554C15.3512 16.6899 16.7262 15.3149 16.7262 13.6199V9.54911C16.7262 7.85827 15.3554 6.48661 13.6646 6.48661H12.8787" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M9.01786 0.825452V10.8596" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.58862 3.26562L9.01779 0.825625L11.4478 3.26563" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Upload Document
                        </div> */}
                    </div>
                    </div>
                    {error && <p className="ErrorMessage" style={{ color:'red' }}>{error}</p>}
                    <button type="submit" className="Submitbtn d-flex flex-row justify-content-center align-items-center">Sign Up & Continue</button>
                </form>
                <div className="footerSection d-flex flex-row justify-content-between">
                    <p className="Text-ele text-start m-0">EcoMobile d.o.c.</p>
                    <p className="Text-ele text-end m-0">+385-1-555-66-99</p>
                </div>
            </div>
        </>
    );
}









