import React, { useState, useEffect } from "react";
import "./trending.css";
import * as IoIcons from "react-icons/io";
import authFetch from "../../../utils/baseUrl";

const AddTrend = ({ isOpen, isClose }) => {
  const [pick, setPick] = useState([]);
  const [pick_id, setPick_id] = useState("");
  
  const [text, setText] = useState('');

  const maxLength = 60;
 

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };
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
      setPick_id(selectedPickObj.pic_id);
    } else {
      setCategory("");
    }
  };
  const handleTipChange = (e) => {
    const selectedTipValue = e.target.value;
    setSelectedTip(selectedTipValue);
    //   console.log(pick)

    // Find the pick object based on the selected value
    const selectedTipObj = tips.find((item) => item.name === selectedTipValue);
    console.log(selectedTipObj);

    // Update the  input value with the category of the selected pick
    if (selectedTipObj) {
      setSelectedTip(selectedTipObj.name);
      setMarket(selectedTipObj.market.name);
      setTips_id(selectedTipObj.tip_id);
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
      pick_id,
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
    <div className="container_content position-absolute top-0 start-0 d-flex align-items-center justify-content-center">
      <div className="content col-5">
        <div className="tile d-flex justify-content-between align-items-center px-4">
          <span>Add What's Trending</span>
          <IoIcons.IoMdClose onClick={isClose} />
        </div>
        <div className="d-flex mt-2 mx-0 mx-sm-3 formd">
          <form onSubmit={handleSubmit} className=" w-100 fomik mx-5">
            <div className="custom  col-5 ">
              <div class="mb-1 ">
                <label for="inputPassword" class="">
                  Header
                </label>
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="mb-1">
                <label for="inputPassword" class="">
                  Header
                </label>
                <div class="col">
                  <div className="textarea_wrapper">
                  <textarea  type="text"
          className="form-control"
          value={text}
          onChange={handleInputChange}
          maxLength={maxLength}>
                  
                  </textarea>
                  <span className="character-count">{text.length}/{maxLength}</span>
                  </div>
                </div>
              </div>
              <div class="mb-1 ">
                <label for="inputPassword" class="">
                  Questionaire
                </label>
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="mb-2">
                <label for="inputPassword" class="">
                  Questionaire
                </label>
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
              <div class="">
                <label for="inputPassword" class="">
                  Questionaire
                </label>
                <div class="col">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                  />
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-end pe-3 mt-3 ">
              <div className="justify-content-between bns row">
                <button className="save_btn" style={{ textAlign: "center" }} onClick={isClose}>
                  Cancel
                </button>
                <button className="save_btn" style={{ textAlign: "center" }}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTrend;
