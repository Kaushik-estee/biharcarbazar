import React from 'react'

import Product from '../Admin/Adminpanel'

import Adminnav from '../Ui/Components/Adminnav';
import Footer from '../Ui/Components/Footer';

const Admin = () => {
  return (
    <div>
        <Adminnav/>
        <Product/>
        <Footer/>
      
    </div>
  )
}

export default Admin
