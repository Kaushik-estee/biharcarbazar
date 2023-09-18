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
          role={'group'}
          p={6}
          maxW={'430px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          // boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          boxShadow= {"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
          >
                 <RouterLink to={`/${id}`}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              // backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
                   {booked === 'yes' ? (
            <>
            
              <button style= {{width:'80px',height:'30px',zIndex:'2000',position:'absolute',background:'red',color:'white',marginTop:'3px',borderBottomRightRadius:'11px',borderTopRightRadius:'11px'}}>BOOKED</button>
            </>
          ) : null}
            <Image
              rounded={'lg'}
              height={"100%"}
              width={"100%"}
              objectFit={'fit'}
              src={image}
              position={'absolute'}
            />
          </Box>
          </RouterLink>
          <div style={{background:"#EDF0F9",borderRadius:'8px'}} >
          <Stack  >
          <div>
          <RouterLink to={`/${id}`}>
       
          <Heading   color={'#00008B'} margin={'10px'}  > 
              {year} {make} {fuel}

              </Heading>
              </RouterLink>
              </div>
              <Text textDecoration={'none'}  color={'#00008B'} fontWeight={500} margin={'10px'} fontSize={'xl'}> PRICE  
              &#8377; {price}
              </Text>
              <RouterLink to={`/${id}`}>
            
              <div style={{display:'flex',width:'110%',justifyContent:'space-around'}}>
              
            <div style={{width:'36%',margin:"11px",borderRight:'1px solid gray'}} >
             {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/calender1-icon.png" alt="" /> */}
             <h3 id='regYear' style={{color:'gray',fontWeight:'bold'}}>REG. YEAR</h3>
            <Text marginTop={'2px'}  textDecoration={'none'} color={'#00008B'} fontSize={'sm'} fontWeight={'bold'} >
              {year}
            </Text>
            </div>
              
              <div style={{width:'20%',margin:"10px",borderRight:'1px solid gray'}}>
              {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" /> */}
              <h3 id='km' style={{color:'gray',fontWeight:'bold'}}>KM</h3>
              <Text  color={'#00008B'} fontWeight={'bold'}   > 
              {kms}
              </Text>
              </div>
              <div style={{width:'50%',margin:"10px"}}>
              {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" /> */}
              <h3 style={{color:'gray',fontWeight:'bold'}}>FUEL TYPE</h3>
              <Text  color={'#00008B'} fontWeight={'bold'}   > 
              {fuel}
              </Text>
              </div>
           
              
            
             
             
              
              
              </div>
            
            </RouterLink>
             
              
          </Stack>
          <div id='callIcons' >
            <WhatsAppButton/>
            <PhoneCallButton/>
          </div>
          </div>
         
       
          
        </Box>

  
      </Center>
    );
  }