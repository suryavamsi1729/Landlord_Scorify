import React from 'react';
import './MaintainanceTimeline.css';
import personImg from './Avatar.png';
import call from './Icon.png';
import msg from './Msg.png';
const Communication = ({ people }) => {
  // {
    // person.name person.role
  // }
  return (

    <div className="container-fluid communication mb-2 p-0">
      {/* //person-card person-image person-info person-name person-role icon */}
      {people.map((person, index) => (
        <div key={index} className="person-card d-flex flex-column  gap-3 p-3">
            <div className='top-secion d-flex flex-row align-items-center gap-2'>
                <img src={personImg} className='person-image'/>
                <div className='person-info d-flex flex-column align-items-start gap-1'>
                    <p className='person-name m-0'>{person.name}</p>
                    <div className={`person-role ${person.role=='Landlord'?'landlord':'tenant'}`}>{person.role}</div>
                </div>
            </div>
            <div className='bottomSecton d-flex flex-row gap-2'>
              <div className='icon d-flex flex-column justify-content-center align-items-center'>
                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9609 1.08301C15.0451 1.42551 17.4818 3.85884 17.8276 6.94301" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.9609 4.03516C13.4368 4.32182 14.5901 5.47599 14.8776 6.95182" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.19326 9.39333C12.5174 12.7166 13.2715 8.87194 15.388 10.987C17.4285 13.027 18.6022 13.4357 16.016 16.0203C15.6922 16.2805 13.6347 19.4116 6.40405 12.1827C-0.827513 4.95301 2.30163 2.89338 2.56195 2.56963C5.15346 -0.0221207 5.55601 1.15749 7.59648 3.19745C9.7121 5.31342 5.8691 6.07002 9.19326 9.39333Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className='icon d-flex flex-column justify-content-center align-items-center'>
                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9188 6.37598L11.2161 9.38684C10.5165 9.94184 9.5322 9.94184 8.83262 9.38684L5.09863 6.37598" stroke="#18181B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.091 16.5C16.6255 16.507 18.3337 14.4246 18.3337 11.8653V6.14168C18.3337 3.58235 16.6255 1.5 14.091 1.5H5.90961C3.37515 1.5 1.66699 3.58235 1.66699 6.14168V11.8653C1.66699 14.4246 3.37515 16.507 5.90961 16.5H14.091Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <button className='message-button m-auto'>Message</button>
            </div>        
        </div>
      ))}
    </div>
  );
};

export default Communication;
