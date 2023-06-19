import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import Image from "./Image";
import * as HiIcons from "react-icons/hi";

const OpenTrend = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAllChange = () => {
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = () => {
    // Handle individual checkbox change here
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="w-100 open-trend">
      <header className="tile d-flex justify-content-between align-items-center px-3">
        <div>
          <span style={{ color: "grey", fontWeight: "600", fontSize: "15px" }}>
            Trending
          </span>
          <span style={{ color: "#4d4d4d", fontWeight: "700", fontSize: "12px" }}>
            :Events,People,News and More
          </span>
        </div>
        <div>
          <span className="me-3">
            <AiIcons.AiOutlineExpandAlt />
          </span>
          <span>
            <AiIcons.AiOutlineClose onClick={handleClose} />
          </span>
        </div>
      </header>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  style={{
                    border: "2px solid green", // Replace with desired border color
                  }}
                  onChange={handleSelectAllChange}
                />
              </th>
              <th>Predictor</th>
              <th>Predictions</th>
              <th>Post on</th>
              <th style={{ color: "grey" }}>
                <MdIcons.MdOutlineKeyboardArrowDown size={20} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row">
              <td style={{ verticalAlign: "top" }}>
                <input
                  type="checkbox"
                  checked={false}
                  onChange={handleCheckboxChange}
                />
              </td>
              <td>
                Babat Lawrence
                <p>@babatfly</p>
              </td>
              <td style={{ verticalAlign: "top" }}>
                Kanye west to remarry Kim Kardashian
              </td>
              <td style={{ verticalAlign: "top" }}>Sept 25,2023</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="dtname mb-4">
        <div className="img_container  col-12 row g-0 ">
          <div className="col-3"></div>
          <div className="col ms-4 d-flex mt-2">
            <div className="col-auto">
              <Image src="path/to/image.jpg" />
            </div>
            <div className="col">
              <div className="date px-3 d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                  <span className="mr-2">Sandi Dee</span>
                  <p
                    className="mb-0 text-muted ps-2 pt-1"
                    style={{ fontSize: "10px" }}
                  >
                    May 22, 2021
                  </p>
                  <span className="ms-auto">
                    <HiIcons.HiOutlineDotsHorizontal />
                  </span>
                </div>
                <div className="mt-1 mb-1">
                  <p
                    className="text-muted"
                    style={{ fontSize: "12px", lineHeight: "1.2" }}
                  >
                    Please!!! No MORE Kardashian news! Give us some worthwhile
                    news from real celebrities! Those people aren't worth the good
                    air they're wasting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img_container col-12 row g-0 px-3  ">
          <div className="col-3"></div>
          <div className="col ms-4 d-flex mt-2">
            <div className="col-auto">
              <Image src="path/to/image.jpg" />
            </div>
            <div className="col mx-1 ">
              <div className="datename mb-3 px-3 d-flex flex-column">
                <div className="d-flex flex-row align-items-center">
                  <span className="mr-2">Mark Spoon</span>
                  <p
                    className="mb-0 text-muted ps-2 pt-1"
                    style={{ fontSize: "10px" }}
                  >
                    May 22, 2021
                  </p>
                </div>
                <div className="mt-1 mb-1">
                  <p
                    className="text-muted"
                    style={{ fontSize: "12px", lineHeight: "1.2" }}
                  >
                    Good times, hard to believe it’s been that long ago.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-2 d-flex justify-content-end">
              <span>
                <HiIcons.HiOutlineDotsHorizontal />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default OpenTrend;
