import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
function PhoneCallButton() {
  const phoneNumber = '9297777103'; // Replace with the desired phone number

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    // style={{position:'fixed',bottom:'80px',right:'46px',zIndex:'1000'}}
    <div >
      <h1 style={{fontSize:'50px',color:'red'}}  onClick={handleCallClick}>
      <BiPhoneCall/>
      </h1>
    </div>
  );
}

export default PhoneCallButton;
