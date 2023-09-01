import { Box,Image,Text,Heading } from '@chakra-ui/react'
import React from 'react'
import './Components/Nav1.css'; // Import your CSS styles
import { GiHamburgerMenu } from 'react-icons/gi';
import {Link as RouterLink} from "react-router-dom"
function div1click(){
document.getElementById('div2').style.display='block'
document.getElementById('div1').style.display='none'
}
function div2click(){
  document.getElementById('div1').style.display='block'
  document.getElementById('div1').style.display='flex'
  document.getElementById('div2').style.display='none'
  }

const Nav = () => {
  return (
 <div>
  <div  id='div1' >
    <div id='logo'>
    <RouterLink to={`/`}>
      <img src="https://i.ibb.co/FgqSh66/logo.png" alt="bcb" />
      </RouterLink>
    </div>
    <div id='call'>
      <h1 id='num'>SELL/BUY : 9297777103</h1>
    </div>
    <div id='info'>
    <RouterLink to={`/about`}>
      <p>About Us</p>
      </RouterLink>
      <RouterLink to={`/contact`}>
      <p>Contact Us</p>
      </RouterLink>
      <RouterLink to={`/login`}>
      <p>Admin <br /> Login</p>
              </RouterLink>
     
    </div>

  
    <p id='ham' onClick={div1click} ><GiHamburgerMenu/></p>
  </div>
  <div  id='div2' >
    <p id='close' onClick={div2click} >✖</p>
    <div id='logo2'>
      <img src="https://i.ibb.co/FgqSh66/logo.png" alt="bcb" />
    </div>
    <div id='info2'>
    <RouterLink to={`/about`}>
      <p>About Us</p>
      </RouterLink>
      <RouterLink to={`/contact`}>
      <p>Contact Us</p>
      </RouterLink>
      <RouterLink to={`/login`}>
      <p>Admin Login</p>
              </RouterLink>
    </div>
  </div>
 </div>
  )
}

export default Nav
// https://drive.google.com/uc?id=19yjY4fKN_TZovaycFY2rCIYQJJkPVN6h

// https://drive.google.com/file/d/19yjY4fKN_TZovaycFY2rCIYQJJkPVN6h/view?usp=sharing

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/FgqSh66/logo.png" alt="logo" border="0"></a> */}