import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../styles/accesslogs.css'
import * as IoIcons from 'react-icons/io'
import * as BsIcon from 'react-icons/bs'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Modal from '../../utils/Modal'

// const url='https://shrtchz.pw/api/admin-profile/all/user?limit=9'
const url= 'https://shrtchz.pw/api/admin-profile/activities-logs'

const Accesslogs = ({sidebar}) => {
  const [users, setUsers]=useState([])
  const [isModalOpen, setModalOpen]=useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [endPage, setEndPage]=useState(0)
  const [startPage, setStartPage]=useState(1)
  const [totalData, setTotalData]=useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedColumns, setSelectedColumns] = useState([
    'checkbox',
    'userId',
    'email',
    'ipAddress',
    'action',
    'lastLogin',
  ]);

  const [totalDataCount, setTotalDataCount] = useState(0);  

  useEffect(()=>{
   
   fetchUsers()
  },[itemsPerPage, currentPage])
   const fetchUsers = async() => {
    const authToken= localStorage.getItem('token')
    let res=await axios.get(`${url}`,{headers: {
      Authorization: `Bearer ${authToken}`}
    })
  
    console.log(res.data.data)
    setUsers(res.data.data)
    // console.log("Start :", res.data.pagination.from)
    // console.log(" End:", res.data.pagination.last_page)
    // console.log(" Total:", res.data.pagination.total)


    // setEndPage(res.data.pagination.to)
    // setStartPage(res.data.pagination.from)
    // setTotalData(res.data.pagination.total)
    // setTotalDataCount(res.data.pagination.per_page);
    setTotalDataCount(res.data.data.length)
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    const updatedUsers = [...users];
    const user = updatedUsers[index];
    user.isChecked = !user.isChecked;
    setUsers(updatedUsers);
  
    const selectedItemIndex = selectedItems.indexOf(user.id);
    if (selectedItemIndex === -1) {
      setSelectedItems([...selectedItems, user.id]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== user.id));
    }
 
  };
  // const handleModalCheck=(column)=>{
  //   const isSelected = selectedColumns.includes(column);
  //   if (isSelected) {
  //     setSelectedColumns(selectedColumns.filter((col) => col !== column));
  //   } else {
  //     setSelectedColumns([...selectedColumns, column]);
  //   }
  // }
  const handleModalCheck = (columns) => {
    setSelectedColumns(columns);
  };


  const handleSelectAllChange = (event) => {
    const isChecked = event.target.checked;
    setUsers((prevUsers) =>
      prevUsers.map((user) => ({
        ...user,
        isChecked: isChecked,
      }))
    );
  
    if (isChecked) {
      setSelectedItems(users.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };
  


  const isChecked = (index) => {
    const user = users[index];
    return user && user.isChecked;
  };
  
 
  const isAllChecked = () => {
    return users.length > 0 && selectedItems.length === users.length;
  };
  const handleModalOpen = () => {
    console.log('opened')
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
 

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
  // const totalPages = Math.ceil(totalData / itemsPerPage);
  // const startIndex = (startPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const pagedUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pagedUsers = users.slice(startIndex, endIndex);
  // const handleDataAmountSelect = (event) => {
  //   const selectedAmount = parseInt(event.target.value);
  //   setItemsPerPage(selectedAmount);
  //   setCurrentPage(1);
  // };
  const handleDataAmountSelect = (value) => {
    // const selectedAmount = parseInt(event.target.value);
    setItemsPerPage(value);
  };

  const handleDataAmountButtonClick = () => {
    setCurrentPage(1);
    fetchUsers();
    handleDataAmountSelect(itemsPerPage);
  };
  return (
    <>
     
      
  <div className='w-100'>
    <header className='container-fluid d-flex flex-column justify-content-center '>
      <div className='row  align-items-center justify-content-between '>
          <div className='col-8'>
          <div className='d-flex  allsicons'>
          <div>
            <BsIcon.BsTrash3 className='sicon' size={20}/>

          </div>
          <div className=' mx-3'>
            <BiIcon.BiDotsVerticalRounded className='sicon' size={25} onClick={handleModalOpen}/>
            <Modal isOpened={isModalOpen}
             isClosed={handleModalClose} 
            selectedColumns={selectedColumns}
             handleModalCheck={handleModalCheck}
             handleDataAmountSelect={handleDataAmountSelect}
           handleDataAmountButtonClick={ handleDataAmountButtonClick}
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
      <div className='tbl-container'>
      <div className='table-wrapper'>
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
      
      {selectedColumns.includes('userId') && <th>User ID</th>}
      {selectedColumns.includes('email') && <th>Email</th>}
      {selectedColumns.includes('ipAddress') && <th>IP Address</th>}
      {selectedColumns.includes('action') && <th>Action</th>}
      {selectedColumns.includes('lastLogin') && <th>Last Login</th>}
  

    </tr>
  </thead>
  <tbody>
  {pagedUsers.map((item, index) => (
    <tr key={index} className={`trow ${isChecked(index) ? 'check' : ''}`}>
      <td>
        <input
          type="checkbox"
          checked={isChecked(index)}
          onChange={() => handleCheckboxChange(index)}
        />
      </td>
      {selectedColumns.includes('userId') && (
        <td style={{ paddingTop: '5px' }}>
          {item.name}
          <p>@{item.username}</p>
        </td>
      )}
      {selectedColumns.includes('email') && <td>{item.email}</td>}
      {selectedColumns.includes('ipAddress') && (
        <td>{item.country} {item.ip_address}</td>
      )}
      {selectedColumns.includes('action') && <td>{item.action}</td>}
      {selectedColumns.includes('lastLogin') && <td>{item.time}</td>}
    </tr>
  ))}
</tbody>

    </table>
    </div> 
      </div>
  </div>
   
    </>
  )
}

export default Accesslogs