import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/accesslogs.css'
// import * as IoIcons from 'react-icons/io'
import * as IoIcons from 'react-icons/io'
import * as BsIcon from 'react-icons/bs'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import AllAdminModal from '../../utils/AllAdminModal'
import AddAdminModal from '../../utils/AddAdminModal'
import * as HiIcons from 'react-icons/hi2'
const Admin = ({sidebar}) => {
  const [users, setUsers]=useState([])
  const [isModalOpen, setModalOpen]=useState(false)
  const [isAdminModal, setAdminModal]=useState(false)

  // const checked=false;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [pageSize, setPageSize] = useState(5); 
  const [selectedColumns, setSelectedColumns] = useState([
    'Name',
    'Username',
    'Email',
    'Role',
    'Description',
  ]);

  

  useEffect(()=>{
    async function fetchUsers (){
      const authToken=localStorage.getItem('token')

      let res=await axios.get('https://shrtchz.pw/api/admin-profile/all/Admin-users',
      {headers: {
        Authorization: `Bearer ${authToken}`}
      }
      )
      console.log(res.data.data)
      setUsers(res.data.data)
    }
   fetchUsers()
  },[currentPage])

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
  const handleModalOpen = () => {
    console.log('opened')
    setModalOpen(true);
  };
  const handleModalCheck=(column)=>{
    const isSelected = selectedColumns.includes(column);
    if (isSelected) {
      setSelectedColumns(selectedColumns.filter((col) => col !== column));
    } else {
      setSelectedColumns([...selectedColumns, column]);
    }
  }
  const handleModalClose = () => {
    setModalOpen(false);
  };
  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    setPageSize(newSize);
    setCurrentPage(1); // Reset to the first page when changing page size
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
  };
  const handleAdminModal = () => {
    console.log('opened')
    setAdminModal(true);
  };
  const handleAdminClose = () => {
    console.log('opened')
    setAdminModal(false);
  };
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
              <AllAdminModal isOpened={isModalOpen}
               isClosed={handleModalClose} 
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
              <p className='text pt-1 px-2'> {currentPage} of {totalPages}</p>

            </div>
            <div className='col-3 d-flex justify-content-between align-items-center  arr'>
            
            <BsIcon.BsArrowLeftCircle  onClick={goToPreviousPage}/>

            <BsIcon.BsArrowRightCircle onClick={goToNextPage}/>




            </div>
            <div>
              <button className='btnadd  col-3 d-flex justify-content-between align-items-center' onClick={handleAdminModal}>
              
              <AiIcon.AiOutlinePlus className='sicon col' size={20} color={'#5d84ff'}/>
                  Add
            </button>
            <AddAdminModal isOpen={isAdminModal}
               isClose={handleAdminClose} 
              // selectedColumns={selectedColumns}
              // handleModalCheck={handleModalCheck}
              />
            </div>
            </div>
            </div>
            <div className='col-1 d-flex  '>
            <div></div>
            </div>
          </div>
      </header>
      <table  className="checkbox-table  table-sm">
        <thead>
          <tr>
          <th> 
            <input
                  type="checkbox"
                  checked={isAllChecked()}
                  onChange={handleSelectAllChange}
                />
          </th>
          {selectedColumns.includes('Name') && <th>Name</th>}
          {selectedColumns.includes('Username') && <th>Username</th>}
          {selectedColumns.includes('Email') && <th>Email</th>}
          {selectedColumns.includes('Role') && <th>Role</th>}
          {selectedColumns.includes('Description') && <th>Description</th>}

            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id} className='h'>
              <td>
                <input
                  type="checkbox"
                  checked={isChecked(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              {selectedColumns.includes('Name') && (
        <td style={{ paddingTop: '5px' }}>
          {item.name}
        </td>
      )}
      {selectedColumns.includes('Username') && <td>{item.username}</td>}
      {selectedColumns.includes('Email') && (
        <td>{item.country} {item.email}</td>
      )}
      {selectedColumns.includes('Role') && <td>{item.role}</td>}
      {selectedColumns.includes('Description ') && <td>{item.Description}</td>}
      <td>
        {/* <HiIcons.HiOutlinePencilSquare/> */}
      </td>
    </tr>
          ))}
          
        </tbody>
    </table>
    </div>
     
    </>
  )
}

export default Admin