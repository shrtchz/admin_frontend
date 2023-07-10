import React, { useEffect, useState } from 'react';
import './editmodal.css';
import * as IoIcons from 'react-icons/io';
import axios from 'axios';

const AddCurrency = ({isOpen, isClose, endpoint, authToken }) => {
  if (!isOpen) {
    return null;
  };

  const [name, setName] = useState('');
  const [acronym, setAcronym] = useState('');

  const [selectedValue, setSelectedValue] = useState('');

//   console.log(photoUrl);

  const handleSave = async (event) => {
    event.preventDefault();
    try {
      isClose();
    

      const response = await axios.post(
        endpoint,
        { name, acronym},
        { headers: { Authorization: `Bearer ${authToken}` } }
      );
      const dt = response.data.data;
    
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className='addmodal-content position-absolute top-0 align-items-center'>
      <div className='tpcont'>
        <div className='title row align-items-center pt-2 px-4'>
          <div className='d-flex justify-content-between'>
            <h5> Add Currency</h5>
            <IoIcons.IoMdClose onClick={isClose} />
          </div>
        </div>
        <div className='body my-4 mx-4'>
          <form onSubmit={handleSave}>
            <div className='d-flex flex-column mb-2'>
              <label>Currency</label>
              <input
                type='text'
                id='marketName'
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className='d-flex flex-column '>
              <label> Acronym</label>
              <input
                type='text'
                id='acronymName'
                value={acronym}
                onChange={(event) => setAcronym(event.target.value)}
              />
            </div>
           
            <div className='d-flex justify-content-end m-4 '>
              <div className='d-flex justify-content-between bn'>
                <button className='bt px-2 cancel-button' onClick={isClose}>
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

export default AddCurrency;
