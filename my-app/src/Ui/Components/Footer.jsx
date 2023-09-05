import React from 'react'
import { FaWhatsappSquare,FaFacebook,FaInstagram } from 'react-icons/fa';
import {Link as RouterLink} from "react-router-dom"
const Footer = () => {
  return (
  <  div style={{width:'100%'}}>
    
    <div style={{width:'99%',height:'100px',margin:'auto',display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'black'}}>
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
        
        <div><a href="https://web.whatsapp.com/"><h1 style={{color:'green',fontSize:'50px',cursor:'pointer'}}>< FaWhatsappSquare/></h1></a></div>
    </div>
    <hr/>
    <div style={{width:'99%',backgroundColor:'black',margin:'auto',alignItems:'center',textAlign:'center'}}>
    <p style={{color:'white'}}>Copyright © 2023 </p>
    </div>
    </div>
  )
}

export default Footer
