import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import '../../styles/accesslogs.css'
// import * as IoIcons from 'react-icons/io'

import * as IoIcons from 'react-icons/io'
import * as BsIcon from 'react-icons/bs'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AllUsersModal from '../../utils/AllUsersModal'

const AllUsers = ({sidebar}) => {
  const [users, setUsers]=useState([])
  // const checked=false;
  const [isModalOpen, setModalOpen]=useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [selectedColumns, setSelectedColumns] = useState([
    'Name',
    'Username',
    'Email',
    'Registered',
    'Last Seen',
    'Birthdate',
    'Location',
    'Status',
    'Bio',
    'Portfolio',
    'AccountType'
  ]);


  useEffect(()=>{
    async function fetchUsers (){
      const page = currentPage;
      const authToken=localStorage.getItem('token')

      let res=await axios.get('https://shrtchz.pw/api/admin-profile/all/user',
      {headers: {
        Authorization: `Bearer ${authToken}`},
        params: {
          page
        }
      },
      
      )
      
      console.log(res.data.data)
      console.log(res.data.totalUsers)

      setUsers(res.data.data)
      setTotalUsers(res.data.total); // Set the total number of users

    const totalPages = Math.ceil(res.data.total / 20); // Calculate the total number of pages based on the number of users per page
    setTotalPages(totalPages);
    }
   fetchUsers()
  },[])

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    const itemIndex = selectedItems.indexOf(itemId);
    if (itemIndex === -1) {
      // console.log(itemId)
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
  const handleModalCheck=(column)=>{
    const isSelected = selectedColumns.includes(column);
    if (isSelected) {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      setSelectedColumns([...selectedColumns, column]);
    }
  }
  const handleModalOpen=()=>{
    setModalOpen(true)
  }
  const handleModalClose=()=>{
    console.log('Close')
    setModalOpen(false)
  }
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }
  return (
    <>
      <div className='w-100'>
      <header className='container-fluid d-flex flex-column justify-content-center'>
        <div className='row  align-items-center justify-content-between '>
            <div className='col-8'>
            <div className='d-flex  allsicons'>
            <div>
              <BsIcon.BsTrash3 className='sicon' size={20}/>

            </div>
            <div className=' mx-3'>
              <BiIcon.BiDotsVerticalRounded className='sicon' size={25} onClick={handleModalOpen}/>
              <AllUsersModal 
              isOpened={isModalOpen} isClosed={handleModalClose}
               selectedColumns={selectedColumns}
             handleModalCheck={handleModalCheck}

               />
            </div>
            {/* <div className=''>
             <AiIcon.AiOutlineStop className='sicon' size={25}/>
            </div> */}
            </div>
           
            </div>
            <div className='col-3 d-flex '>
            <div className='d-flex w-100 justify-content-between align-items-center allsicons'>
            <div className='bg-primary col-1'></div>
            <div className=' col-4 pt-2'>
              <p className='text pt-1 px-2'> {`${(currentPage - 1) * 20 + 1}-${currentPage * 20} of 100`}</p>

            </div>
            <div className='col-3 d-flex justify-content-between align-items-center  arr'>
            <BsIcon.BsArrowLeftCircle onClick={goToPreviousPage} />
            <BsIcon.BsArrowRightCircle onClick={goToNextPage} />



            </div>
            <div className='bg-danger col-3 d-flex justify-content-between align-items-center'>
              {/* <Link to={'/settings/categories/addadmin'} className='d-flex justify-content-between w-100 px-3 align-items-center' style={{color:'#fff'}}>
              <div>
              <AiIcon.AiOutlinePlus className='sicon col' size={20}/>

              </div>
              
                  Add
                 
              </Link> */}
            </div>
            </div>
            </div>
            <div className='col-1 d-flex  '>
            <div></div>
            </div>
          </div>
        </header>
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
          {/* <th>Name</th>
          <th>Email</th>
          <th>Registered</th>
          <th>Last Seen</th> */}

          {selectedColumns.includes('Name') && <th>Name</th>}
      {selectedColumns.includes('Email') && <th>Email</th>}
      {selectedColumns.includes('Registered') && <th>Registered</th>}
      {selectedColumns.includes('Last Seen') && <th>Last Seen</th>}
      {/* {selectedColumns.includes('lastLogin') && <th>Last Login</th>} */}
  
        </tr>
      </thead>
      <tbody>
        {users.map((item) => (
          <tr key={item.id} className='trow'>
            <td>
              <input
                type="checkbox"
                checked={isChecked(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </td>
            {/* <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.created_at}</td>
            <td>{item.last_login}</td> */}
            {selectedColumns.includes('Name') && <td>{item.name}</td>}
      {selectedColumns.includes('Email') && (
        <td>{item.email} </td>
      )}
      {selectedColumns.includes('Registered') && <td>{item.created_at}</td>}
      {selectedColumns.includes('Last Seen') && <td>{item.last_login}</td>}
            
          </tr>
        ))}
      </tbody>
    </table>
      </div>
    </>
  )
}

export default AllUsers