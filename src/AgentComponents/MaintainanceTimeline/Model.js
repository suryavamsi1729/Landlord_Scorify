import React from 'react'
const Modal = ({isOpen,onClose,children}) => {
  if(!isOpen) return null;
  return (
    <div className='modalPopup'>
       <div className='topSectionModal'>
       <svg onClick={onClose} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9963 7.99609L8.00293 11.9894" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9976 11.9916L8.00098 7.99414" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.612 2.29199H6.38783C3.87033 2.29199 2.29199 4.07449 2.29199 6.59699V13.4037C2.29199 15.9262 3.86283 17.7087 6.38783 17.7087H13.6112C16.137 17.7087 17.7087 15.9262 17.7087 13.4037V6.59699C17.7087 4.07449 16.137 2.29199 13.612 2.29199Z" stroke="#21296D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
       </div>
      <div
        style={{
            position:"relative",
            width: "100%",
            height: "100%",
            padding: '16px',
            paddingTop: '5px'
        }}
       >
        {children}
      </div>
   </div>
  )
}

export default Modal