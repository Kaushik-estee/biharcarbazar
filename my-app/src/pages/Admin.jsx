import React from 'react'
import Nav from '../Ui/Nav'
import Product from '../Admin/Adminpanel'
import {  Link } from 'react-router-dom';
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
