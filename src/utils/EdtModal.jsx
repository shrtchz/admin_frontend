import React,{useEffect,useState} from 'react' 
import './editmodal.css'
import * as IoIcons from 'react-icons/io'
import UploadImage from './UploadImage';
import axios from 'axios';


const EdtModal = ({isOpen, isClose,catId,updateTable}) => {
    const [name, setName] = useState('');
    const fetchData = async () => {
        try {
          const authToken = localStorage.getItem('token');  
          const response = await axios.get(`https://shrtchz.pw/api/admin-profile/all-categories`, {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });
          const data = response.data.data;
        //   const data = response.data.data;
           
          const category = data.find((item) => item.cat_id === catId);
          if (category) {
            console.log(category);
            setName(category.name);
          }
        } catch (error) {
          console.error(error);
        }
      };
  useEffect(() => {
    if (isOpen && catId) {
      // Fetch data from the database based on catId
     

      fetchData();
    }else {
        setName('');
      }
  }, [isOpen, catId])
  
    const handleSave = async (event) => {
        event.preventDefault()
        try {
          const authToken = localStorage.getItem('token');

          // Send the updated name to the endpoint
          const response = await axios.put(`https://shrtchz.pw/api/admin-profile/update-categories/${catId}`, { name}, {headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
          const data = response.data.data;
          // Handle the response
          isClose();
          updateTable();
          console.log(data);
        //   setName('')
        } catch (error) {
          console.error(error);
        }
      };
      if (!isOpen) {
        return null;
      }
      const handleUpload = (file) => {
        console.log(file)
        setPhotoUrl(file);
      };
  return (
    <div className='modal-content position-absolute top-0 align-items-center' >
        <div className='cont'>
            <div className='title row align-items-center pt-2 px-4'>
                <div className='d-flex justify-content-between'>
                <h5>Edit Category</h5>
                        <IoIcons.IoMdClose onClick={isClose}/>
                </div>
            </div>
            <div className='body mt-5 mx-4'>
                <form onSubmit={handleSave}>
                    <div>
                        <label>Category</label>
                        <input type='text' id="categoryName"
                value={name}
                onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className='my-3 d-flex image-container align-items-center'>
                        <UploadImage handleUpload={handleUpload} />
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

export default EdtModal