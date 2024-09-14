import React, { useContext, useState } from 'react';
import api from '../../api';
import { useNavigate } from 'react-router-dom';
import { MainContext } from '../../Context/MainContext';
import { FormDataContext } from '../../Context/FormDataContext';
import './Login.css';
import axios from "axios";
import Spinner from '../../components/Spinner/Spinner';
export default function OtpScreen() {
    const {email} = useContext(MainContext);
    const {formdata} = useContext(FormDataContext);
    // console.log(formdata.get("date"));
    const navigate = useNavigate();
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;
        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        if (element.nextSibling && element.value) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...otp];
            if (otp[index] === '') {
                if (e.target.previousSibling) {
                    e.target.previousSibling.focus();
                }
            } else {
                newOtp[index] = '';
                setOtp(newOtp);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const otpValue = otp.join('');
        try {
            const response = await api.post('accounts/landlord/verifyotp', { 
                email:email,
                otp:otpValue 
            });
            
            if (response.status === 200 || 201){
                const { refresh, access } = response.data;
                localStorage.setItem('access_token', access);
                localStorage.setItem('refresh_token', refresh);
                setLoading(false);
                navigate('/verifydocuments');
            } else {
                throw new Error('Failed to verify OTP');
            }
        } catch (error) {
            let errorMessage = 'An error occurred while verifying OTP. Please try again.';
            if (error.response && error.response.data) {
                errorMessage = 'The OTP you entered is incorrect. Please try again.';
            }
            setError(errorMessage);
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="MainContainerLogin">
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-4 p-0">
                        <div className="loginimgcontainer">
                            <img className="loginimg w-100 h-100" src={'/login.jpg'} alt="loginimg" />
                        </div>
                    </div>
                    <div className="col-8 p-0">
                        <div className="loginformcontainer d-flex flex-column justify-content-between">
                            <div className="navigatebefor d-flex flex-column justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/signup')}>
                                    <path d="M4.25 12.2743L19.25 12.2743" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="#21296D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="FormContainer d-flex flex-column align-items-center justify-content-between">
                                <div className="Heading h-auto d-flex flex-column gap-2">
                                    <h1 className="HeadingTextOTP m-0">2-step verification</h1>
                                    <p className="loginHeadingTextOTP m-0">
                                        A mail message with a 6-digit verification code was just sent to your {email}.
                                    </p>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleChange(e.target, index)}
                                            onKeyDown={(e) => handleKeyDown(e, index)}
                                            onFocus={(e) => e.target.select()}
                                            style={{
                                                width: '48px',
                                                height: '48px',
                                                margin: '0 5px',
                                                fontSize: '16px',
                                                lineHeight: '24px',
                                                color: '#27272A',
                                                fontWeight: 500,
                                                textAlign: 'center',
                                                border: `1px solid ${digit ? '#A1A1AA' : '#E5E5E5'}`,
                                                borderRadius: '12px',
                                                caretColor: '#9FBEFF',
                                                backgroundColor: '#FFFFFF',
                                                outline: 'none',
                                            }}
                                        />
                                    ))}
                                </div>

                                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

                                <div className='OtpSubmitContainer d-flex flex-column align-items-center gap-2'>
                                    {loading ? (
                                        <Spinner/> 
                                    ):(
                                        <>
                                            <p className='w-100 text-center OtpDRCodeText'>
                                                Didn't receive the code yet? <a className='Linkresend' href="#">Resend Code</a>
                                            </p>
                                            <button className='OtpSubmitBtn' onClick={handleSubmit}>Verify & Signup</button>
                                        </>
                                    )}
                                </div>

                            </div>
                            <div className="w-100 d-flex flex-row justify-content-between">
                                <p className="Text-ele text-start m-0">EcoMobile d.o.c.</p>
                                <p className="Text-ele text-end m-0">+385-1-555-66-36</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
