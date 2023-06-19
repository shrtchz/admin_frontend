import React,{useEffect,useState} from 'react' 
import './editmodal.css'
import * as IoIcons from 'react-icons/io'
import UploadImage from './UploadImage';
import axios from 'axios';


const EdidSubCat = ({isOpen, isClose,subcatId,updateTable}) => {
    console.log(subcatId)
    //   const handleSave =()=>{
    //     isClose()
    //     console.log('Save')
    //   }
    const [name, setName] = useState('');
    const [catsId, setCatsId] = useState('');

    const fetchData = async () => {
        try {
          const authToken = localStorage.getItem('token');
            
          const response = await axios.get(`https://shrtchz.pw/api/admin-profile/all-subcategories`, {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          });
          const data = response.data.data;
          // console.log(data)
        //   const data = response.data.data;
           
          const subcategory = data.find((item) => item.subcat_id === subcatId);
          if (subcategory) {
            console.log(subcategory.cats_id);
            setName(subcategory.name);
            setCatsId(subcategory.cats_id);

          }
        } catch (error) {
          console.error(error);
        }
      };
  useEffect(() => {
    if (isOpen && subcatId) {
      // Fetch data from the database based on catId
     

      fetchData();
    }else {
        setName('');
       
      }
  }, [isOpen, subcatId])
    const handleSave = async (event) => {
        event.preventDefault()
        try {
          const authToken = localStorage.getItem('token');

          // Send the updated name to the endpoint
          const response = await axios.put(`https://shrtchz.pw/api/admin-profile/update-subcategories/${subcatId}`, { name,cats_id:catsId}, {headers: {
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
  return (
    <div className='modal-content position-absolute top-0 align-items-center' >
        <div className='cont'>
            <div className='title row align-items-center pt-2 px-4'>
                <div className='d-flex justify-content-between'>
                <h5>Edit SubCategory</h5>
                        <IoIcons.IoMdClose onClick={isClose}/>
                </div>
            </div>
            <div className='body mt-5 mx-4'>
                <form onSubmit={handleSave}>
                    <div>
                        <label> Sub Category</label>
                        <input type='text' id="categoryName"
                value={name}
                onChange={(event) => setName(event.target.value)}/>
                    </div>
                    <div className='my-3 d-flex image-container align-items-center'>
                        <UploadImage/>
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

export default EdidSubCat