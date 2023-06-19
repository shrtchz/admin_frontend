import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi'

const UploadImage = ({ handleUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log(file.name)
    if (file) {
      handleUpload(file);
    } else {
      // Handle error for non-image files
      console.error('The file must be an image.');
    }
  };

  

  return (
    <div className='upload mx-4 d-flex align-items-center' >
      <FiIcons.FiImage/>

      <label>

      Add Image
      <input type="file" accept="file" onChange={handleFileUpload} /></label>
   
    </div>
  );
};

export default UploadImage;
