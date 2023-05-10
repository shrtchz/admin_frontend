import React, {useState} from 'react'
import '../../styles/home.css'
import { Link } from 'react-router-dom'
import * as HiIcons from 'react-icons/hi2'
import Image from './Image'
const Home = () => {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="plane">
        <div className="welcome">
          <div className="message">
            <div className="innertext">
              <p>
              Welcome back to Shortchase Admin . Your last sign in was
              </p>
              <p>
              NOV 08, 2020 - 07:59:21 PM
              </p>
            </div>
            <Link to='/accesslogs' className='access'>View access logs</Link>
          </div>
            {/* <div className="img-container">
            <label htmlFor="image" style={{ cursor: "pointer" }}>
            <HiIcons.HiOutlinePencilSquare/>
          </label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
            </div> */}
            <Image/>
        </div>

      </div>
    </>
  )
}

export default Home