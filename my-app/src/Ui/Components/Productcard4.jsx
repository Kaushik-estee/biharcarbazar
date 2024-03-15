import React from 'react';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import WhatsAppButton from './Whatsapp';
import PhoneCallButton from './Call';
import './ProductCard.css';

export default function ProductCard({
  year,
  id,
  make,
  price,
  image,
  model,
  kms,
  transmission,
  fuel,
  booked,
}) {
  return (
    <Center py={12}>
      <Box
        roundedBottom={'xl'}
        role={'group'}
        p={4}
        maxW={'450px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        pos={'relative'}
        zIndex={1}
      >
        <RouterLink to={`/${id}`}>
          <Box
            roundedTop={'xl'}
            mt={-12}
            backgroundColor={'#EDF0F9'}
            pos={'relative'}
            height={'220px'}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            {booked === 'yes' ? (
              <button
                style={{
                  width: '80px',
                  height: '30px',
                  zIndex: '2000',
                  position: 'absolute',
                  background: 'red',
                  color: 'white',
                  marginTop: '8px',
                  borderBottomRightRadius: '11px',
                  borderTopRightRadius: '11px',
                }}>
                BOOKED
              </button>
            ) : booked === 'sold' ? (
              <button
                style={{
                  width: '80px',
                  height: '30px',
                  zIndex: '2000',
                  position: 'absolute',
                  background: 'green',
                  color: 'white',
                  marginTop: '8px',
                  borderBottomRightRadius: '11px',
                  borderTopRightRadius: '11px',
                }}>
                SOLD
              </button>
            ) : null}
            <Image
              rounded={'xl'}
              height={'100%'}
              width={'100%'}
              objectFit={'contain'}
              src={image}
              position={'absolute'}
            />
            <h1 id='whatsappIcon'>
              <WhatsAppButton />
            </h1>
            <h1 id='calIcon'>
              <PhoneCallButton />
            </h1>
          </Box>
        </RouterLink>
        <div
          style={{
            background: '#EDF0F9',
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            height: '250px',
          }}>
          <Stack>
            <div
              style={{
                background: '#EDF0F9',
                width: '90%',
                margin: 'auto',
              }}>
              <RouterLink to={`/${id}`}>
                <Heading color={'#27005D'} marginTop={'25px'} fontSize={'x-large'}>
                  {year} {make} {model} {fuel}
                </Heading>
              </RouterLink>
            </div>
            {booked !== 'sold' && (
              <div style={{ width: '90%', margin: 'auto' }}>
                <Text textDecoration={'none'} color={'#27005D'} fontWeight={500} fontSize={'xl'}>
                  PRICE &#8377; {price}
                </Text>
              </div>
            )}
            <RouterLink to={`/${id}`}>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                <div
                  style={{
                    width: '30%',
                    margin: '11px',
                    textAlign: 'center',
                    display: 'flex',
                    borderRight: '1px solid #D4C5C7',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}>
                  <h6 id='regYear' style={{ color: '#A39BA8', fontWeight: 'bold', marginTop: '7px' }}>
                    FUEL TYPE
                  </h6>
                  <Text marginTop={'2px'} textDecoration={'none'} color={'#27005D'} fontSize={'sm'} fontWeight={'500'}>
                    {fuel}
                  </Text>
                </div>
                <div
                  style={{
                    width: '30%',
                    margin: '10px',
                    textAlign: 'center',
                    borderRight: '1px solid #D4C5C7',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}>
                  <div>
                    <h6 id='km' style={{ color: '#A39BA8', fontWeight: 'bold', marginTop: '7px' }}>
                      KM
                    </h6>
                    <Text color={'#27005D'} fontWeight={'500'} fontSize={'sm'}>
                      {kms}
                    </Text>
                  </div>
                </div>
                <div
                  style={{
                    width: '30%',
                    margin: '10px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px',
                  }}>
                  <h6 style={{ color: '#A39BA8', fontWeight: 'bold', marginTop: '7px' }}>TRANSMISSION</h6>
                  <Text color={'#27005D'} fontWeight={'500'} fontSize={'sm'}>
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
