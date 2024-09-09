import React, { useState } from 'react';
import './Invite.css';
import api from '../api'
import { useNavigate } from 'react-router-dom';
const Invite = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate=useNavigate();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response=await api.post('accounts/request',{
          name:name,
          email:email
      });
      if(response.status==200){
           navigate('/dashboard');
           window.alert("successfully sent invitation"); 
           
      }
  }
  catch(error){
      if(error.response && error.response.data){
          
      }else{
         
      }
  }
  };


  return (
    <div className='InviteContainer w-100 d-flex flex-column justify-content-start align-items-center '>
      <h2 className='Heading m-0 mb-5'>Invite Tenant</h2>
        <form className='d-flex flex-column w-50 gap-3 mt-5' onSubmit={handleSubmit}>
          <div className='NameContainer d-flex flex-column gap-1 align-items-center'>
            <label htmlFor="name" className='lableText text-start w-75'>Name:</label>
            <input
              className='w-75 inputfeild'
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='NameContainer d-flex flex-column gap-1 align-items-center'>
            <label htmlFor="email text-start" className='text-start w-75'>Email:</label>
            <input
              className='w-75 inputfeild'
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className='submitBtn text-center'>Submit</button>
        </form>
    </div>
  );
};

export default Invite;
