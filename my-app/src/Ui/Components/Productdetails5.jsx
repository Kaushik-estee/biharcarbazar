import { useState,useEffect } from 'react';
import {  Text,Heading,Image, GridItem, Grid
    } from "@chakra-ui/react"

import axios from 'axios';
import { FiPhoneCall } from 'react-icons/fi';
import './Productdetails.css'

  import {useParams} from "react-router-dom"
import Footer from './Footer';
import Nav from '../Nav';
// import ImageCarousel from './Image';
import Loading from './Loading';
import PhoneCallButton from './Call';
import PhoneCallButton2 from './Callbutton';
import ProductCard from './Productcard2';
import ImageCarousel from './Carousel';

  export default function ProductDetails() {
    const [product,setProduct] = useState({})
    const [relproduct,setRelproduct] = useState([])
    const[relative,setRelative] = useState({gte:0,lte:0})
    const [isLoading, setIsLoading] = useState(true);

   
    const {id}  = useParams()
  
    
console.log("id",id);
useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://vast-pear-nightingale-sari.cyclic.app/cars/${id}`);
            const data = response.data;
            console.log("dataaaa",data)
            if (data) {
                const fetchedProduct = data;
               
                setProduct(fetchedProduct);
                setIsLoading(false);

                // Calculate relative values here
                const pp = fetchedProduct.price;
                const newRelative = { gte: pp - 200000, lte: pp + 200000 };
                setRelative(newRelative);

                // Call fetchdata2 with the newRelative values
                fetchdata2(newRelative);
            }
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, [id]);
console.log("relpro",relproduct.length);

// const fetchdata2 = async (newRelative) => {
//     try {
//         const response = await axios.get(`https://vast-pear-nightingale-sari.cyclic.app/cars?minPrice=${newRelative.gte}&maxPrice=${newRelative.lte}`);
//         const responseData = response.data;
//         if (responseData.cars.length > 1) {
//             setRelproduct(responseData.cars);
//         } else {
//             document.getElementById('showRelative').textContent = 'No Product To show';
//         }
//     } catch (error) {
//         console.error(error);
//     }
// };
const fetchdata2 = async (newRelative) => {
    try {
        const response = await axios.get(`https://vast-pear-nightingale-sari.cyclic.app/cars?minPrice=${newRelative.gte}&maxPrice=${newRelative.lte}`);
        const responseData = response.data;
        
        // Filter out the sold products
        const unsoldProducts = responseData.cars.filter(car => car.booked !== 'sold');
        
        if (unsoldProducts.length > 1) {
            setRelproduct(unsoldProducts);
        } else {
            document.getElementById('showRelative').textContent = 'No Product To show';
        }
    } catch (error) {
        console.error(error);
    }
};

  



// const {year,kms,make,price,model,transmission,exteriorcolor,fuel,_id}=product

const { year, kms, make, price, model, transmission, exteriorcolor, fuel, _id, booked } = product;

console.log("prodd",product);
const images = [
  product.image,
  product.image2,
  product.image3,
  product.image4,
  product.image5,
  product.image6
  
 
  // Add more image URLs as needed
];

const filteredImages = images.filter(image => image);
    
    
    


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
      <ImageCarousel  images={filteredImages} />
        
{/* <Image id='prodImg'  src={product.image} alt={kms} /> */}
      </div>
      
      <div     id='proDetail' >
        <h1 style={{fontWeight:'bold',color:'#F26522'}}>Details</h1>
        <Heading color={'#27005D'} > {make}</Heading>
        {/* <Text    style={{fontWeight:'bold',color:'#27005D'}}>  &#8377; {price}</Text> */}
        {booked !== 'sold' && <Text style={{ fontWeight: 'bold', color: '#27005D' }}>&#8377; {price}</Text>}
      
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
          {/* <div id='numshown'>
            <h1 style={{fontWeight:'600',color:'#27005D'}}>Call Now : 9297777103</h1>
          </div >
          <div id='call2'> <PhoneCallButton2/></div> */}
       
        
         
       
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
   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    {relproduct.length>1?( <button id='showRelative' style={{background:'#27005D',color:"white",margin:'auto',width:"90%",height:'50px',borderRadius:"8px",marginBottom:'5px'}} >You may also like</button>):null}
  
   
   </div>
   <div>
   <div style={{width:'90%',margin:'auto'}}>
              {isLoading ? (
<Loading/>
              ):(<Grid  templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)','repeat(3, 1fr)']} gap={6}> 
              {/* mapping product */}
          {
              relproduct?.length>0 && relproduct.map((e)=>{
          return (
          <GridItem key={e.id} >
              {/* mapping in card */}
          <ProductCard
          
          image={e.image}
          id={e._id}
          year={e.year}
          price={e.price}
          
          make={e.make}
          
          model = {e.model}
          kms = {e.kms}
          transmission={e.transmission}
          fuel={e.fuel}
          exteriorcolor={e.exteriorcolor}
          booked={e.booked}
         
          
          />
          </GridItem>
               ) })
          }
          
          </Grid>)}
          
          


</div>
   </div>
    <Footer/> 
   </div>
    );
  }