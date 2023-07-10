import React, { useState } from 'react';
import './alladminmodal.css';
import * as IoIcons from 'react-icons/io';
import axios from 'axios';

const AddAdminModal = ({ isOpen, isClose }) => {
  if (!isOpen) {
    return null;
  }

  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password_confirmation: '',
    role: '',
    description: '',
    permissions: '',
  });

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the password and confirm password match
    if (formData.password !== formData.password_confirmation) {
      console.log("Passwords don't match");
      return;
    }


    // Send the form data to the server using Axios
    try {
      const authToken = localStorage.getItem('token')
      let res = axios.post('https://shrtchz.pw/api/admin-profile/create-subadmin', formData,
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }

        })

      console.log(res);

    } catch (error) {
      console.error(error.response.data);

    }


    // Clear the form after submission
    setFormData({
      name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      role: '',
      description: '',
      permissions: '',
    });
  };

  return (
    <div className="modal-content position-absolute top-0 align-items-center">
      <div className="contet p-0">
        <div className="title d-flex px-4 align-items-center justify-content-between">
          <h6>Add Administrator</h6>
          <IoIcons.IoMdClose onClick={isClose} />
        </div>
        <div className="pt-1 px-3">
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column m-2'>
              <label>Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </div>
           
            <div className='flex-row d-flex justify-content-between m-2'>
              <div class="col-md-5 flex-column d-flex">
              <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
              </div>
              <div class="col-md-5 flex-column d-flex">
              <label>Email</label>

                <input type="text" name="email" value={formData.email} onChange={handleInputChange} />

              </div>
            </div>
           
            <div className='flex-row d-flex justify-content-between m-2'>
              <div class="col-md-5 flex-column d-flex">
              <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
              </div>
              <div class="col-md-5 flex-column d-flex">
              <label> Confirm Password</label>
                <input type="password" name="password_confirmation" value={formData.password_confirmation} onChange={handleInputChange} />
              </div>
            </div>
            <div className="flex-row d-flex justify-content-between m-2">
              <div className="col-md-5 flex-column d-flex">
                <div className="d-flex flex-column">
                  <label className="pb-2" htmlFor="roleSelect">
                    Role
                  </label>
                  <select
                    id="roleSelect"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="option1">Developer</option>
                    <option value="option2">Engineer</option>
                    <option value="option3">Support</option>
                  </select>
                </div>
              </div>
              <div className="col-6 col-md-5 flex-column d-flex">
                <div className="d-flex flex-column">
                  <label className="pb-2" htmlFor="descriptionSelect">
                    Description
                  </label>
                  <select
                    id="descriptionSelect"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  >
                    <option value="option1">Site Admin with access tools</option>
                    <option value="option2">Site Engineer with access tools</option>
                    <option value="option3">Support Admin with access tools</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="pt-1">
              <div className="d-flex flex-column px-2">
                <label className="pb-1" htmlFor="permissionsSelect">
                  Permissions
                </label>
                <select
                  id="permissionsSelect"
                  name="permissions"
                  value={formData.permissions}
                  onChange={handleInputChange}
                >
                  <option value="option1">Developer</option>
                  <option value="option2">Engineer</option>
                  <option value="option3">Support</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-5">
              <div className="d-flex justify-content-between bn ">
                <button className="cancel_bt px-2 col-5 " onClick={isClose}>
                  Cancel
                </button>
                <button className="save_bt px-2 col-5"  >
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

export default AddAdminModal;
