// src/components/WhatsAppButton.js
import { FaWhatsappSquare } from 'react-icons/fa';
import React from 'react';

const WhatsAppButton = () => {
  // Replace 'PHONE_NUMBER' with the target phone number (including the country code)
  const phoneNumber = '+919297777103';

  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    // style={{position:'fixed',bottom:'20px',right:'46px',zIndex:'1000'}}
    <div  >
   
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <h1 style={{fontSize:'50px',color:'green'}}  >< FaWhatsappSquare/></h1>
      </a>
    </div>
  );
};

export default WhatsAppButton;
