import React, { useState } from "react";
import Image from "./Image";
import * as AiIcons from "react-icons/ai";

const OpenMarketplace = ({ item }) => {
  const [isMinus, setIsMinus] = useState(true);
  const [isPend, setIsPend] = useState(true);

  const handleClick = () => {
    setIsPend(!isPend);
  };
  const handleVerify = () => {
    setIsMinus(!isMinus);
  };
  return (
    <div className="w-100">
      <div className="px-2 market">
        <div className="col-12">
          <div className="row ">
            <div className="col-9">
              <div className="col-12 px-2">
                <div className="row">
                  <div className="col-3">
                    <label>Event</label>
                    <span>Fulham vs Arsenal</span>
                  </div>
                  <div className="col-2">
                    <label>Market</label>
                    <span>Correct Score</span>
                  </div>
                  <div className="col-1">
                    <label>Tip</label>
                    <span> 1: 1</span>
                  </div>
                  <div className="col-1">
                    <label>Odds</label>
                    <span> 0.11</span>
                  </div>
                  <div className="col-1">
                    <label>Stake</label>
                    <span> 0.55</span>
                  </div>
                  <div className="col-2">
                    <label>Est. Profit</label>
                    <span> 5.55</span>
                  </div>
                  <div className="col-2">
                    <label>Venue</label>
                    <span> Emirate Stadium</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
              <div className="p-auto px-2">{/* Other content */}</div>
              <div className="mt-auto">
                <button className="px-3 me-2 " onClick={handleClick}>
                  Action
                </button>
                {/* Other elements */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row ">
            <div className="col-9">
              <div className="col-12 px-2">
                <div className="row">
                  <div className="col-2">
                    <label>Where to play</label>
                    <span>BetNaija</span>
                  </div>
                  <div className="col-2">
                    <label>Status</label>
                    <span>Live</span>
                  </div>
                  <div className="col-3">
                    <div className="">
                      <button
                        className="px-3 me-2 border-0 bttt pb-2"
                        style={{ border: "none" }}
                        onClick={handleClick}
                      >
                        Validate by API
                      </button>
                      <span>
                        {isPend ? <label>Pending</label> : <label>Done</label>}
                      </span>
                    </div>
                  </div>

                  <div className="col-1">
                    <label>Buyer</label>
                    <span> 5.55</span>
                  </div>
                  <div className="col-1">
                    <div className="d-flex flex-column align-items-center">
                      <button
                        className="px-3 me-2 border-0 bttt pb-2"
                        style={{ border: "none" }}
                        onClick={handleVerify}
                      >
                        Verify
                      </button>
                      {isMinus ? (
                        <AiIcons.AiFillMinusSquare color="red" />
                      ) : (
                        <AiIcons.AiFillPlusSquare color="green" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex flex-column align-items-end">
              <div className="p-auto px-2">{/* Other content */}</div>
              <div className="mt-auto">
                <button className="px-3 me-2 " onClick={handleClick}>
                  Reports
                </button>
                {/* Other elements */}
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-1">
        <div className="row">
          <div className="col-9">
              <div>
                <label>Analysis</label>
                <input type='text'/>
              </div>
          </div>
          <div className="col-1"></div>
          <div className="col-2 mt-4">
              <div className="d-flex flex-column mb-4">
              
                    <div className="">
                      <button
                        className="px-3 me-2 pb-2"
                        style={{ border: "none" }}
                        onClick={handleClick}
                      >
                        Validate Via API
                      </button>
                      {/* <span>
                        {isPend ? <label>Pending</label> : <label>Done</label>}
                      </span> */}
                  
                  </div>
              </div>
              <div className="d-flex flex-column">
              
                    <div className="">
                      <button
                        className="px-3 me-2 pb-2"
                        style={{ border: "none" }}
                        onClick={handleClick}
                      >
                        Validate Manually
                      </button>
                      {/* <span>
                        {isPend ? <label>Pending</label> : <label>Done</label>}
                      </span> */}
                  
                  </div>
              </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default OpenMarketplace;
