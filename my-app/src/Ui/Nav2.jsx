import React, { useState } from 'react';
import './Components/Navbar.css'; // Import your CSS styles
import { GiHamburgerMenu } from 'react-icons/gi';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        document.getElementById('mainDiv').style.display='none'
        document.getElementById('popup').style.display='block'
       
      };
    
      const closePopup = () => {
        document.getElementById('mainDiv').style.display='block'
        document.getElementById('popup').style.display='none'
      };

  return (
   <div id='nav' >
    <div  id='mainDiv'>
    <div id='logo' >
        <img src="https://i.ibb.co/FgqSh66/logo.png" alt="" />
    </div>
    <div id='call'>
        <h1 > Buy/Sell: 9297777103</h1>
    </div>
    <div id='info'  >
        <p >About</p>
        <p  >Contact</p>
        <p >Admin Login</p>
        
    </div>
    </div>
    <p id='ham'  onClick={openPopup} ><GiHamburgerMenu/></p>
   

    
        
        {/* <div className="popup">
          <button className="close" onClick={closePopup}>
            ✖
          </button>
          <div className="popup-content">
           
            <p>About</p>
        <p>Contact</p>
          </div>
        </div> */}
    
   </div>
  );
}

export default Navbar;


// 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