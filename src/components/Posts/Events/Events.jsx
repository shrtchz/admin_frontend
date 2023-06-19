import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../Predictions/Header';
import './event.css';
import authFetch from '../../../utils/baseUrl';
import OpenEvent from './OpenEvent';

const Event = ({ sidebar }) => {
  const [event, setEvent] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedColumns, setSelectedColumns] = useState([
    'Author',
    'Event',
    'Category',
    'Subcategory',
    'Created Date',
    'Venue',
    'Start Date &Time',
    'Media',
  ]);

  useEffect(() => {
    async function fetchPosts() {
      const authToken = localStorage.getItem('token');
      let res = await authFetch('/all-predictions');
      setEvent(res.data.data);
    }
    fetchPosts();
  }, [currentPage]);

  const handleCheckboxChange = (event, index) => {
    const checked = event.target.checked;

    if (checked) {
      setSelectedRow(index);
    } else {
      setSelectedRow(null);
    }
  };

  return (
    <>
      <div className='w-100'>
        <Header />
        <table className='checkbox-table  table-sm'>
          <thead>
            <tr>
              <th>
                <input
                  type='checkbox'
                  checked={false}
                  onChange={() => {}}
                />
              </th>
              {selectedColumns.includes('Author') && <th>Author</th>}
              {selectedColumns.includes('Event') && <th>Event</th>}
              {selectedColumns.includes('Category') && <th>Category</th>}
              {selectedColumns.includes('Subcategory') && <th>Subcategory</th>}
              {selectedColumns.includes('Created Date') && <th>Created Date</th>}
              {selectedColumns.includes('Venue') && <th>Venue</th>}
              {selectedColumns.includes('Start Date & Time') && (
                <th>Start Date & Time</th>
              )}
              {selectedColumns.includes('Media') && <th>Media</th>}
            </tr>
          </thead>
          <tbody>
            {event.map((item, index) => (
              <React.Fragment key={index}>
                <tr className={selectedRow === index ? 'h checked' : 'h'}>
                  <td>
                    <input
                      type='checkbox'
                      checked={selectedRow === index}
                      onChange={(event) => handleCheckboxChange(event, index)}
                    />
                  </td>
                  {selectedColumns.includes('Author') && (
                    <td style={{ paddingTop: '5px' }}>
                      {item.user.username}
                    </td>
                  )}
                  {selectedColumns.includes('Event') && (
                    <td style={{ paddingTop: '5px' }}>
                      {item.pick.question}
                    </td>
                  )}
                  {selectedColumns.includes('Category') && (
                    <td>{item.pick.category.name}</td>
                  )}
                  {selectedColumns.includes('Subcategory') && (
                    <td>{item.pick.category.name}</td>
                  )}
                  {selectedColumns.includes('Created Date') && (
                    <td>20/06/2023</td>
                  )}
                  {selectedColumns.includes('Venue') && <td>Old Traford</td>}
                  {selectedColumns.includes('Start Date & Time') && (
                    <td>20/06/2023 09:00 am</td>
                  )}
                  {selectedColumns.includes('Media') && <td>Image</td>}
                </tr>
                {selectedRow === index && (
                  <tr className='ttrow'>
                    <td className="" colSpan={selectedColumns.length + 1} style={{verticalAlign:" top"}}>
                      
                      <OpenEvent />
                      
                    </td>
                  </tr>
                  
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Event;
