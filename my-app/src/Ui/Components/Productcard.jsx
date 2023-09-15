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
  
  export default function ProductCard({year,id,make,price,image,model,kms,transmission,exteriorcolor,fuel}) {
 
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
            <Image
              rounded={'lg'}
              height={"100%"}
              width={"100%"}
              objectFit={'fit'}
              src={image}
            />
          </Box>
          </RouterLink>
          <div style={{background:"#EDF0F9",borderRadius:'8px'}} >
          <Stack pt={10} align={'center'}>
           
          <RouterLink to={`/${id}`}>
          <Heading   color={'black'}  > 
              {make}

              </Heading>
              </RouterLink>
              <Text textDecoration={'none'}  color={'black'} fontWeight={800} fontSize={'xl'}>
              &#8377; {price}
              </Text>
              <RouterLink to={`/${id}`}>
            <Stack direction={'column'} align={'center'} margin={'5px'}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{width:'50%'}}>
            <div style={{display:'flex'}}>
             {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/calender1-icon.png" alt="" /> */}
             <h3 style={{color:'gray'}}>YEAR:</h3>
            <Text marginTop={'2px'}  textDecoration={'none'} color={'black'} fontSize={'sm'} fontWeight={'bold'} >
              {year}
            </Text>
            </div>
              
              <div style={{display:'flex',marginTop:'0px'}}>
              {/* <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" /> */}
              <h3 style={{color:'gray'}}>KMS:</h3>
              <Text  color={'black'} fontWeight={'bold'}   > 
              {kms}
              </Text>
              </div>
              {/* <div style={{display:'flex',marginTop:'5px'}}>
              <img style={{margin:'5px',width:'18px',height:'18px'}} 
              src="https://cdn.bigboytoyz.com/new-version/attributes/setting-icon.png" alt="" /> 
                 <h3 style={{color:'gray'}}>TRANSMISSION:</h3>
              <Text color={'black'}  > 
                {transmission}
              </Text>
              </div> */}
              </div>
              <div style={{width:'40%'}}>
              {/* <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'20px',height:'20px'}}  src="https://cdn.bigboytoyz.com/new-version/attributes/exterior-color.png" alt="" />
              <h3 style={{color:'gray'}}>COLOR:</h3>
              <Text  margin={'5px'}  color={'black'}  > 
              {exteriorcolor}
              </Text>
              </div> */}
              <div style={{display:'flex'}}>
              {/* <img style={{margin:'5px',width:'23px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/cartype-icon.png" alt="" /> */}
              <h3 style={{color:'gray'}}>MODEL:</h3>
              <Text margin={'0px'} color={'black'} fontWeight={'bold'}   > 
               {model}
              </Text>
              </div>
              <div style={{display:'flex'}}>
              {/* <img style={{margin:'5px',width:'20px',height:'20px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/fueltype-icon.png" alt="" /> */}
              <h3 style={{color:'gray'}}>FUEL:</h3>
              <Text  color={'black'} fontWeight={'bold'}   > 
               {fuel}
              </Text>
              </div>
              </div>
              
              </div>
            </Stack>
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