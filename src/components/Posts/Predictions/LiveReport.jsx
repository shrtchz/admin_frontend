import React, { useState, useEffect } from "react";
import "./live.css";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import authFetch from "../../../utils/baseUrl";
import UploadImage from "./UploadImg";

const LiveReport = ({ isOpen, isClose }) => {
  const [event, setEvent] = useState([]);
  const [reporting, setReporting] = useState("");
const [header, setHeader] = useState("");
const [sub_header, setSubHeader] = useState("");
const [report, setReport] = useState("");
const [image_url, setImageUrl] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const res = await authFetch("/all-picks");
      console.log(res.data.data);
      setEvent(res.data.data);
    };
    fetchData();
  }, []);
  if (!isOpen) {
    return null;
  }
  const handleSubmit= async(e)=>{
    e.preventDefault()
    const payload = {
      
      reporting,
      header,
      sub_header,
      report,
      image_url
    };
    try {
      isClose()
      const res = await authFetch.post('/events', payload)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  const handleImageUpload = (event) => {
    
    setImageUrl(imageUrl); // Call the prop function to set the image URL in the 
  };
  
  return (
    <div className="live_content position-absolute top-0 start-0 d-flex justify-content-center">
      <div className="content col-5">
        <form onSubmit={handleSubmit}>
          <div className="tile d-flex justify-content-between align-items-center px-3">
            <span>Live Reporting</span>
            <div className="me-4">
              <select className="select_picks px-2">
                <option>Select event</option>
                {event.map((item, index) => (
                  <option key={index} value={item.pic_id}>
                    {item.question}
                  </option>
                ))}
              </select>
            </div>
            <span className="icons d-flex justify-content-between">
              <BsIcons.BsArrowsAngleContract />
              <IoIcons.IoMdClose onClick={isClose} />
            </span>
          </div>
          <div className="live_body">
            <div className="d-flex flex-column ms-2 box1 justify-content-center mb-3">
              <div className="d-flex align-items-center mt-1 ">
                <label className="d-flex justify-content-center align-items-center mx-4 p-3 text">
                  Reporting
                </label>
                <input type="text" value={reporting} onChange={(e) => setReporting(e.target.value)} />
              </div>
              <div className="d-flex align-items-center mt-1 ">
                <label className="d-flex justify-content-center align-items-center mx-4 p-3 text">
                  Header
                </label>
                <input type="text" value={header} onChange={(e) => setHeader(e.target.value)} />
              </div>
              <div className="d-flex align-items-center mt-1 ">
                <label className="d-flex justify-content-center align-items-center mx-4 p-3 text">
                  Sub Header
                </label>
                <input type="text" value={sub_header} onChange={(e) => setSubHeader(e.target.value)}/>
              </div>
              <div className="d-flex align-items-start mt-1  ">
                <label className="d-flex justify-content-center align-items-center mx-4 p-3 text">
                  Add a report
                </label>
                <textarea type="text" value={report} onChange={(e) => setReport(e.target.value)}>
                 
                </textarea>
              </div>
            </div>
            <div className="boximage  mb-3">
             
                <UploadImage setImageUrl={setImageUrl} />
              
            </div>
            <div className='d-flex justify-content-end m-4  w-100'>
              <div className='d-flex justify-items-between form_btns me-4 pe-1 '>
                <button className='form_btn mx-3' onClick={isClose}>
                  Reset
                </button>
                <button className='form_btn'  >
                  Submit
                </button>
              </div>
            </div>
           
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default LiveReport;
