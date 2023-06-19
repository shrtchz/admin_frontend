import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Header'
import './prediction.css'
import authFetch from '../../../utils/baseUrl'





const Predictions = ({sidebar}) => {
  const [posts, setPosts]=useState([])

  const [isModalOpen, setModalOpen]=useState(false)
  const [isAdminModal, setAdminModal]=useState(false)

  // const checked=false;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  // const [pageSize, setPageSize] = useState(5); 
  const [selectedColumns, setSelectedColumns] = useState([
    'Author',
    'Event',
    'Prediction/Tip',
    'Category',
    'Created Time',
    'Venue',
    'Started Date & Time',
    'Media'
  ]);
const fetchPosts =async ()=>{
 try {
  let res=await authFetch('/all-predictions')
let data=res.data.data
// data.map((itm, id)=>{
//   return console.log(itm.tip.name)
// })
console.log(data)
  setPosts(res.data.data)
  
  
 } catch (error) {
  console.log(error)
 }


}
  

  useEffect(()=>{
   
   fetchPosts()
  },[])
/* date format */
const formatMonth = (dateMonth) => {
  const dateTime = new Date(dateMonth);
  return dateTime.toLocaleDateString('en-US', {
    timeZone: 'Africa/Lagos',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
const formatDateTime=(dateMonthtime) => {
  const dateTime = new Date(dateMonthtime);
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    timeZone: 'Africa/Lagos',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedTime = dateTime.toLocaleTimeString('en-US', {
    timeZone: 'Africa/Lagos',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  return `${formattedDate}: ${formattedTime}`;
}
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
      setSelectedItems(posts.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const isChecked = (itemId) => {
    return selectedItems.indexOf(itemId) !== -1;
  };

  const isAllChecked = () => {
    return posts.length > 0 && selectedItems.length === posts.length;
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
          {selectedColumns.includes('Prediction/Tip') && <th>Prediction/Tip</th>}
          {selectedColumns.includes('Category') && <th>Category</th>}
          {selectedColumns.includes('Created Time') && <th>Created Time</th>}
          
          {selectedColumns.includes('Venue') && <th>Venue</th>}
          {selectedColumns.includes('Started Date & Time') && <th>Started Date & Time</th>}
          {selectedColumns.includes('Media') && <th>Media</th>}
          </tr>
        </thead>
        <tbody>
          {posts.map((item, index) => (
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
          {item.user.name}
        </td>
      )}

      {selectedColumns.includes('Event') && <td>{item.pick.question}</td>}
      {selectedColumns.includes('Prediction/Tip') && <td> {item.tip.name}</td>}
      {selectedColumns.includes('Category') && (
        <td>Sports</td>
      )}
      {selectedColumns.includes('Created Time') && (
  <td>
    {formatMonth(item.pick.created_at)}
  </td>
)}



     
      {selectedColumns.includes('Venue') && <td>{item.pick.venue}</td>}
      {selectedColumns.includes('Started Date & Time') && <td>{formatDateTime(item.pick.start_time)}</td>}
      {selectedColumns.includes('Media') && <td>Image</td>}
    </tr>
          ))}
          
        </tbody>
    </table>
    </div>
     
    </>
  )
}

export default Predictions