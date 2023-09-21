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
        <div style={{height:'100px'}}></div>
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
        NH22, Sakri Saraiya., Muzaffarpur, India, Bihar, 844127</h1>
      </div>
      
    </div>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.387131184266!2d85.3558288753837!3d26.05360159648191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed13f911ad4ab3%3A0x1431e7ce6cf4557c!2sTata%20Motors%20Cars%20Showroom%20-%20Ideal%2C%20Sakri%20Saraiya!5e0!3m2!1sen!2sin!4v1695273748969!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      <div id='comm' >
    <div id='map' >
    <iframe
            title="Embedded Map"
           
            
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.387131184266!2d85.3558288753837!3d26.05360159648191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed13f911ad4ab3%3A0x1431e7ce6cf4557c!2sTata%20Motors%20Cars%20Showroom%20-%20Ideal%2C%20Sakri%20Saraiya!5e0!3m2!1sen!2sin!4v1695273748969!5m2!1sen!2sin"
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


