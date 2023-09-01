import axios from 'axios'
import React,{useState,useEffect} from 'react'

import {useNavigate, useParams} from "react-router-dom"
import Adminnav from '../Ui/Components/Adminnav'
const Edit = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({})
    const [yea, setYea] = useState(null);
    const [mak, setMak] = useState("");
    const [mode, setMode] = useState("");
    const [km, setKm] = useState("");
    const [transmissio, setTransmissio] = useState("");
    const [exteriorcolo, setExteriorcolo] = useState("");
    const [fue, setFue] = useState("");
    const [pric, setPric] = useState(null);
    const [imag, setImag] = useState("");
    const navigate = useNavigate()
    
    console.log(id)
useEffect(()=>{
    axios
    .get(`https://car-back-qqz1.onrender.com/cars/${id}`)
    .then(({data})=>{
        setProduct(data)
        console.log(product);
    })
    .catch((err)=>console.log(err))
},[id])
// const { year,
//     make,
//     model,
//     kms,
//     transmission,
//     exteriorcolor,
//     fuel,
//     price,
//     image}=product
// console.log(product)

// const handleChange=(e)=>{
//     let {value,name} = e.target
//     if(name ==="year"){
//     setYea(value)
//     }else if(name === "make"){
//         setMak(value)
//     }else if(name === "model"){
//         setMode(value)
//     }
//       }

      const handleSubmit = async (event) => {
     
        event.preventDefault();
        axios
        .put(`https://car-back-qqz1.onrender.com/cars/${id}`,product)
        .then(({data})=>{
            navigate('/admin')
        })
        .catch((err)=>console.log(err))
    
      console.log(product);
      };
  return (
    <div>
        <div>
        <Adminnav/>
        </div>
         <form onSubmit={handleSubmit}>
        <label htmlFor="year">Year:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}} type="number" value={product.year} id="year" 
        name="year" placeholder='year' onChange={e=> setProduct({...product,year:e.target.value})}  />
        <br />
        
        <label htmlFor="make">Make:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value= {product.make} type="text"
         id="make" name="make" placeholder='make' onChange={e=> setProduct({...product,make:e.target.value})} />
        <br />
        <label htmlFor="model">Model:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.model} type="text" id="model"
         name="model" placeholder='model' onChange={e=> setProduct({...product,model:e.target.value})}  />
        <br />
        <label htmlFor="model">Kms:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.kms} type="text" id="kms"
         name="kms" placeholder='kms' onChange={e=> setProduct({...product,kms:e.target.value})}  />
        <br />
        <label htmlFor="model">Transmission:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.transmission} type="text" id="transmission"
         name="transmission" placeholder='transmission' onChange={e=> setProduct({...product,transmission:e.target.value})}  />
        <br />
        <label htmlFor="model">Exterior Color:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.exteriorcolor} type="text" id="exteriorcolor"
         name="exteriorcolor" placeholder='exterior color' onChange={e=> setProduct({...product,exteriorcolor:e.target.value})}  />
        <br />
        <label htmlFor="model">Fuel:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.fuel} type="text" id="fuel"
         name="fuel" placeholder='fuel' onChange={e=> setProduct({...product,fuel:e.target.value})}  />
        <br />
        <label htmlFor="price">Price:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.price} type="number" id="price"
         name="price" placeholder='price' onChange={e=> setProduct({...product,price:e.target.value})}  />
        <br />
        <label htmlFor="image">Image:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.image} type="text" id="image"
         name="image" placeholder='image' onChange={e=> setProduct({...product,image:e.target.value})}  />
        <br />
        {/* <label htmlFor="kms">Kms:</label>
        
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
        <br /> */}


        <input type="submit" name="" id="" />
        
        {/* ...other form elements */}
      </form>
       
      
    </div>
  )
}

export default Edit
