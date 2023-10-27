// src/components/WhatsAppButton.js
import { FaWhatsappSquare } from 'react-icons/fa';
import React from 'react';

const WhatsAppButton = () => {
  // Replace 'PHONE_NUMBER' with the target phone number (including the country code)
  // const phoneNumber = '';

  // Create the WhatsApp URL
  // const whatsappURL = `https://wa.me/${phoneNumber}`;
  const handleWhatsAppClick = (event) => {
   
    const phoneNumber = '+919031662367'; // Replace with the recipient's phone number
    const whatsappURL = `https://wa.me/${phoneNumber}`;

    window.open(whatsappURL, '_blank');
    event.stopPropagation()
   
};


  return (
    // style={{position:'fixed',bottom:'20px',right:'46px',zIndex:'1000'}}
    <div  >
   
      {/* <a href={whatsappURL} target="_blank" rel="noopener noreferrer"> </a> */}
        {/* <h1 style={{fontSize:'50px',color:'green'}}  >< FaWhatsappSquare/></h1> */}
        <img onClick={handleWhatsAppClick} style={{width:'50px',height:'50px',borderRadius:'30px',marginLeft:'5px'}} src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN" alt="" />
     
    </div>
  );
};

export default WhatsAppButton;
