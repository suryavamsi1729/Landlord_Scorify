import React, { useState } from 'react';

const OTPInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    // Update the OTP state
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus the next input field
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
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

  return (
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
            color:'#27272A',
            fontWeight: 500,
            textAlign: 'center',
            border: `1px solid ${digit ? '#A1A1AA' : '#E5E5E5'}`,
            borderRadius: '12px',
            caretColor: '#9FBEFF',
            backgroundColor:'#FFFFFF',
            outline:'none',
          }}
        />
      ))}
    </div>
  );
};

export default OTPInput;
