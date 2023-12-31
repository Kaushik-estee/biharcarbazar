import {Navigate} from "react-router-dom";

import React, { useEffect } from "react";

import Footer from "../Ui/Components/Footer";
import Nav from "../Ui/Nav";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const navigate = useNavigate();
const[email,setEmail]= React.useState("")
const[password,setPassword]= React.useState("")
// const{authState}= React.useContext(AuthContext)
// const navigateToAbout = () => {
//     navigate('/admin'); // Replace '/about' with the desired route
// };

const handleSubmit = async(e)=>{
  e.preventDefault()

  if (email=== "admin@bcb.com" && password ==="123"){
    
    // navigateToAbout()

    localStorage.setItem('login', true)
    navigate('/admin')
    
  
   
  }else{
    toast.error('wrong credentials');
  }
}


useEffect(()=>{
  let login = localStorage.getItem('login')
  if(login){
      navigate('/admin')
  }
 
})


  return (
    <div className="login-page">
        <Nav/>
        <div style={{height:'100vh',alignItems:'center',display:'flex',justifyContent:'center'}}>
          
      <form style={{border:'12px solid gray'}}  onSubmit={handleSubmit} className="form">
        <div>
        <h1 style={{fontWeight:'bolder',color:'Green'}}>Login Form</h1>
          <label>
            <input style={{border:'2px solid black',margin:'5px',borderRadius:'5px'}} value={email}  onChange={(e)=>setEmail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input style={{border:'2px solid black',margin:'5px',borderRadius:'5px'}} 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
              
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button  style={{backgroundColor:'blue',color:'white',margin:'20px',width:'80%'}} type="submit">
            SUBMIT
          </button>
        </div>
        <ToastContainer/>
      </form>
      </div>
      
      <Footer/>
    </div>
  );
}
export default Login;