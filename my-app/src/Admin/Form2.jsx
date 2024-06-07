import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Ui/Components/Footer';
import Adminnav from '../Ui/Components/Adminnav';
import { useNavigate } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/KhRSXnV/show-Roomadress.png" alt="show-Roomadress" border="0"></a> */}
{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/2FyTbsQ/contact.png" alt="contact" border="0"></a> */}


function ImageUploadForm() {
    const [year, setYear] = useState('');
    const [image, setImage] = useState(null);
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [kms, setKms] = useState("");
    const [transmission, setTransmission] = useState("");
    const [exteriorcolor, setExteriorcolor] = useState("");
    const [fuel, setFuel] = useState("");
    const [price, setPrice] = useState(null);
    const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  // 
  const [image6, setImage6] = useState(null);
  // 
  const [booked, setBooked] = useState('no');
 

  const navigate = useNavigate();

  const navigateToAdmin = () => {
    navigate('/admin'); // Replace '/about' with the desired route
};


    // Function to upload an image to ImgBB
    const uploadImageToImgBB = async (image) => {
      if (image) {
        const formData = new FormData();
        formData.append('image', image);
    
        const response = await axios.post('https://api.imgbb.com/1/upload?key=cdb25a95f8ee90b2d292092496877275', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
    
        return response;
      } else {
        // Return null or handle the case where there is no image
        return null;
      }
    };
  
  // Function to send data to your API
  const sendToYourApi = async (data) => {
    try {
      const response = await axios.post('https://kanbanbackend-001h.onrender.com/cars', data);
      console.log('API Response:', response.data);
      toast.success('Added successfully');
    } catch (error) {
      console.error('API Error:', error);
      console.log(data);
      
    }
  };
  
  
    const handleYearChange = (e) => {
      setYear(e.target.value);
    };
    const handleModelChange = (e) => {
        setModel(e.target.value);
      };
      const handleKmsChange = (e) => {
        setKms(e.target.value);
      };
    //   const handleTransmissionChange = (e) => {
    //     setTransmission(e.target.value);
    //   };
      const handleColorChange = (e) => {
        setExteriorcolor(e.target.value);
      };
      const handleFuelChange = (e) => {
        setFuel(e.target.value);
      };
      const handlePriceChange = (e) => {
        setPrice(e.target.value);
      };
      const handleMakeChange = (e) => {
        setMake(e.target.value);
      };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
    const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        setImage2(file);
      };
      const handleImageChange3 = (e) => {
        const file = e.target.files[0];
        setImage3(file);
      };
      const handleImageChange4 = (e) => {
        const file = e.target.files[0];
        setImage4(file);
      };
      const handleImageChange5 = (e) => {
        const file = e.target.files[0];
        setImage5(file);
      };
      const handleImageChange6 = (e) => {
        const file = e.target.files[0];
        setImage6(file);
      };
      const handleOptionChange = (event) => {
        setBooked(event.target.value);
      };
      const handleOptionChangeTransmission = (event)=>{
        setTransmission(event.target.value)
      }
    
  
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Upload the image to ImgBB using the ImgBB API
        const imgbbResponse = await uploadImageToImgBB(image);
        const imgbbResponse2 = await uploadImageToImgBB(image2);
        const imgbbResponse3 = await uploadImageToImgBB(image3);
        const imgbbResponse4 = await uploadImageToImgBB(image4);
        const imgbbResponse5 = await uploadImageToImgBB(image5);
        const imgbbResponse6 = await uploadImageToImgBB(image6);
      
        // Check if imgbbResponse is null before accessing its 'data' property
        const imgUrl = imgbbResponse ? imgbbResponse.data.data.url : null;
        const imgUrl2 = imgbbResponse2 ? imgbbResponse2.data.data.url : null;
        const imgUrl3 = imgbbResponse3 ? imgbbResponse3.data.data.url : null;
        const imgUrl4 = imgbbResponse4 ? imgbbResponse4.data.data.url : null;
        const imgUrl5 = imgbbResponse5 ? imgbbResponse5.data.data.url : null;
        const imgUrl6 = imgbbResponse6 ? imgbbResponse6.data.data.url : null;
      
        // Now, you can send the name and imgUrl to your API
        sendToYourApi({ year: year, image: imgUrl, make: make, model: model, kms: kms, price: price, fuel: fuel, transmission: transmission, exteriorcolor: exteriorcolor, image2: imgUrl2, image3: imgUrl3, image4: imgUrl4, image5: imgUrl5, image6: imgUrl6, booked: booked });
      
        navigateToAdmin();
      };
      
  
    return (
      <>
      <Adminnav/>
      
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           
      <form style={{margin:'50px',border:'5px solid gray',alignItems:'center',textAlign:'center'}} onSubmit={handleSubmit}>
        <div>
            <h1>Form</h1>
        </div>
        {/* <div>
          <label>Year:</label>
          <input type="number" value={year} onChange={handleYearChange} style={{border:'1px solid black',margin:'5px'}} />
        </div> */}
          <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
      <h1>Select Year:</h1>
      <select style={{border:'1px solid black'}} onChange={handleYearChange } value={year}>
        <option value="">select</option>
        <option value="2000">2000</option>
        <option value="2001">2001</option>
        <option value="2002">2002</option>
        <option value="2003">2003</option>
        <option value="2004">2004</option>
        <option value="2005">2005</option>
        <option value="2006">2006</option>
        <option value="2007">2007</option>
        <option value="2008">2008</option>
        <option value="2009">2009</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
        <option value="2016">2016</option>
        <option value="2017">2017</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>

      </select>
      
    </div>
        {/* <div>
          <label>Make:</label>
          <input type="text" value={make} onChange={handleMakeChange} style={{border:'1px solid black',margin:'5px'}}  />
        </div> */}
            <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center",marginTop:'7PX'}}>
      <h1>Select Make:</h1>
      <select style={{border:'1px solid black'}} onChange={handleMakeChange } value={make}>
      <option value="">Select</option>
        <option value="TATA">TATA</option>
        <option value="MAHINDRA">MAHINDRA</option>
        <option value="AUDI">AUDI</option>
        <option value="BMW">BMW</option>
        <option value="RENAULT">RENAULT</option>
        <option value="DATSON">DATSON</option>
        <option value="HONDA">HONDA</option>
        <option value="HYUNDAI">HYUNDAI</option>
        <option value="FORD">FORD</option>
        <option value="FIAT">FIAT</option>
        <option value="TOYOTA">TOYOTA</option>
        <option value="MARUTI SUZUKI">MARUTI SUZUKI</option>
        <option value="HONDA">HONDA</option>
        <option value="KIA">KIA</option>
      

        
      </select>
      
    </div>
        <div>
          <label>Model:</label>
          <input type="text" value={model} onChange={handleModelChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>Kms:</label>
          <input type="number" value={kms} onChange={handleKmsChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        {/* <div>
          <label>Transmission:</label>
          <input type="text" value={transmission} onChange={handleTransmissionChange}  style={{border:'1px solid black',margin:'5px'}}/>
        </div> */}
           <div>
      <h2>Transmissiom</h2>
      <div>
        <label>
          <input
            type="radio"
            name="options2"
            value= 'AUTOMATIC'
            // checked={booked === 'no'}
          
            onChange={handleOptionChangeTransmission}
          />
        AUTOMATIC
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="options2"
            value="MANUAL"
            // checked={booked === 'yes'}
            onChange={handleOptionChangeTransmission}
          />
          MANUAL
        </label>
      </div>
   
      
    </div>
        <div>
          <label>Exterior Color:</label>
          <input type="text" value={exteriorcolor} onChange={handleColorChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        {/* <div>
          <label>Fuel:</label>
          <input type="text" value={fuel} onChange={handleFuelChange} style={{border:'1px solid black',margin:'5px'}} />
        </div> */}
     <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center"}}>
      <h1>Fuel Type:</h1>
      <select style={{border:'1px solid black'}} onChange={handleFuelChange } value={fuel}>
      <option value="">Select</option>
        <option value="PETROL">PETROL</option>
        <option value="DIESEL">DIESEL</option>
        <option value="CNG">CNG</option>
        <option value="ELECTRIC">ELECTRIC</option>
        <option value="HYBRID">HYBRID</option>
        
     

      </select>
      
    </div>

        
        
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
            <h3 style={{color:'blue',fontWeight:"bold"}}>Please Upload Atleast 4 images</h3>
          <label>Upload Image1:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div>
          <label>Upload Image2:</label>
          <input type="file" accept="image/*" onChange={handleImageChange2} />
        </div>
        <div>
          <label>Upload Image3:</label>
          <input type="file" accept="image/*" onChange={handleImageChange3} />
        </div>
        <div>
          <label>Upload Image4:</label>
          <input type="file" accept="image/*" onChange={handleImageChange4} />
        </div>
        <div>
          <label>Upload Image5:</label>
          <input type="file" accept="image/*" onChange={handleImageChange5} />
        </div>
        <div>
          <label>Upload Image6:</label>
          <input type="file" accept="image/*" onChange={handleImageChange6} />
        </div>
        {/* /////////////////////////////// */}

        {/* <div>
      <h2>Booking Status</h2>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value= 'no'
            // checked={booked === 'no'}
           
            onChange={handleOptionChange}
          />
          NO
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value="yes"
            // checked={booked === 'yes'}
            onChange={handleOptionChange}
          />
          YES
        </label>
      </div>
   
      
    </div> */}
            <div style={{display:"flex",margin:"auto",justifyContent:"center",textAlign:"center",alignItems:"center",marginTop:'7PX'}}>
      <h1>Booking Status:</h1>
      <select style={{border:'1px solid black'}} onChange={handleOptionChange} value={booked}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
        <option value="sold">Sold</option>
      
      

        
      </select>
      
    </div>
 


        {/* ///////////////////////////// */}
        <button style={{background:'green',color:'white',margin:'7px'}} type="submit">Submit</button>
      </form>
      
      </div>
      <ToastContainer/>
      <Footer/>
      </>
    );
  }
  
  export default ImageUploadForm;
  