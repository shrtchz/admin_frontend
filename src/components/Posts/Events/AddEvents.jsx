import React, { useState, useEffect } from "react";
import "./event.css";
import * as IoIcons from "react-icons/io";
import authFetch from "../../../utils/baseUrl";

const AddEvent = ({ isOpen, isClose }) => {
  const [pick, setPick] = useState([]);
  const [pick_id, setPick_id] = useState("");
  const [tips_id, setTips_id] = useState("");
//   const [book_id, setBook_id] = useState("");
//   const [pick_id, setPick_id] = useState("");
  const [selectedPick, setSelectedPick] = useState("");

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [market, setMarket] = useState("");
  const [tips, setTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState("");
  const [venue, setVenue] = useState("");
  const [startTime, setStartTime] = useState("");
  const [finishTime, setFinishTime] = useState("");

  const fetchData = async () => {
    try {
      const res = await authFetch("/all-picks");
      const res2 = await authFetch("/all-tips");
      console.log(res2.data.data);
        // console.log(res.data.data.pic_id);

      setPick(res.data.data);
    //   setPick_id(res.data.data.pic_id)
      setTips(res2.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handlePickChange = (e) => {
    const selectedPickValue = e.target.value;
    setSelectedPick(selectedPickValue);
    console.log(selectedPickValue);
    //   console.log(pick)

    // Find the pick object based on the selected value
    const selectedPickObj = pick.find(
      (item) => item.question === selectedPickValue
    );
    console.log(selectedPickObj);

    // Update the  input value with the category of the selected pick
    if (selectedPickObj) {
      setCategory(selectedPickObj.category.name);
      setSubcategory(selectedPickObj.subcategory.name);
      setVenue(selectedPickObj.venue);
      setStartTime(selectedPickObj.start_time);
      setFinishTime(selectedPickObj.finish_time);
    setPick_id(selectedPickObj.pic_id)

    } else {
      setCategory("");
    }
  };
  const handleTipChange = (e) => {
    const selectedTipValue = e.target.value;
    setSelectedTip(selectedTipValue);
    //   console.log(pick)

    // Find the pick object based on the selected value
    const selectedTipObj = tips.find(
      (item) => item.name === selectedTipValue
    );
    console.log(selectedTipObj);

    // Update the  input value with the category of the selected pick
    if (selectedTipObj) {
      setSelectedTip(selectedTipObj.name);
      setMarket(selectedTipObj.market.name);
    setTips_id(selectedTipObj.tip_id)
    console.log(selectedTipObj.tip_id);

    
    } else {
      setSelectedTip("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
    //   category,
    //   subcategory,
    //   market,
    //   selectedTip,
    //   venue,
    //   startTime,
    //   finishTime,
    tips_id,
    pick_id
    };

    try {
      isClose();
      const res = await authFetch.post("create-prediction", payload);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className="event_content position-absolute top-0 start-0 d-flex justify-content-center">
      <div className="content col-5">
        <div className="tile d-flex justify-content-between align-items-center px-4">
          <span>Add Event</span>
          <IoIcons.IoMdClose onClick={isClose} />
        </div>
        <div className="d-flex mt-2 mx-3 align-items-start justify-content-center h-100 ">
          <form className="form_data w-100 " onSubmit={handleSubmit}>
            <div className="d-flex flex-column custome">
              <div className="custom_select">
                <select
                  className="w-100"
                  value={selectedPick}
                  onChange={handlePickChange}
                >
                  <option value="">Pick</option>
                  {pick.map((item, id) => (
                    <option key={id} value={item.value}>
                      {item.question}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-1">
                <div className="row">
                  <div className="col">
                    {/* <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      <option value="">Category</option>
                    
                    </select> */}
                    <input
                      type="text"
                      placeholder="Category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    {/* <select
                      value={selectedSubcategory}
                      onChange={(e) => setSelectedSubcategory(e.target.value)}
                    >
                      <option value="">Subcategory</option>
                      
                    </select> */}
                    <input
                      type="text"
                      placeholder="Subcategory"
                      value={subcategory}
                      onChange={(e) => setSubcategory(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <div className="row align-content-start">
                  <div className="col mt-2">
                  <select
                  className="w-100"
                  value={selectedTip}
                  onChange={handleTipChange}
                >
                  <option value="">Tips</option>
                  {tips.map((item, id) => (
                    <option key={id} value={item.value}>
                      {item.name}
                    </option>
                  ))}
                </select>
                  </div>
                  <div className="col">
                    
                    <input type="text" placeholder="Market"  value={market}
                      onChange={(e) => setMarket(e.target.value)}/>
                  </div>
                </div>
              </div>
              <div className="mt-1 date_time">
                <div className="row">
                  <div className="col">
                    <label>Start Time</label>
                    {/* <input
                      type="datetime-local"
                      className="px-3"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    /> */}
                    <input
                      type="datetime"
                      placeholder="MM/YY"
                      className="px-2"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                    />
                  </div>
                  <div className="col">
                    <label>Finish Time</label>
                    {/* <input
                      type="datetime-local"
                      className="px-3 datetime-input"
                      value={finishTime}
                      onChange={(e) => setFinishTime(e.target.value)}
                    /> */}
                    <input
                      type="datetime"
                      placeholder="MM/YY"
                      className="px-2"
                      value={finishTime}
                      onChange={(e) => setFinishTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="custom_select mt-2">
                {/* <select
                  className="w-100"
                  value={selectedVenue}
                  onChange={(e) => setSelectedVenue(e.target.value)}
                >
                  <option value="">Venue</option>
                  
                </select> */}
                <input
                  type="text"
                  placeholder="Venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-3 bts">
              <div className="d-flex mx-1 justify-content-between align-items-center">
                <button className="mx-3 submit_bt px-3" onClick={isClose}>
                  Cancel
                </button>
                <button className="submit_bt px-3" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
