import React,{useState,useEffect} from 'react'
import './settings.css'
import * as BsIcon from 'react-icons/bs'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Table from '../../utils/Table'
import { categoryHeaders } from '../../utils/Headers'
import axios from 'axios'
import AddModal from '../../utils/AddModal'

const url= 'https://shrtchz.pw/api/admin-profile/all-categories'
const url2='https://dummyjson.com/users?limit=10'
const deleteUrl='https://shrtchz.pw/api/admin-profile/delete-categories'
const endpoint="https://shrtchz.pw/api/admin-profile/create-categories"
const authToken=localStorage.getItem('token')

const Categories = () => {
  const [catData, setCatData]=useState([])
  const [selectedRows, setSelectedRows] = useState([]);
const [isModalOpen, setIsModalOpen]=useState(false)

  const fetchData = async () => {
    try {
      const authToken= localStorage.getItem('token')
  let res=await axios.get(`${url}`,{headers: {
    Authorization: `Bearer ${authToken}`}
  })
console.log(res.data.data)
  setCatData(res.data.data)
    } catch (error) {
      console.log('Error fetching data:', error.response);
    }
  };
  useEffect(() => {

    fetchData();
  },[]);


  const handleDelete = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
  
      
      const deletePromises = selectedRows.map((selectedIndex) => {
        const item = catData[selectedIndex];
        console.log(item.cat_id)
        return axios.delete(`${deleteUrl}/${item.cat_id}`, { headers });
        // console.log(deleted)

      });
  
      // Wait for all delete promises to resolve
      await Promise.all(deletePromises);
  
      // Update the table by fetching the updated data
      // fetchData();
  
      // Clear the selected rows for deletion
      // setSelectedRows([]);
      // Remove the deleted items from the catData array
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
   const handleOpen=()=>{
    console.log('Add category')
    setIsModalOpen(true)

   }
const handleClose= ()=>{
  console.log('Closed')
  setIsModalOpen(false)
}

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
            <div className='' >
             <AiIcon.AiOutlineStop className='sicon' size={25}/>
            </div>
            </div>
           
            </div>
            <div className='col-3 d-flex g-0 '>
            <div className='d-flex w-100 justify-content-between allsicons'>
            <div className=' col-1'></div>
            <div className=' col-4 pt-2'>
              <p className='text pt-1 px-2'>1-20 of 100</p>

            </div>
            <div className='  d-flex justify-content-between align-items-center  arr'>
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
            <div className='col-1 d-flex  bg-primary'>
            <div></div>
            </div>
          </div>
        </header>
          <Table data={catData} headers={categoryHeaders} selectedRows={selectedRows} setSelectedRows={setSelectedRows}  fetchData={fetchData} setData={setCatData} />
        <AddModal isOpen={isModalOpen} isClose={handleClose} endpoint={endpoint} authToken={authToken}
          />
        </div>
    </>
  )
}

export default Categories