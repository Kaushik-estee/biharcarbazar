import React from 'react'
import Nav from '../Ui/Nav'
import Footer from '../Ui/Components/Footer'
import "../Ui/Components/Contact.css"
import { BiLogoGmail } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
const Contact = () => {
  return (
    <div>
        <Nav/>
    <div id='contactDetails'>
      <div id='details'>
        <h1 style={{fontWeight:'bolder',fontSize:'40px',color:'black'}}>Contact Details</h1>
        <div style={{display:'flex'}}>
          <h1 style={{marginTop:'4px',marginRight:'10px',fontSize:'60px',color:'red'}}><BiLogoGmail/></h1>

        <h1 style={{marginTop:'12px',fontWeight:'bolder',fontSize:'24px',color:'gray'}}>contact@idealpv.in</h1></div>
        <div style={{display:'flex'}}>
          <h1 style={{marginTop:'4px',marginRight:'10px',fontSize:'50px',color:'green'}}><FiPhoneCall/></h1>

        <h1 style={{marginTop:'12px',fontWeight:'bolder',fontSize:'24px',color:'gray',marginLeft:'16px'}}>9297777103</h1></div>
       
      </div>
      
      <div id='address'>
      <h1 style={{fontWeight:'bolder',fontSize:'40px',color:'black'}}>OUR SHOWROOM</h1>
      <h1 style={{fontWeight:'bold',fontSize:'20px',color:'gray'}}>
      Tata Motors Passenger Car Dealership in Muzaffarpur, Bihar at NH22, Sakri Saraiya, along with worksh
        NH22, Sakri Saraiya., Muzaffarpur, India, Bihar</h1>
      </div>
      
    </div>
      <div id='comm' >
    <div id='map' >
    <iframe
            title="Embedded Map"
           
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.107272326881!2d85.99208397538777!3d26.19318849064123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39edc947ea09a837%3A0x5630a0a008ab2d1c!2sEstee%20Dealers%20Pvt%20Ltd-%20Tata%20Motors%20Dealership%2C%20Darbhanga!5e0!3m2!1sen!2sin!4v1693897444633!5m2!1sen!2sin"
            allowFullScreen=""
          ></iframe>
    </div>
    <div id='form' >
      
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScMZ_v_4Biu5PfMXxnvU6wHMzwZO4EGxNVE9x2_vv7TxbbTOw/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

    </div>
    </div>
    <footer> <Footer/></footer>
    </div>
  )
}

export default Contact


