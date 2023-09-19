import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
function PhoneCallButton2() {
  const phoneNumber = '9297777103'; // Replace with the desired phone number

  const handleCallClick = (event) => {
    
    window.location.href = `tel:${phoneNumber}`;
    event.stopPropagation()
  };

  return (
    // style={{position:'fixed',bottom:'80px',right:'46px',zIndex:'1000'}}
    <div >
      {/* <h1 style={{fontSize:'50px',color:'red',marginRight:'5px'}}  >
      <BiPhoneCall/>
      </h1> */}
      <button onClick={handleCallClick} style={{width:'180px',height:'50px',marginRight:'5px',background:'#F26522',color:'white',margin:"10px",borderRadius:"10px",cursor:'pointer'}}>CALL NOW</button>
   
    </div>
  );
}

export default PhoneCallButton2;
