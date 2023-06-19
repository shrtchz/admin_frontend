import React,{useEffect,useState} from 'react' 
import './editmodal.css'
import * as IoIcons from 'react-icons/io'
import UploadImage from './UploadImage';
import axios from 'axios';


const EditTip = ({isOpen, isClose,id,data,updateTable}) => {
    
    const [name, setName] = useState('');
    const [mark_id, setMarId] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const fetchData = async () => {
        try {
          const authToken = localStorage.getItem('token');
            
          const response = await axios.get(`https://shrtchz.pw/api/admin-profile/all-tips`, {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });
          const data = response.data.data;
          console.log(data)
        //   const data = response.data.data;
           
          const tip = data.find((item) => item.tip_id === id);
          if (tip) {
            console.log(tip);
            setName(tip.name);
            setMarId(tip.mark_id)
          }
        } catch (error) {
          console.error(error);
        }
      };
  useEffect(() => {
    if (isOpen && id) {
      // Fetch data from the database based on catId
     

      fetchData();
    }else {
        setName('');
      }
  }, [isOpen, id])
    const handleSave = async (event) => {
        event.preventDefault()
    
        // console.log('dt',...data.market)
        let dt={ name,
            mark_id,market:{
              name:selectedValue,
            }}
            console.log(dt)
       
        try {
          const authToken = localStorage.getItem('token');
        
          // Send the updated name to the endpoint
          const response = await axios.put(`https://shrtchz.pw/api/admin-profile/update-tip/${id}`, dt, {headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
          const data = response.data.data;
          // Handle the response
          isClose();
          updateTable();
          // console.log(data);
        //   setName('')
        } catch (error) {
          console.error(error);
        }
      };
      if (!isOpen) {
        return null;
      }
      const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };
  return (
    <div className='modal-content position-absolute top-0 align-items-center' >
        <div className='cont'>
            <div className='title row align-items-center pt-2 px-4'>
                <div className='d-flex justify-content-between'>
                <h5>Edit Tip</h5>
                        <IoIcons.IoMdClose onClick={isClose}/>
                </div>
            </div>
            <div className='body mt-5 mx-4'>
                <form onSubmit={handleSave}>
                    <div>
                        <label> Tip</label>
                        <input type='text' id="categoryName"
                value={name}
                onChange={(event) => setName(event.target.value)}/>
                    </div>
                    {/* <div className='my-3 d-flex image-container align-items-center'>
                        <UploadImage/>
                    </div> */}
                    <div>
              <label> Select Market</label>
              <select value={selectedValue} onChange={handleSelectChange}>
                {data.map(item => (
                  <option key={item.id} value={item.tips?.name || ''}>
                    {item.tips?.name || 'N/A'}
                  </option>
                ))}
              </select>
            </div>
                    <div className='d-flex justify-content-end m-4 '>
                    <div className='d-flex justify-content-between bn'>
                    <button className='bt px-2' onClick={isClose}>Cancel</button>
                    <button className='submit-button 'type="submit" >Save</button>
                    </div>

                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditTip