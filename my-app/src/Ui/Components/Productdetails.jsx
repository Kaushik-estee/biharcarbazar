import { useState,useEffect } from 'react';
import {  Grid,Box,Flex,Stack,Text,Heading,Image,Button,UnorderedList,ListItem,useToast
    } from "@chakra-ui/react"

import axios from 'axios';
  import {Link as RouterLink} from "react-router-dom"

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
     
   <Box width={'100%'} >
    {/* navbar---- */}
    <Nav/>
   
    <Box id='detail' width={'98%'} margin={'auto'}  height={'600px'}>
    <Flex justifyContent='space-around' >
      <Box w="50%" h ="100%"  id='prodImage' >
        
<Image w="auto" margin='auto' marginTop="30px" src={image} alt={kms} />
      </Box>
      
      <Box   w="50%" h ="300px"   id='proDetail' >
        <Heading marginLeft="50%" marginTop="15px" >MAKE: {make}</Heading>
        <Text fontWeight="bold" color="gray" marginLeft="50%" marginTop="15px" >YEAR: {year}</Text>
        <Box id="price" >
          <Stack marginLeft="50%" w="45%" >
          <Text    style={{color:"tomato"}}> PRICE: &#8377; {price}</Text>
          
        
        <Text    marginLeft="5px" id="price2" > TRANSMISSION: {transmission}</Text>
        
        <Text   marginLeft="5px" id="price2" > MODEL: {model}</Text>
       
        <Text    marginLeft="5px" id="price2" >COLOR: {exteriorcolor}</Text>
        
        <Text   marginLeft="5px" id="price2" >FUEL: {fuel}</Text>
        
       
        </Stack>
        </Box>
        
        
        
      </Box>
      </Flex>
      <Flex>


      </Flex>
    </Box>
   
{/* footer---------------------- */}


   </Box>
   <div style={{bottom:'0'}}>
   <Footer/>
   </div>
   </div>
    );
  }