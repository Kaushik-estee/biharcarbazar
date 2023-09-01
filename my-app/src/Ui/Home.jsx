import { Box } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import Product from './Components/Product'

const Home = () => {
  return (
    <Box>
      <Nav/>
      <Product/>
    </Box>
  )
}

export default Home
