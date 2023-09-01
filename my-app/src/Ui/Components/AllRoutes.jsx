import {Routes,Route} from "react-router-dom"
// import Kids from "./Kids";
// import Login from "./Login";
// import Mens from "./Mens";

import Admin from "../../pages/Admin";
import Form from "../../Admin/Form";
import Edit from "../../Admin/Edit";
import Home from "../Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import ProductDetails from "./Productdetails";
import Login from "../../pages/Login";




// import ProductDetails from "./Productdetails";
// import Signup from "./Signup";
// import Womens from "./Womens";


function AllRoutes() {
  return <div>

    <Routes>
    <Route path="/" element={<Home/>}/> 
    <Route path="/:id" element={<ProductDetails/>}/> 
    <Route path="/login" element={<Login/>}/> 
    
      
      <Route path="/admin" element={<Admin/>}/> 
    <Route path="/add" element={<Form/>}/> 
    <Route path="/admin/:id" element={<Edit/>} />
    
  
    
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />

    </Routes>
  </div>;
}

export default AllRoutes;