import React, { useState } from 'react';
import{BsFillFilterSquareFill} from "react-icons/bs"
function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    document.querySelector('#popbtn').style.display="block"
  };

  return (
    <div>
      <button id='popbtn' style={{fontSize:'40px',color:'black',marginTop:'120px',marginRight:'30px',color:'#D4C5C7',cursor:'pointer'}} onClick={togglePopup}><BsFillFilterSquareFill/></button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
          <p id='close' style={{fontSize:'20px'}} onClick={togglePopup} >✖</p>
            <h2>Popup Window</h2>
            <p>This is a simple popup window content.</p>
            
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
