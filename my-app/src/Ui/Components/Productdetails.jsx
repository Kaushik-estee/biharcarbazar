import { useState,useEffect } from 'react';
import {  Text,Heading,Image
    } from "@chakra-ui/react"

import axios from 'axios';
import { BiPhoneCall } from 'react-icons/bi';
import './Productdetails.css'

  import {useParams} from "react-router-dom"
import Footer from './Footer';
import Nav from '../Nav';

  export default function ProductDetails() {
    const [product,setProduct] = useState({})
   
    const {id} = useParams()
  

useEffect(()=>{
    axios
    .get(`https://car-back-qqz1.onrender.com/cars/${id}`)
    .then(({data})=>{
        // setProduct(data[0])
        // console.log("data",data[0]);
        setProduct(data)
        console.log(product);
    })
    .catch((err)=>console.log(err))
},[id])
const {image,year,kms,make,price,model,transmission,exteriorcolor,fuel}=product



    
    
    
    


// pallavi@gmail.com
// pallavi

    return (
        <div>
     
   <div width={'100%'}  >
    {/* navbar---- */}
    <Nav/>
   
    <div id='detail' width={'98%'} margin={'auto'}   >
    <div id='main' style={{minHeight:'600px'}}  >
      <div  id='prodImage' >
        
<Image id='prodImg'  src={image} alt={kms} />
      </div>
      
      <div     id='proDetail' >
        <Heading > {make}</Heading>
        <Text  >YEAR: {year}</Text>
   
         
          <Text    style={{color:"tomato"}}> PRICE: &#8377; {price}</Text>
          
        
        <Text    marginLeft="5px" id="price2" > TRANSMISSION: {transmission}</Text>
        
        <Text   marginLeft="5px" id="price2" > MODEL: {model}</Text>
       
        <Text    marginLeft="5px" id="price2" >COLOR: {exteriorcolor}</Text>
        
        <Text   marginLeft="5px" id="price2" >FUEL: {fuel}</Text>
        <div>
        <h1>Call Now : 9297777103 </h1>
         
       
          </div>
        
        
        
      </div>
      </div>
      <div>


      </div>
    </div>
   
{/* footer---------------------- */}


   </div>
   <div style={{bottom:'0'}}>
   <Footer/>
   </div>
   </div>
    );
  }