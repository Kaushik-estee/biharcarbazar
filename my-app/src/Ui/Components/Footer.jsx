import React from 'react'
import { FaWhatsappSquare,FaFacebook,FaInstagram } from 'react-icons/fa';
import {Link as RouterLink} from "react-router-dom"
import WhatsAppButton from './Whatsapp';
import PhoneCallButton from './Call';
const Footer = () => {
  return (
  <  div style={{width:'100%'}}>
    
    <div style={{width:'99%',height:'100px',margin:'auto',display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'black'}}>
       <div>
       <h1 style={{color:'green',fontSize:'60px',cursor:'pointer'}}><PhoneCallButton/></h1>
       </div>
        <div> 
        <RouterLink to={`/about`}>
              <p style={{color:'white'}}>About Us</p>
              </RouterLink>
              <RouterLink to={`/contact`}>
        <p style={{color:'white'}}>Contact Us</p>
        </RouterLink>
        </div>
        <div> 
          <a href="https://www.facebook.com/IdealDealersPV/">
          <p style={{color:'blue',fontSize:'30px',cursor:'pointer',margin:'10px'}}><FaFacebook/>
          </p>
          </a>
        <p style={{color:'white',fontSize:'30px',cursor:'pointer',margin:'10px'}}><FaInstagram/></p></div>
        
        <div>
          
          
          <h1 style={{color:'green',fontSize:'60px',cursor:'pointer'}}><WhatsAppButton/></h1>
          </div>
    </div>
    <hr/>
    <div style={{width:'99%',backgroundColor:'black',margin:'auto',alignItems:'center',textAlign:'center'}}>
    <p style={{color:'white'}}>Copyright © 2023 </p>
    </div>
    </div>
  )
}

export default Footer
