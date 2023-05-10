import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/accesslogs.css'
import * as IoIcons from 'react-icons/io'

const url='https://shrtchz.pw/api/admin-profile/all/user?limit=9'

const Accesslogs = ({sidebar}) => {
  const [users, setUsers]=useState([])
  // const checked=false;
  

  useEffect(()=>{
    async function fetchUsers (){
      const authToken=localStorage.getItem('token')
      let res=await axios.get(`${url}`,{headers: {
        Authorization: `Bearer ${authToken}`}
      })
      // console.log(res.data)
      console.log(users.data)
      setUsers(res.data.data)
    }
   fetchUsers()
  },[])

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    const itemIndex = selectedItems.indexOf(itemId);
    if (itemIndex === -1) {
      console.log(itemId)
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      setSelectedItems(users.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const isChecked = (itemId) => {
    return selectedItems.indexOf(itemId) !== -1;
  };

  const isAllChecked = () => {
    return users.length > 0 && selectedItems.length === users.length;
  };
  
  return (
    <>
      <table  className="checkbox-table">
      <thead>
        <tr>
        <th> 
          <input
                type="checkbox"
                checked={isAllChecked()}
                onChange={handleSelectAllChange}
              />
        </th>
          <th>User  ID</th>
          <th>Email</th>
          <th>IP Address</th>
          <th>Action</th>
          <th>Last Login</th>


        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                type="checkbox"
                checked={isChecked(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </td>
            <td>
              <p className="userid">
              {item.name} 
              </p>
              @{item.username}
            </td>
            <td>{item.email}</td>
            {/* <td>{item.ip}</td> */}
            <td>Nigeria 102.128.192.0</td>
            <td>Logged in</td>
            <td>May 05 2023 05:45pm</td>
            {/* <td>{item.bloodGroup}</td> */}
            {/* <td>{item.profile.updated_at}</td> */}

            
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Accesslogs