import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../Ui/Components/Footer';
import Adminnav from '../Ui/Components/Adminnav';
import { useNavigate } from 'react-router';


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
  const [image5, setImage5] = useState('https://www.nomore.org.au/sites/all/themes/nomore/img/noMore.jpg');
  const [image6, setImage6] = useState('https://www.nomore.org.au/sites/all/themes/nomore/img/noMore.jpg');
  const [booked, setBooked] = useState('');
  const[relativeProduct1,setRelativeProduct1] = useState(null)
  const[relativeProduct2,setRelativeProduct2] = useState(null)
  const[relativeProduct3,setRelativeProduct3] = useState(null)
  const[relativeProduct4,setRelativeProduct4] = useState(null)

  const navigate = useNavigate();

  const navigateToAdmin = () => {
    navigate('/admin'); // Replace '/about' with the desired route
};


    // Function to upload an image to ImgBB
const uploadImageToImgBB = async (image) => {
    const formData = new FormData();
    formData.append('image', image);
  
    const response = await axios.post('https://api.imgbb.com/1/upload?key=cdb25a95f8ee90b2d292092496877275', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  
    return response;
  };
  
  // Function to send data to your API
  const sendToYourApi = async (data) => {
    try {
      const response = await axios.post('https://car-back-qqz1.onrender.com/cars', data);
      console.log('API Response:', response.data);
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
      const handleTransmissionChange = (e) => {
        setTransmission(e.target.value);
      };
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
      const handlerelativeProduct1 = (e)=>{
        setRelativeProduct1(e.target.value)
      }
      const handlerelativeProduct2 = (e)=>{
        setRelativeProduct2(e.target.value)
      }
      const handlerelativeProduct3 = (e)=>{
        setRelativeProduct3(e.target.value)
      }
      const handlerelativeProduct4 = (e)=>{
        setRelativeProduct4(e.target.value)
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
  
      // Extract the ImgBB URL from the response
      const imgUrl = imgbbResponse.data.data.url;
      const imgUrl2 = imgbbResponse2.data.data.url;
      const imgUrl3 = imgbbResponse3.data.data.url;
      const imgUrl4 = imgbbResponse4.data.data.url;
      const imgUrl5 = imgbbResponse5.data.data.url;
      const imgUrl6 = imgbbResponse6.data.data.url;

  
      // Now, you can send the name and imgUrl to your API
      sendToYourApi({ year:year, image:imgUrl ,make:make, model:model, kms:kms, price:price, fuel:fuel, transmission:transmission,exteriorcolor:exteriorcolor,image2:imgUrl2,image3:imgUrl3,image4:imgUrl4,image5:imgUrl5,image6:imgUrl6, booked:booked,relativeProduct1:relativeProduct1,relativeProduct2:relativeProduct2,relativeProduct3:relativeProduct3,relativeProduct4:relativeProduct4});
      console.log(year,imgUrl,make);
      navigateToAdmin()
    };
  
    return (
      <>
      <Adminnav/>
      
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
           
      <form style={{margin:'50px',border:'5px solid gray',alignItems:'center',textAlign:'center'}} onSubmit={handleSubmit}>
        <div>
            <h1>Form</h1>
        </div>
        <div>
          <label>Year:</label>
          <input type="number" value={year} onChange={handleYearChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>Make:</label>
          <input type="text" value={make} onChange={handleMakeChange} style={{border:'1px solid black',margin:'5px'}}  />
        </div>
        <div>
          <label>Model:</label>
          <input type="text" value={model} onChange={handleModelChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>Kms:</label>
          <input type="number" value={kms} onChange={handleKmsChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>Transmission:</label>
          <input type="text" value={transmission} onChange={handleTransmissionChange}  style={{border:'1px solid black',margin:'5px'}}/>
        </div>
        <div>
          <label>Exterior Color:</label>
          <input type="text" value={exteriorcolor} onChange={handleColorChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>Fuel:</label>
          <input type="text" value={fuel} onChange={handleFuelChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={handlePriceChange} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
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

        <div>
      <h2>Booking Status</h2>
      <div>
        <label>
          <input
            type="radio"
            name="options"
            value= 'no'
            // checked={booked === 'no'}
            defaultChecked
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
   
      
    </div>
    <div>
          <label>relativeProduct1:</label>
          <input type="number" value={relativeProduct1} onChange={handlerelativeProduct1} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>relativeProduct2:</label>
          <input type="number" value={relativeProduct2} onChange={handlerelativeProduct2} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>relativeProduct3:</label>
          <input type="number" value={relativeProduct3} onChange={handlerelativeProduct3} style={{border:'1px solid black',margin:'5px'}} />
        </div>
        <div>
          <label>relativeProduct4:</label>
          <input type="number" value={relativeProduct4} onChange={handlerelativeProduct4} style={{border:'1px solid black',margin:'5px'}} />
        </div>


        {/* ///////////////////////////// */}
        <button style={{background:'green',color:'white',margin:'7px'}} type="submit">Submit</button>
      </form>
      
      </div>
      <Footer/>
      </>
    );
  }
  
  export default ImageUploadForm;
  