import React from 'react'
import { FaWhatsappSquare,FaFacebook,FaInstagram } from 'react-icons/fa';
import {Link as RouterLink} from "react-router-dom"
import WhatsAppButton from './Whatsapp';
import PhoneCallButton from './Call';
const Footer = () => {
  return (
  <  div style={{width:'100%'}}>
    
    <div style={{width:'99%',height:'35px',margin:'auto',display:'flex',backgroundColor:'#EDF0F9',justifyContent:'flex-end'}}>
    <RouterLink to={`/admin`}>
      <p style={{color:'#00008B',marginTop:'20px',marginRight:'70px',fontWeight:'500'}}>ADMIN </p>
              </RouterLink>
      
    </div>
    <hr/>
    <div style={{width:'99%',backgroundColor:'#EDF0F9',margin:'auto',alignItems:'center',textAlign:'center'}}>
    <p style={{color:'#00008B'}}>Copyright © 2023 </p>
    </div>
    </div>
  )
}

export default Footer
