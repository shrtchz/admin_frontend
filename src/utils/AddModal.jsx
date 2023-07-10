import React, { useEffect, useState } from 'react';
import './editmodal.css';
import * as IoIcons from 'react-icons/io';
import UploadImage from './UploadImage';
import axios from 'axios';

const AddModal = ({ isOpen, isClose, endpoint, authToken }) => {
  if (!isOpen) {
    return null;
  }
  
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  // console.log("phot", photoUrl);

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      isClose();
      const formData = new FormData();
      formData.append('name', name);
      if (photoUrl) {
        formData.append('photo', photoUrl, photoUrl.name);
      }
      console.log(formData)
      const response = await axios.post(endpoint, formData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      

      const data = response.data.data;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleUpload = (file) => {
    console.log(file)
    setPhotoUrl(file);
  };
 
  return (
    <div className="addmodal-content   ">
      <div className='edcont'>
        <div className='title row align-items-center pt-2 px-4'>
          <div className='d-flex justify-content-between'>
            <h5>Add Category</h5>
            <IoIcons.IoMdClose onClick={isClose} />
          </div>
        </div>
        <div className='body mt-3 mx-4'>
          <form onSubmit={handleSave}>
            <div className='mb-3 flex-column d-flex'>
              <label className='py-2'>Category</label>
              <input
                type='text'
                id='categoryName'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='my-4 d-flex image-container align-items-center'>
              <UploadImage handleUpload={handleUpload} />
            </div>
            <div className='d-flex justify-content-end m-4 mt-5 '>
              <div className='d-flex justify-content-between bn'>
                <button className='cancel-button px-2' onClick={isClose}>
                  Cancel
                </button>
                <button className='submit-button' type='submit'>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
