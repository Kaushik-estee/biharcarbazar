import { useState,useEffect } from 'react';
import {  Text,Heading,Image
    } from "@chakra-ui/react"

import axios from 'axios';
import { FiPhoneCall } from 'react-icons/fi';
import './Productdetails.css'

  import {useParams} from "react-router-dom"
import Footer from './Footer';
import Nav from '../Nav';
import ImageCarousel from './Image';
import Loading from './Loading';
import PhoneCallButton from './Call';
import PhoneCallButton2 from './Callbutton';

  export default function ProductDetails() {
    const [product,setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams()
    const fetchData = () => {
      axios.get(`https://car-back-qqz1.onrender.com/cars/${id}`)
        .then(response => {
          
          setProduct(response.data);
          setIsLoading(false);
          
          
        })
        .catch(error => {
          console.error('Fetching data failed:', error);
        });
    };
  

useEffect(()=>{
  fetchData()
    // axios
    // .get(`https://car-back-qqz1.onrender.com/cars/${id}`)
    // .then(({data})=>{
    //     // setProduct(data[0])
    //     // console.log("data",data[0]);
    //     setProduct(data)
    //     setIsLoading(false);
    //     console.log(product);
    // })
    // .catch((err)=>console.log(err))
},[id])
const {year,kms,make,price,model,transmission,exteriorcolor,fuel}=product

const images = [
  product.image,
  product.image2,
  product.image3,
  product.image4,
  product.image5,
  product.image6
  
 
  // Add more image URLs as needed
];

    
    
    
    


    return (
        <div>
          
     
   <div width={'100%'}  >
    {/* navbar---- */}
    <Nav/>
    {/* <div style={{width:'98%',margin:'auto',marginTop:'10px'}} >
   
    </div> */}
    <div style={{height:'100px'}}></div>
    {isLoading ? (
<Loading/>
              ):(
   
    <div id='detail' width={'98%'} margin={'auto'}   >
    <div id='main' style={{minHeight:'600px'}}  >
      <div  id='prodImage' >
      <ImageCarousel  images={images} />
        
{/* <Image id='prodImg'  src={product.image} alt={kms} /> */}
      </div>
      
      <div     id='proDetail' >
        <h1 style={{fontWeight:'bold',color:'#F26522'}}>Details</h1>
        <Heading color={'#27005D'} > {make}</Heading>
        <Text    style={{fontWeight:'bold',color:'#27005D'}}>  &#8377; {price}</Text>
        <div style={{display:'flex'}}>
             <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/calender1-icon.png" alt="" />
            <Text color={'#27005D'} fontWeight={'500'}  >
              {year}
            </Text>
            </div>
        {/* <Text  >YEAR: {year}</Text> */}
        <div style={{display:'flex',marginTop:'5px'}}>
              <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" />
              <Text  color={'#27005D'} fontWeight={'500'}  > 
              {kms}
              </Text>
              </div>
         
        
          <div style={{display:'flex',marginTop:'5px'}}>
              <img style={{margin:'5px',width:'18px',height:'18px'}} 
              src="https://cdn.bigboytoyz.com/new-version/attributes/setting-icon.png" alt="" /> 
              <Text color={'#27005D'} fontWeight={'500'}  > 
                {transmission}
              </Text>
              </div>
        
        {/* <Text    marginLeft="5px" id="price2" > TRANSMISSION: {transmission}</Text> */}
        
        {/* <Text   marginLeft="5px" id="price2" > MODEL: {model}</Text> */}
        <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'23px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/cartype-icon.png" alt="" />
              <Text margin={'5px'} color={'#27005D'} fontWeight={'500'} > 
               {model}
              </Text>
              </div>
       
        {/* <Text    marginLeft="5px" id="price2" >COLOR: {exteriorcolor}</Text> */}
        <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'20px',height:'20px'}}  src="https://cdn.bigboytoyz.com/new-version/attributes/exterior-color.png" alt="" />
              <Text  margin={'5px'}  color={'#27005D'} fontWeight={'500'}  > 
              {exteriorcolor}
              </Text>
              </div>
        
        {/* <Text   marginLeft="5px" id="price2" >FUEL: {fuel}</Text> */}
        <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'20px',height:'20px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/fueltype-icon.png" alt="" />
              <Text  color={'#27005D'} fontWeight={'500'} > 
               {fuel}
              </Text>
              </div>
        <div style={{justifyContent:'space-around'}}>
          <div id='numshown'>
            <h1 style={{fontWeight:'600',color:'#27005D'}}>Call Now : 9297777103</h1>
          </div >
          <div id='call2'> <PhoneCallButton2/></div>
       
        
         
       
          </div>
        
        
        
      </div>
      </div>
      <div>


      </div>
    </div>
              )}
   
{/* footer---------------------- */}


   </div>
   <div>
  

   </div>
   <div style={{bottom:'0'}}>
   <Footer/>
   </div>
   </div>
    );
  }