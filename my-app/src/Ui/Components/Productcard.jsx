// product card
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
  
  } from '@chakra-ui/react';
import { color } from 'framer-motion';
  import {Link as RouterLink} from "react-router-dom"
import WhatsAppButton from './Whatsapp';
import PhoneCallButton from './Call';
import "./ProductCard.css"
  
  // const IMAGE =
  //   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductCard({year,id,make,price,image,model,kms,transmission,exteriorcolor,fuel,booked}) {
 
    return (
      <Center py={12}>
        
   
        <Box
        roundedBottom={'xl'}
          role={'group'}
          p={4}
          maxW={'450px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          // boxShadow={'2xl'}
         
          pos={'relative'}
          zIndex={1}
      
          
          >
                 <RouterLink to={`/${id}`}>
          <Box
            roundedTop={'xl'}
            mt={-12}
            backgroundColor={'#EDF0F9'}
            pos={'relative'}
            height={'230px'}
          
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                   {booked === 'yes' ? (
            <>
            
              <button style= {{width:'80px',height:'30px',zIndex:'2000',position:'absolute',background:'red',color:'white',marginTop:'8px',borderBottomRightRadius:'11px',borderTopRightRadius:'11px'}}>BOOKED</button>
            </>
          ) : booked === 'sold'?  (
            <>
            
              <button style= {{width:'80px',height:'30px',zIndex:'2000',position:'absolute',background:'green',color:'white',marginTop:'8px',borderBottomRightRadius:'11px',borderTopRightRadius:'11px'}}>SOLD</button>
            </>
          ):null}
            <Image
              rounded={'xl'}
              height={"100%"}
              width={"100%"}
              objectFit={'fit'}
              src={image}
              position={'absolute'}
            />
            {/* style={{position:'absolute',zIndex:'3000',width:'100%',marginTop:'62%',justifyContent:'space-between'}} */}
             {/* <div id='callIcons'  ></div> */}
              <h1 id='whatsappIcon'> <WhatsAppButton/></h1>
              <h1 id='calIcon'><PhoneCallButton/></h1>
           
            
          
          </Box>
          </RouterLink>
          <div style={{background:"#EDF0F9",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px"}} >
          <Stack >
          <div style={{background:"#EDF0F9",width:"90%",margin:"auto"}}>
          <RouterLink to={`/${id}`}>
       
          <Heading   color={'#27005D'}  marginTop={'25px'} fontSize={"x-large"} > 
              {year} {make} {model} {fuel} 

              </Heading>
              </RouterLink>
              </div>
              <div style={{width:'90%',margin:"auto"}}>
              <Text textDecoration={'none'}  color={'#27005D'} fontWeight={500} fontSize={'xl'}> PRICE  
              &#8377; {price}
              </Text>
              </div>
              <RouterLink to={`/${id}`}>
            
              <div style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
              
            <div style={{width:'30%',margin:"11px",borderRight:'1px solid #D4C5C7',textAlign:'center'}} >
             {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/calender1-icon.png" alt="" /> */}
             <h6 id='regYear' style={{color:'#A39BA8',fontWeight:'bold'}}>FUEL TYPE</h6>
            <Text marginTop={'2px'}  textDecoration={'none'} color={'#27005D'} fontSize={'sm'} fontWeight={'500'} marginBottom={'20px'} >
              {fuel} 
            </Text>
            </div>
              
              <div style={{width:'30%',margin:"10px",borderRight:'1px solid #D4C5C7',textAlign:'center'}}>
              {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" /> */}
              <h6 id='km' style={{color:'#A39BA8',fontWeight:'bold'}}>KM</h6>
              <Text  color={'#27005D'} fontWeight={'500'} fontSize={'sm'}  marginBottom={'20px'} > 
              {kms}
              </Text>
              </div>
              <div style={{width:'30%',margin:"10px",textAlign:'center'}}>
              {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" /> */}
              <h6 style={{color:'#A39BA8',fontWeight:"bold"}}>TRANSMISSION</h6>
              <Text  color={'#27005D'} fontWeight={'500'} fontSize={'sm'} marginBottom={'20px'}   > 
              {transmission}
              </Text>
              </div>
           
              
            
             
             
              
              
              </div>
            
            </RouterLink>
             
              
          </Stack>
         
          </div>
         
       
          
        </Box>

  
      </Center>
    );
  }