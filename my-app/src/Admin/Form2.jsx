import React, { useState } from 'react';
import axios from 'axios';


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
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Upload the image to ImgBB using the ImgBB API
      const imgbbResponse = await uploadImageToImgBB(image);
      const imgbbResponse2 = await uploadImageToImgBB(image2);
      const imgbbResponse3 = await uploadImageToImgBB(image3);
      const imgbbResponse4 = await uploadImageToImgBB(image4);
      const imgbbResponse5 = await uploadImageToImgBB(image5);
  
      // Extract the ImgBB URL from the response
      const imgUrl = imgbbResponse.data.data.url;
      const imgUrl2 = imgbbResponse2.data.data.url;
      const imgUrl3 = imgbbResponse3.data.data.url;
      const imgUrl4 = imgbbResponse4.data.data.url;
      const imgUrl5 = imgbbResponse5.data.data.url;

  
      // Now, you can send the name and imgUrl to your API
      sendToYourApi({ year:year, image:imgUrl ,make:make, model:model, kms:kms, price:price, fuel:fuel, transmission:transmission,exteriorcolor:exteriorcolor,image2:imgUrl2,image3:imgUrl3,image4:imgUrl4,image5:imgUrl5});
      console.log(year,imgUrl,make);
    };
  
    return (
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
          <input type="text" value={kms} onChange={handleKmsChange} style={{border:'1px solid black',margin:'5px'}} />
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
        <button style={{background:'green',color:'white',margin:'7px'}} type="submit">Submit</button>
      </form>
      </div>
    );
  }
  
  export default ImageUploadForm;
  