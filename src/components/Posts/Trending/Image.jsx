import React from 'react'
import Img from '../../../assets/images/download.jpg'

const Image = ({ src }) => {
    return (
        <div className="image" >
            <img src={Img} alt="Profile"  />
        </div>
    );
  };
  

export default Image