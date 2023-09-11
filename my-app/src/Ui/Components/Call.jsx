import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
function PhoneCallButton() {
  const phoneNumber = '9297777103'; // Replace with the desired phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div style={{position:'fixed',bottom:'20px',left:'24px',zIndex:'1000'}}>
      <button onClick={handleCallClick}>
      <BiPhoneCall/>
      </button>
    </div>
  );
}

export default PhoneCallButton;
