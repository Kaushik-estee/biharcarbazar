// src/components/WhatsAppButton.js
import { FaWhatsappSquare } from 'react-icons/fa';
import React from 'react';

const WhatsAppButton = () => {
  // Replace 'PHONE_NUMBER' with the target phone number (including the country code)
  const phoneNumber = '+917070266595';

  // Create the WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <div>
   
      <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
        <button>< FaWhatsappSquare/></button>
      </a>
    </div>
  );
};

export default WhatsAppButton;
