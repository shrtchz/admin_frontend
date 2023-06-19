// import React, { useState } from 'react';
// import * as FiIcons from 'react-icons/fi'
// import   './prediction.css'

// const UploadImage = ({ handleUpload }) => {
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     console.log(file.name)
//     if (file) {
//       handleUpload(file);
//     } else {
//       // Handle error for non-image files
//       console.error('The file must be an image.');
//     }
//   };

  

//   return (
//     <div className='uploadimage me-4 d-flex align-items-center' >
//       {/* <FiIcons.FiImage/> */}

//       <label>

      
//       <input type="file" accept="file" onChange={handleFileUpload} />
//       Add</label>
   
//     </div>
//   );
// };

// export default UploadImage;
import React, { useState } from 'react';
import * as FiIcons from 'react-icons/fi'

const UploadImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className='uploadimage mb-3 position-relative d-flex align-items-start'>
    <label>
    <input  id="image-upload"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: 'none' }} />
      <span className='clip d-flex align-items-center justify-content-center'>
        <FiIcons.FiPaperclip/>

      </span>
      </label>
      
      {selectedImage && (
        <div style={{ width: '100%', height:'in' }}>
          <img src={selectedImage} alt="Selected" style={{ width: '100%' }}/>
        </div>
      )}
    </div>
  );
};

export default UploadImage;

