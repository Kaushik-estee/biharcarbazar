import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    function logout() {
        localStorage.removeItem("login");
        navigate("/login");
      }
  return (

   

    <div>
        <p>add</p>
        dashboard
        <button onClick={logout}>log out</button>
      
    </div>
  )
}

export default Dashboard
