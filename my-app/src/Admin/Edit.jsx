import axios from 'axios'
import React,{useState,useEffect} from 'react'

import {useNavigate, useParams} from "react-router-dom"
import Adminnav from '../Ui/Components/Adminnav'
import Footer from '../Ui/Components/Footer'
const Edit = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({})

    const navigate = useNavigate()
    
    console.log(id)
useEffect(()=>{
    axios
    .get(`https://vast-pear-nightingale-sari.cyclic.app/cars/${id}`)
    .then(({data})=>{
        setProduct(data)
        console.log(product);
    })
    .catch((err)=>console.log(err))
},[id])


      const handleSubmit = async (event) => {
     
        event.preventDefault();
        axios
        .put(`https://vast-pear-nightingale-sari.cyclic.app/cars/${id}`,product)
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
        
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <form style={{border:'5px solid gray',margin:'10px',textAlign:'center'}} onSubmit={handleSubmit}>
         <h1 style={{color:'gray',fontWeight:'bolder'}}>Edit Form</h1>
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
        <label htmlFor="image2">Image2:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.image2} type="text" id="image2"
         name="image2" placeholder='image2' onChange={e=> setProduct({...product,image2:e.target.value})}  />
        <br />
        <label htmlFor="image3">Image3:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.image3} type="text" id="image3"
         name="image3" placeholder='image3' onChange={e=> setProduct({...product,image3:e.target.value})}  />
        <br />
        <label htmlFor="image4">Image4:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.image4} type="text" id="image4"
         name="image4" placeholder='image4' onChange={e=> setProduct({...product,image4:e.target.value})}  />
        <br />
        <label htmlFor="image5">Image5:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.image5} type="text" id="image5"
         name="image5" placeholder='image5' onChange={e=> setProduct({...product,image5:e.target.value})}  />
        <br />
        <label htmlFor="image6">Image6:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.image6} type="text" id="image6"
         name="image6" placeholder='image6' onChange={e=> setProduct({...product,image6:e.target.value})}  />
        <br />

        <label htmlFor="relativeProduct1">Relative Product1:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.relativeProduct1} type="text" id="relativeProduct1"
         name="relativeProduct1" placeholder='relativeProduct1' onChange={e=> setProduct({...product,relativeProduct1:e.target.value})}  />
        <br />
        <label htmlFor="relativeProduct2">Relative Product2:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.relativeProduct2} type="text" id="relativeProduct2"
         name="relativeProduct2" placeholder='relativeProduct2' onChange={e=> setProduct({...product,relativeProduct2:e.target.value})}  />
        <br />
        <label htmlFor="relativeProduct3">Relative Product3:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.relativeProduct3} type="text" id="relativeProduct3"
         name="relativeProduct3" placeholder='relativeProduct3' onChange={e=> setProduct({...product,relativeProduct3:e.target.value})}  />
        <br />
        <label htmlFor="irelativeProduct4">Relative Product4:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.relativeProduct4} type="text" id="relativeProduct4"
         name="relativeProduct4" placeholder='relativeProduct4' onChange={e=> setProduct({...product,relativeProduct4:e.target.value})}  />
        <br />


        {/* ////////////////////////////////////////////////////// */}
        <div>
      <h2>Booking Status</h2>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value= "no"
            onChange={e=> setProduct({...product,booked:e.target.value})}
          />
          NO
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value= "yes"
            // checked={booked === 'yes'}
            onChange={e=> setProduct({...product,booked:e.target.value})}
          />
          YES
        </label>
      </div>
   
      
    </div>
        


        <input style={{marginBottom:'5px',width:'120px',backgroundColor:'green',color:'white'}} type="submit" name="" id="" />
        
        {/* ...other form elements */}
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Edit
