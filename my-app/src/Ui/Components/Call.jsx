import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
function PhoneCallButton() {
  const phoneNumber = '9031662367'; // Replace with the desired phone number

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
      <img onClick={handleCallClick} style={{width:'50px',height:'50px',marginRight:'5px',borderRadius:'30px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGHGgDrzgeZp91TdmkqaFf_-Xf5u77sLuCA&usqp=CAU" alt="" />
    </div>
  );
}

export default PhoneCallButton;
