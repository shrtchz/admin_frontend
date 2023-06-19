import React, { useState } from "react";
import Image from "./Image";
import * as AiIcons from "react-icons/ai";
const OpenEvent = ({ item }) => {
  const [isMinus, setIsMinus] = useState(true);

  const handleClick = () => {
    setIsMinus(!isMinus);
  };
  return (
    <div className="w-100">
      <div className="img_container  col-12 row g-0 ">
        <div className="col ms-4 d-flex mt-2">
          <div className="col-auto">
            <Image src="path/to/image.jpg" />
          </div>
          <div className="px-2" style={{ height: "80px", lineHeight: "1" }}>
            <span style={{ display: "block", fontWeight: "bolder" }}>
              Olamilekun Ayobami
            </span>
            <span style={{ display: "block", color: "red" }}>@ola</span>
            <span className="text-muted" style={{ display: "block" }}>
              Jun. 15, 2023
            </span>
          </div>
        </div>
        <div className="event_mark col-8 mx-5" style={{ height: "170px" }}>
          <div className="row mb-3">
            <div className="col-6 px-1 ">
              <div className="d-flex flex-column">
                <span className="label px-3" style={{ fontWeight: "500" }}>
                  Prediction/Tip
                </span>
                <span
                  className="text-muted label_text mx-3"
                  style={{ fontWeight: "300" }}
                >
                  Bernie shall win the 2024 Democratic nomination
                </span>
              </div>
            </div>
            <div className="col-5 d-flex align-items-end justify-content-between ps-5">
              <button className="p-auto px-2 bt">
                <span>Validate Via API</span>
              </button>
              <div className="p-auto px-2 d-flex">
                <button
                  className="px-3 me-2 bg-secondary-subtle"
                  onClick={handleClick}
                >
                  Verify
                </button>
                <span>
                  {isMinus ? (
                    <AiIcons.AiFillMinusSquare color="red" />
                  ) : (
                    <AiIcons.AiFillPlusSquare color="green" />
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 px-1 d-flex">
              <div className="d-flex flex-column mx-3">
                <span className="label px-3 mb-2" style={{ fontWeight: "500" }}>
                  Validation
                </span>
                <button className="p-auto px-2 bt">
                <span>Pending</span>
              </button>
              </div>
              <div className="d-flex flex-column mx-2 ">
                <span className="label px-4 mb-2" style={{ fontWeight: "500" }}>
                  Status
                </span>
                <button className="p-auto px-2 bt">
                <span>Won</span>
              </button>
              </div>
              <div className="d-flex flex-column">
                <span className="label px-3 mb-2" style={{ fontWeight: "500" }}>
                  Actions
                </span>
                <button className="p-auto px-2 bt">
                <span>Delete</span>
              </button>
              </div>
            </div>
            <div className="col-5 d-flex align-items-end justify-content-between ps-5">
              <button className="p-auto px-2 bt">
                <span>Validate Manually</span>
              </button>
              <div className="p-auto px-2 d-flex">
                <button
                  className="px-3 me-2 bg-secondary-subtle"
                  onClick={handleClick}
                >
                  Verify
                </button>
                <span>
                  {isMinus ? (
                    <AiIcons.AiFillMinusSquare color="red" />
                  ) : (
                    <AiIcons.AiFillPlusSquare color="green" />
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenEvent;
