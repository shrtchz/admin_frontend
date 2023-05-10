import { useState } from "react";
// import "./styles.css";
import React from "react";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";
//@ts-ignore
import image from "../../assets/images/blank_profile.png";
import * as HiIcons from 'react-icons/hi2'


const Image= ()=> {
  const [state, setstate] = useState("");
//   const classes = useStyle();
  var loadFile = (event) => {
    if (event.target.files) {
      setstate(URL.createObjectURL(event.target.files[0]));
      console.log(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <div style={{ width: "150px",margin:'10px'}}>
      <div
        style={{width:"150px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    padding:" auto"}}
      >
        <input
          type="file"
          accept="image/*"
          name="image"
          id="file"
          onChange={loadFile}
          style={{ display: "none" }}
        />
        {/* <p variant="caption"> Profile image </p> */}

        <img
          src={state ? state : image}
          className='avater'
          id="output"
          width="100"
          alt="test"
        />
        <label htmlFor="file" style={{marginTop:'-25px',
        marginLeft: '80px',
    padding: '3px', cursor: "pointer",borderRadius:'0px 0px 6px 0px', backgroundColor:'#FFF'}}>
          {/* <PhotoCamera /> */}
          <HiIcons.HiOutlinePencilSquare/>

        </label>
      </div>
 
        
      
    </div>
  );
}
export default Image;