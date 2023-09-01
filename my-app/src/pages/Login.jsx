import {Navigate} from "react-router-dom";

import React from "react";

import Footer from "../Ui/Components/Footer";
import Nav from "../Ui/Nav";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
const[email,setEmail]= React.useState("")
const[password,setPassword]= React.useState("")
// const{authState}= React.useContext(AuthContext)
const navigateToAbout = () => {
    navigate('/admin'); // Replace '/about' with the desired route
};

const handleSubmit = async(e)=>{
  e.preventDefault()

  if (email=== "admin@gmail.com" && password ==="123"){
    navigateToAbout()
    // document.getElementById('auth').style.display = 'block'
    console.log(email,password);
   document.getElementById('logout').style.display = 'block'
  }
}





  return (
    <div className="login-page">
        <Nav/>
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input value={email}  onChange={(e)=>setEmail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div id="logout">
        <button style={{display:'none'}}>Log out</button>
      </div>
      <Footer/>
    </div>
  );
}
export default Login;