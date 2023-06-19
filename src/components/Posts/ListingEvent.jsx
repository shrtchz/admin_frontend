import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Events/Header'
import './Predictions/prediction.css'
import authFetch from '../../utils/baseUrl'





const ListingEvent = ({sidebar}) => {
  const [event, setEvent]=useState([])
  const [picks, setPicks]=useState([])

  const [isModalOpen, setModalOpen]=useState(false)
  const [isAdminModal, setAdminModal]=useState(false)

  // const checked=false;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [pageSize, setPageSize] = useState(5); 
  const [selectedColumns, setSelectedColumns] = useState([
    'Author',
    'Listing Title',
    'Category',
    'Subcategory',
    'Start Time',
    'Finish Time',
    'Genre',
    'Price'
  ]);

  

  useEffect(()=>{
    async function fetchPosts (){
      const authToken=localStorage.getItem('token')

      let res=await authFetch('/all-predictions')
      // let res2 =await authFetch('/all-picks')
    
      console.log(res.data.data)
      setEvent(res.data.data)
      // setPicks(res2.data.data)

    }
   fetchPosts()
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
      setSelectedItems(event.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const isChecked = (itemId) => {
    return selectedItems.indexOf(itemId) !== -1;
  };

  const isAllChecked = () => {
    return event.length > 0 && selectedItems.length === event.length;
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
        <Header/>
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
          {selectedColumns.includes('Author') && <th>Author</th>}
          {selectedColumns.includes('Event') && <th>Event</th>}
          {selectedColumns.includes('Listing Title') && <th>Listing Title</th>}
          {selectedColumns.includes('Category') && <th>Category</th>}
          {selectedColumns.includes('Start Time') && <th>StartTime</th>}
          {selectedColumns.includes('Finish Time') && <th>Finish Time</th>}
          {selectedColumns.includes('Genre') && <th>Genre</th>}
          {selectedColumns.includes('Price') && <th>Price</th>}
          </tr>
        </thead>
        <tbody>
          {event.map((item, index) => (
            <tr key={index} className='h'>
              <td>
                <input
                  type="checkbox"
                  checked={isChecked(item.id)}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              {selectedColumns.includes('Author') && (
        <td style={{ paddingTop: '5px' }}>
          {item.user.username}
        </td>
      )}
              {/* {selectedColumns.includes('Event') && (
        <td style={{ paddingTop: '5px' }}>
          {item}
        </td>
      )} */}
      {selectedColumns.includes('Listing Title') && <td>{item.pick.question}</td>}
      {selectedColumns.includes('Category') && (
        <td>{item.pick.category.name}</td>
      )}
      {selectedColumns.includes('Start Time') && <td>{item.pick.start_time}</td>}
      {selectedColumns.includes('Finish Time') && <td>{item.pick.finish_time}</td>}
      {selectedColumns.includes('Genre') && <td>{item.status}</td>}
      {selectedColumns.includes('Price') && <td>{item.price}</td>}
    </tr>
          ))}
          
        </tbody>
    </table>
    </div>
     
    </>
  )
}

export default ListingEvent