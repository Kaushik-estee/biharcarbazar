import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = 'cdb25a95f8ee90b2d292092496877275';

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      // Handle the response JSON here
      const uploadedImageUrl = response.data.data.url;
      setImageUrl(uploadedImageUrl);
      console.log(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
 
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageUploader;
