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

  console.log(photoUrl);

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      isClose();
      const photoUrlWithPath = photoUrl ? `/storage/category_photos/${photoUrl}` : '';
      const response = await axios.post(
        endpoint,
        { name,photo_url:photoUrlWithPath || ''},
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      const data = response.data.data;
      console.log(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleUpload = (imageUrl) => {
    setPhotoUrl(imageUrl);
  };
  
  return (
    <div className='modal-content position-absolute top-0 align-items-center'>
      <div className='cont'>
        <div className='title row align-items-center pt-2 px-4'>
          <div className='d-flex justify-content-between'>
            <h5>Add Category</h5>
            <IoIcons.IoMdClose onClick={isClose} />
          </div>
        </div>
        <div className='body mt-5 mx-4'>
          <form onSubmit={handleSave}>
            <div>
              <label>Category</label>
              <input
                type='text'
                id='categoryName'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='my-3 d-flex image-container align-items-center'>
              <UploadImage handleUpload={handleUpload} />
            </div>
            <div className='d-flex justify-content-end m-4 '>
              <div className='d-flex justify-content-between bn'>
                <button className='bt px-2' onClick={isClose}>
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
