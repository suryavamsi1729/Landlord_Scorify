import React from 'react';
import './Message.css';
import lock from './lock.jpg';

function Messages() {
  return (
    <div className="app-container">
      <div className="blurred-background">
        <div className="symbol-container">
          {/* <img src={lock} alt="symbol" className="symbol" /> */}
        </div>
      </div>
    </div>
  );
}

export default Messages;
