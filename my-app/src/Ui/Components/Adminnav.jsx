import React from 'react'
import {  Link, useNavigate } from 'react-router-dom';
const Adminnav = () => {
  const navigate = useNavigate()
  function logout() {
      localStorage.removeItem("login");
      navigate("/login");
    }
  return (
    <div style={{display:'flex',justifyContent:'space-around',height:'100px',margin:'auto', alignItems:'center',backgroundColor:'gray',justifyItems:'center'}}>
        
        <Link to="/"><button style={{color:'white',fontWeight:'bold'}}>HOME</button></Link>
    <Link to="/admin"><button style={{color:'white',fontWeight:'bold'}}>ADMIN</button></Link>
    
        <Link to="/add"><button style={{color:'white',fontWeight:'bold'}}>ADD</button></Link>
       
        <button onClick={logout} style={{backgroundColor:'red', color:'white',cursor:'pointer'}}>Log Out</button>
        
    </div>
  )
}

export default Adminnav
