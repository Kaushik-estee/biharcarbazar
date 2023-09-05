// product card
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  
  } from '@chakra-ui/react';
import { color } from 'framer-motion';
  import {Link as RouterLink} from "react-router-dom"
  
  // const IMAGE =
  //   'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
  export default function ProductCard({year,id,make,price,image,model,kms,transmission,exteriorcolor,fuel}) {
 
    return (
      <Center py={12}>
        
        <RouterLink to={`/${id}`}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          // boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          boxShadow= {"rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
          >
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
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <div style={{background:"#D3D3D3",borderRadius:'8px'}} >
          <Stack pt={10} align={'center'}>
           
            
          <Heading   color={'black'}  > 
              {make}

              </Heading>
              <Text textDecoration={'none'}  color={'black'} fontWeight={800} fontSize={'xl'}>
              &#8377; {price}
              </Text>
            
            <Stack direction={'column'} align={'center'} margin={'5px'}>
              <div style={{display:'flex',justifyContent:'space-between'}}>
              <div style={{width:'59%'}}>
            <div style={{display:'flex'}}>
             <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/calender1-icon.png" alt="" />
            <Text margin={'4px'}  textDecoration={'none'} color={'black'} fontSize={'sm'} >
              {year}
            </Text>
            </div>
              
              <div style={{display:'flex',marginTop:'5px'}}>
              <img style={{margin:'5px',width:'18px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/kms-done.png" alt="" />
              <Text  color={'black'}  > 
              {kms}
              </Text>
              </div>
              <div style={{display:'flex',marginTop:'5px'}}>
              <img style={{margin:'5px',width:'18px',height:'18px'}} 
              src="https://cdn.bigboytoyz.com/new-version/attributes/setting-icon.png" alt="" /> 
              <Text color={'black'}  > 
                {transmission}
              </Text>
              </div>
              </div>
              <div style={{width:'40%'}}>
              <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'20px',height:'20px'}}  src="https://cdn.bigboytoyz.com/new-version/attributes/exterior-color.png" alt="" />
              <Text  margin={'5px'}  color={'black'}  > 
              {exteriorcolor}
              </Text>
              </div>
              <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'23px',height:'18px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/cartype-icon.png" alt="" />
              <Text margin={'5px'} color={'black'}  > 
               {model}
              </Text>
              </div>
              <div style={{display:'flex'}}>
              <img style={{margin:'5px',width:'20px',height:'20px'}} src="https://cdn.bigboytoyz.com/new-version/attributes/fueltype-icon.png" alt="" />
              <Text  color={'black'}  > 
               {fuel}
              </Text>
              </div>
              </div>
              
              </div>
            </Stack>
             
             
              
          </Stack>
          </div>
        </Box>
        </RouterLink>
      </Center>
    );
  }