import React, { useState } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import Adminnav from '../Ui/Components/Adminnav';
import Footer from '../Ui/Components/Footer';
import { useNavigate } from 'react-router-dom';
function Form() {
  const [formData, setFormData] = useState({});
  const [year, setYear] = useState(null);
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [kms, setKms] = useState("");
  const [transmission, setTransmission] = useState("");
  const [exteriorcolor, setExteriorcolor] = useState("");
  const [fuel, setFuel] = useState("");
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const navigateToAdmin = () => {
    navigate('/admin'); // Replace '/about' with the desired route
};
  // Your form handling logic will go here
  const handleSubmit = async (event) => {
    let obj={
        year,
        make,
        model,
        kms,
        transmission,
        exteriorcolor,
        fuel,
        price,
        image
    
    }
    event.preventDefault();

    try {
      const response = await axios.post('https://car-back-qqz1.onrender.com/cars', obj);
      console.log('Response:', response.data);
      // You can handle the response data as needed
      navigateToAdmin()
    } catch (error) {
      console.error('Error:', error);
      // Handle errors here
    }
  };
//   https://vast-puce-pantsuit.cyclic.app/car/post
// http://localhost:8000/car/post


  const handleChange=(e)=>{
let {value,name} = e.target
if(name ==="year"){
setYear(value)
}else if(name === "make"){
    setMake(value)
}else if(name === "model"){
    setModel(value)
}else if(name === "kms"){
    setKms(value)
}else if(name === "transmission"){
    setTransmission(value)
}else if(name === "exteriorcolor"){
    setExteriorcolor(value)
}else if(name === "fuel"){
    setFuel(value)
}else if(name === "price"){
    setPrice(value)
}else if(name === "image"){
    setImage(value)
}
  }
 
  
  return (
    <div>
        
        <Adminnav/>
        <div style={{margin:'auto',width:'40%',height:'600px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
      <form  onSubmit={handleSubmit}>
        <label htmlFor="year">Year:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}} type="number" value={year} id="year" name="year" placeholder='year' onChange={(e)=>handleChange(e)} />
        <br />
        
        <label htmlFor="make">Make:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={make} type="text" id="make" name="make" placeholder='make' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="model">Model:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={model} type="text" id="model" name="model" placeholder='model' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="kms">Kms:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={kms} type="text" id="kms" name="kms" placeholder='kms' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="transmission">Transmission:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={transmission} type="text" id="transmission" name="transmission" placeholder='transmission' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="exteriorcolor">Exterior color:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={exteriorcolor} type="text" id="exteriorcolor" name="exteriorcolor" placeholder='exteriorcolor' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="fuel">Fuel:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={fuel} type="text" id="fuel" name="fuel" placeholder='fuel' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="price">Price:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={price} type="number" id="price" name="price" placeholder='price' onChange={(e)=>handleChange(e)} />
        <br />
        <label htmlFor="image">Image:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={image} type="text" id="image" name="image" placeholder='image' onChange={(e)=>handleChange(e)} />
        <br />


        <input type="submit" name="" id="" />
        
        {/* ...other form elements */}
      </form>
      </div>
      <Footer/>
    </div>
  );
  
}

export default Form;
