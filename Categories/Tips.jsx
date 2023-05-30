import React,{useState,useEffect} from 'react'
import './settings.css'
import * as BsIcon from 'react-icons/bs'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { categoryHeaders } from '../src/utils/Headers'
import axios from 'axios'
import TableTips from '../src/utils/TableTips'
import AddTips from '../src/utils/AddTips'

const url= 'https://shrtchz.pw/api/admin-profile/all-tips'
const deleteUrl='https://shrtchz.pw/api/admin-profile/delete-subcategories'
const endpoint="https://shrtchz.pw/api/admin-profile/create-subcategories"
const authToken=localStorage.getItem('token')

const Tips= () => {
  const [data, setData]=useState([])
  const [isModalOpen, setIsModalOpen]=useState(false)
  const [selectedRows, setSelectedRows] = useState([]);
  const fetchData = async () => {
    try {
      const authToken= localStorage.getItem('token')
  let res=await axios.get(`${url}`,{headers: {
    Authorization: `Bearer ${authToken}`}
  })
  console.log(res.data.data)
  setData(res.data.data)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchData();
  },[]);
  
  const handleOpen=()=>{
    console.log('Add category')
    setIsModalOpen(true)

   }
const handleClose= ()=>{
  console.log('Closed')
  setIsModalOpen(false)
}
const handleDelete = async () => {
  try {
    const authToken = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${authToken}`,
    };

    
    const deletePromises = selectedRows.map((selectedIndex) => {
      const item = catData[selectedIndex];
      console.log(item.subcat_id)
      return axios.delete(`${deleteUrl}/${item.subcat_id}`, { headers });
      // console.log(deleted)

    });

    // Wait for all delete promises to resolve
    await Promise.all(deletePromises);

  const updatedCatData = catData.filter((item, index) => !selectedRows.includes(index));

  // Update the table data with the updatedCatData
  setCatData(updatedCatData);

  // Clear the selected rows for deletion
  setSelectedRows([]);

  // Uncheck the next item after deleting the current one
  const nextSelectedIndex = Math.min(...selectedRows);
  setSelectedRows([nextSelectedIndex]);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
        <div className='d-flex flex-column w-100'>
        <header className='container-fluid d-flex flex-column justify-content-center'>
          <div className='row align-items-center justify-content-between '>
            <div className='col-7'>
            <div className='d-flex justify-content-between allsicons'>
            <div>
              <BsIcon.BsTrash3 className='sicon' size={20} onClick={handleDelete}/>

            </div>
            <div className=''>
              <BiIcon.BiPowerOff className='sicon' size={25}/>

            </div>
            <div className=''>
             <AiIcon.AiOutlineStop className='sicon' size={25}/>
            </div>
            </div>
           
            </div>
            <div className='col-3 d-flex g-0 '>
            <div className='d-flex w-100 justify-content-between allsicons'>
            <div className='col-1'></div>
            <div className=' col-4 pt-2'>
              <p className='text pt-1 px-2'>1-20 of 100</p>

            </div>
            <div className=' col-3 d-flex justify-content-between align-items-center  arr'>
            <BsIcon.BsArrowLeftCircle />
            <BsIcon.BsArrowRightCircle/>


            </div>
            <div className='col-4 d-flex align-items-center justify-content-center  '>
                  <div className='d-flex justify-content-center align-items-center add p-2' onClick={handleOpen}>
                  <AiIcon.AiOutlinePlus className='sicon col'style={{color:'#5B84FF'}} size={20}/>
                  <span>Add</span>
                  </div>

            </div>
            </div>
            </div>
            <div className='col-1 d-flex '>
            <div></div>
            </div>
          </div>
        </header>
          <TableTips data={data} headers={categoryHeaders} selectedRows={selectedRows}  fetchData={fetchData} setData={setData}/>
          <AddTips isOpen={isModalOpen} data={data} isClose={handleClose} endpoint={endpoint} authToken={authToken}
          />
        </div>
    </>
  )
}

export default Tips