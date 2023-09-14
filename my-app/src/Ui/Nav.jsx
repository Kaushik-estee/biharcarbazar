
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
 <div style={{display:'flex',justifyContent:'space-around',position:'fixed',zIndex:'1000',width:'100%'}} >
  <div  id='div1' >
    <div id='logo' style={{width:'30%'}}>
    <RouterLink to={`/`}>
      <img style={{width: '100px',height:'100px'}} src="https://i.ibb.co/FgqSh66/logo.png" alt="bcb" />
      </RouterLink>
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'30%'}} id='call'>
      <h1 id='num'>SELL/BUY : 9297777103</h1>
    </div>
    <div id='info' style={{width:'30%'}}>
    <RouterLink to={`/about`}>
      <p>About Us</p>
      </RouterLink>
      <RouterLink to={`/contact`}>
      <p>Contact Us</p>
      </RouterLink>
      <RouterLink to={`/admin`}>
      <p>Admin </p>
              </RouterLink>
     
    </div>

  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <p id='ham' onClick={div1click} ><GiHamburgerMenu/></p>
    </div>
  </div>
  <div  id='div2' >
    <p id='close' style={{fontSize:'20px'}} onClick={div2click} >✖</p>
    <div id='logo2'>
    <RouterLink to={`/`}>
      <img src="https://i.ibb.co/FgqSh66/logo.png" alt="bcb" />
      </RouterLink>
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

/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/FgqSh66/logo.png" alt="logo" border="0"></a> */