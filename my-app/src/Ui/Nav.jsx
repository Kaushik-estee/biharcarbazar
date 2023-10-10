
import React from 'react'
import './Components/Nav1.css'; // Import your CSS styles
import { GiHamburgerMenu } from 'react-icons/gi';
import {Link as RouterLink, useNavigate} from "react-router-dom"
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
  const navigate = useNavigate()
  const refreshHome=()=>{
    navigate('/')
    window.location.reload()
   
  }
  return (
 <div style={{display:'flex',justifyContent:'space-around',position:'fixed',zIndex:'1000',width:'100%'}} >
  <div  id='div1' >
    <div id='logo' >
    <RouterLink to={`/`}>
      <img onClick={refreshHome} src="https://i.ibb.co/1LB2hBh/Bihar-Car-Bazaar-Logo-01.png" alt="bcb" />
      </RouterLink>
    </div>
    <div id='blank' style={{width:"12%"}}></div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'30%'}} id='call'>
      <h1 id='num'>TO BUY/SELL CALL ON : 9297777103</h1>
    </div>
  
    <div id='info' style={{width:'18%'}}>
      <div style={{borderRight:'1px solid #27005D',width:'50%'}}>
    <RouterLink to={`/about`}>
      
      <p id='infoAbout'>ABOUT </p>
      </RouterLink>
      </div> <div style={{width:'50%'}}>
      <RouterLink to={`/contact`}>
      <p style={{marginLeft:"11px"}}>CONTACT </p>
      </RouterLink>
      </div>
     
    </div>

  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
    <p id='ham' onClick={div1click} ><GiHamburgerMenu/></p>
    </div>
  </div>
  <div  id='div2' >
    <p id='closediv2' style={{fontSize:'20px'}} onClick={div2click} >✖</p>
    <div id='logo2'>
    <RouterLink to={`/`}>
      <img  onClick={refreshHome}  src="https://i.ibb.co/1LB2hBh/Bihar-Car-Bazaar-Logo-01.png" alt="bcb" />
      </RouterLink>
    </div>
    <div id='info2'>
    <RouterLink to={`/about`}>
      <p>ABOUT </p>
      </RouterLink>
      <RouterLink to={`/contact`}>
      <p >CONTACT </p>
      </RouterLink>
      {/* <RouterLink to={`/login`}>
      <p>Admin Login</p>
              </RouterLink> */}
    </div>
  </div>
 </div>
  )
}

export default Nav
// https://drive.google.com/uc?id=19yjY4fKN_TZovaycFY2rCIYQJJkPVN6h

// https://drive.google.com/file/d/19yjY4fKN_TZovaycFY2rCIYQJJkPVN6h/view?usp=sharing

/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/FgqSh66/logo.png" alt="logo" border="0"></a> */
{/* <a href="https://ibb.co/xDw5PwP"><img src="https://i.ibb.co/1LB2hBh/Bihar-Car-Bazaar-Logo-01.png" alt="Bihar-Car-Bazaar-Logo-01" border="0"></a> */}

{/* <a href="https://ibb.co/xMgkZ7P"><img src="https://i.ibb.co/GVM6m5B/Bihar-Car-Bazaar-Logotype-02.png" alt="Bihar-Car-Bazaar-Logotype-02" border="0"></a> */}
{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/bdZYD2y/3dgifmaker95104.gif" alt="3dgifmaker95104" border="0"></a> */}

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/wCYMbJN/3dgifmaker81070.gif" alt="3dgifmaker81070" border="0"></a> */}