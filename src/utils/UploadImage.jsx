import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi'

const UploadImage = ({ onImageUpload ,setSelectedImage ,handleUpload}) => {
  
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (event) => {
      const imageUrl = event.target.result;
      handleUpload(imageUrl);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  

  return (
    <div className='upload mx-4 d-flex align-items-center' >
      <FiIcons.FiImage/>

      <label>

      Add Image
      <input type="file" accept="image/*" onChange={handleFileUpload} /></label>
   
    </div>
  );
};

export default UploadImage;
