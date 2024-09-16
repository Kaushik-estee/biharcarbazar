import axios from 'axios'
import React,{useState,useEffect} from 'react'

import {useNavigate, useParams} from "react-router-dom"
import Adminnav from '../Ui/Components/Adminnav'
import Footer from '../Ui/Components/Footer'
import { toast, ToastContainer } from 'react-toastify';
const Edit2 = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({})

    const navigate = useNavigate()
    
    console.log(id)
useEffect(()=>{
    axios
    .get(`https://kanbanbackend-001h.onrender.com/cars/${id}`)
    .then(({data})=>{
        setProduct(data)
        console.log(product);
    })
    .catch((err)=>console.log(err))
},[id])


      const handleSubmit = async (event) => {
     
        event.preventDefault();
        axios
        .put(`https://kanbanbackend-001h.onrender.com/cars/${id}`,product)
        .then(({data})=>{
          toast.success('EDITED successfully');
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
        {/* <label htmlFor="year">Year:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}} type="number" value={product.year} id="year" 
        name="year" placeholder='year' onChange={e=> setProduct({...product,year:e.target.value})}  />
        <br /> */}
            <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
      <h1>Select Year:</h1>
      <select style={{border:'1px solid black'}} onChange={e=> setProduct({...product,year:e.target.value})} value={product.year}>
        <option value="">Select</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>

      </select>
      
    </div>
        
        {/* <label htmlFor="make">Make:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value= {product.make} type="text"
         id="make" name="make" placeholder='make' onChange={e=> setProduct({...product,make:e.target.value})} />
        <br /> */}
                <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center",marginTop:'7PX'}}>
      <h1>Select Make:</h1>
      <select style={{border:'1px solid black'}} onChange={e=> setProduct({...product,make:e.target.value})} value={product.make}>
        <option value="TATA">TATA</option>
        <option value="MAHINDRA">MAHINDRA</option>
        <option value="AUDI">AUDI</option>
        <option value="BMW">BMW</option>
        <option value="RENAULT">RENAULT</option>
        <option value="DATSON">DATSON</option>
        <option value="HONDA">HONDA</option>
        <option value="HYUNDAI">HYUNDAI</option>
        <option value="FORD">FORD</option>
        <option value="FIAT">FIAT</option>
        <option value="TOYOTA">TOYOTA</option>
        <option value="MARUTI SUZUKI">MARUTI SUZUKI</option>
        <option value="HONDA">HONDA</option>
        <option value="KIA">KIA</option>
      

        
      </select>
      
    </div>
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
        {/* <label htmlFor="model">Fuel:</label>
        
        <input style={{border:"1px solid black",margin:'10px'}}  value={product.fuel} type="text" id="fuel"
         name="fuel" placeholder='fuel' onChange={e=> setProduct({...product,fuel:e.target.value})}  /> */}
          <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
      <h1>Fuel Type:</h1>
      <select style={{border:'1px solid black'}}  onChange={e=> setProduct({...product,fuel:e.target.value})} value={product.fuel}>
        <option value="PETROL">PETROL</option>
        <option value="DIESEL">DIESEL</option>
        <option value="CNG">CNG</option>
        <option value="ELECTRIC">ELECTRIC</option>
        <option value="HYBRID">HYBRID</option>
        
     

      </select>
      
    </div>
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

       
        


        {/* ////////////////////////////////////////////////////// */}
        <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center",marginTop:'7PX'}}>
      <h1>Booking Status:</h1>
      <select style={{border:'1px solid black'}} onChange={e=> setProduct({...product,booked:e.target.value})} >
        <option value="no">No</option>
        <option value="yes">Yes</option>
        <option value="sold">Sold</option>
      
      

        
      </select>
      
    </div>
        {/* <div>
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
   
      
    </div> */}
        


        <input style={{marginBottom:'5px',width:'120px',backgroundColor:'green',color:'white'}} type="submit" name="" id="" />
        
        {/* ...other form elements */}
      </form>
      </div>
      < ToastContainer/>
      <Footer/>
    </div>
  )
}

export default Edit2
