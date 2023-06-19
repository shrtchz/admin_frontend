import React,{useState,useEffect} from 'react'
import './settings.css'
import * as BsIcon from 'react-icons/bs'
import * as BiIcon from 'react-icons/bi'
import * as AiIcon from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Table from '../src/utils/Table'
import { categoryHeaders } from '../src/utils/Headers'
import axios from 'axios'

const url= 'https://shrtchz.pw/api/admin-profile/all-categories'
const url2='https://dummyjson.com/users?limit=10'

const BookMarkers = () => {
  const [catData, setCatData]=useState([])

  const [selectedRows, setSelectedRows] = useState([]);
  const fetchData = async () => {
    try {
      const authToken= localStorage.getItem('token')
  let res=await axios.get(`${url}`,{headers: {
    Authorization: `Bearer ${authToken}`}
  })
  let res2=await axios.get(`${url2}`,{headers: {
    Authorization: `Bearer ${authToken}`}
  })

  // console.log(res.data.data)
 
  // console.log(res2)
  setCatData(res.data.data)
    } catch (error) {
      console.log('Error fetching data:', error.response);
    }
  };
  useEffect(() => {

    fetchData();
  },[]);
  // const [selectedRows, setSelectedRows] = useState([]);

  const handleCheckboxChange = (event, index) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, index]);
    } else {
      setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
    }
  };

  // const handleCheckboxChange = (itemId) => {
  //   const itemIndex = selectedRows.indexOf(itemId);
  //   if (itemIndex === -1) {
  //     console.log(itemId)
  //     setSelectedRows([...selectedRows, itemId]);
  //   } else {
  //     setSelectedRows(selectedRows.filter((id) => id !== itemId));
  //   }
  // };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      setSelectedRows(users.map((item) => item.id));
    } else {
      setSelectedRows([]);
    }
  };

  const isChecked = (itemId) => {
    return selectedRows.indexOf(itemId) !== -1;
  };

  const isAllChecked = () => {
    return users.length > 0 && selectedRows.length === users.length;
  };
  const handleDeleteRow = (index) => {
    console.log('delete')
    setCatData(catData.filter((_, rowIndex) => rowIndex !== index));
    setSelectedRows(selectedRows.filter((rowIndex) => rowIndex !== index));
  }
  return (
    <>
        <div className='d-flex flex-column w-100'>
        <header className='container-fluid d-flex flex-column justify-content-center'>
          <div className='row  align-items-center justify-content-between '>
            <div className='col-7'>
            <div className='d-flex justify-content-between allsicons'>
            <div>
              <BsIcon.BsTrash3 className='sicon' size={20} onClick={handleDeleteRow}/>

            </div>
            <div className=''>
              <BiIcon.BiPowerOff className='sicon' size={25}/>

            </div>
            <div className=''>
             <AiIcon.AiOutlineStop className='sicon' size={25}/>
            </div>
            </div>
           
            </div>
            <div className='col-3 d-flex g-0'>
            <div className='d-flex w-100 justify-content-between allsicons'>
            <div className=' col-1'></div>
            <div className=' col-4 pt-2'>
              <p className='text pt-1 px-2'>1-20 of 100</p>

            </div>
            <div className='col-3 d-flex justify-content-between align-items-center  arr'>
            <BsIcon.BsArrowLeftCircle />
            <BsIcon.BsArrowRightCircle/>


            </div>
            <div className='col-4 d-flex align-items-center justify-content-center  '>
                  <div className='d-flex justify-content-center align-items-center add p-2'>
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
          <Table data={catData} headers={categoryHeaders} selectedRows={selectedRows}  fetchData={fetchData} setData={setCatData}/>
        </div>
    </>
  )
}

export default BookMarkers