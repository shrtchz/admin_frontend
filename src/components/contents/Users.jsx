import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/accesslogs.css'
import * as IoIcons from 'react-icons/io'


const Users = ({sidebar}) => {
  const [users, setUsers]=useState([])
  // const checked=false;
  

  useEffect(()=>{
    async function fetchUsers (){
      let res=await axios.get('https://dummyjson.com/users?limit=10')
      console.log(res.data.users)
      setUsers(res.data.users)
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
  // };
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Registered</th>
          <th>Last Seen</th>


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
              
              {item.firstName} 
             
             
            </td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.eyeColor}</td>
            <td>{item.ssn}</td>

            
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}

export default Users