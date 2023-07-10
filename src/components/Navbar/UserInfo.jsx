import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import "./userinfo.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "https://shrtchz.pw/api/auth/logout";

const UserInfo = ({ onLogout }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("dropped");
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = async () => {
    // Code to handle the logout action
    try {
      const authToken = localStorage.getItem("token");
      console.log(authToken);
      await axios.post(
        `${url}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      localStorage.removeItem("token");
      navigate("/");

      onLogout(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <span className="text-xs text-white">Babat Lawrence</span>

        <div className="logout-dropdown">
          <FaAngleDown className="" onClick={handleClick} />
          {isDropdownOpen && (
            <div className="dropdown-content position-absolute translate-middle-x translate-end-x ">
              <a href="#" className="log">
                Profile
              </a>
              <a href="#" className="log">
                Settings
              </a>
              <a href="#" className="log" onClick={handleLogout}>
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserInfo;

// import React, { useState } from 'react';
// import { FaAngleDown } from 'react-icons/fa';
// import axios from 'axios';

// const UserInfo = ({ onLogin }) => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       const authToken = localStorage.getItem('token');
//       await axios.post(
//         'https://shrtchz.pw/api/auth/logout',
//         // process.env.REACT_APP_LOGOUT_URL,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${authToken}`,
//           },
//         }
//       );
//       localStorage.removeItem('token');
//       onLogin(false);
//     } catch (error) {
//       console.log(error.response);
//     }
//   };

//   return (
//     <>
//       <div className="d-flex flex-row justify-content-between w-40 align-items-center">
//         Babat Lawrence
//         <div className="logout-dropdown">
//           <FaAngleDown className="" onClick={handleClick} />
//           {isDropdownOpen && (
//             <div className="dropdown-content start-60 ">
//               <a href="#" className="log">
//                 Profile
//               </a>
//               <a href="#" className="log">
//                 Settings
//               </a>
//               <a href="#" className="log" onClick={handleLogout}>
//                 Logout
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default UserInfo;
