import React, { useEffect, useState } from 'react';
import './editmodal.css';
import * as IoIcons from 'react-icons/io';
import axios from 'axios';

const AddMarket = ({ data, isOpen, isClose, endpoint, authToken }) => {
  if (!isOpen) {
    return null;
  }
  const nest = data;
  console.log(nest);

  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

//   console.log(photoUrl);

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      isClose();
    //   const photoUrlWithPath = photoUrl ? `/storage/category_photos/${photoUrl}` : '';
      const response = await axios.post(
        endpoint,
        { name},
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      const data = response.data.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };



  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='modal-content position-absolute top-0 align-items-center'>
      <div className='cont'>
        <div className='title row align-items-center pt-2 px-4'>
          <div className='d-flex justify-content-between'>
            <h5> Add Market</h5>
            <IoIcons.IoMdClose onClick={isClose} />
          </div>
        </div>
        <div className='body mt-5 mx-4'>
          <form onSubmit={handleSave}>
            <div>
              <label>Market</label>
              <input
                type='text'
                id='marketName'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div>
              <label> Category</label>
              <select value={selectedValue} onChange={handleSelectChange}>
                {data.map(item => (
                  <option className='opt' key={item.id} value={item.category?.name || ''}>
                    {item.category?.name || 'N/A'}
                  </option>
                ))}
              </select>
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

export default AddMarket;