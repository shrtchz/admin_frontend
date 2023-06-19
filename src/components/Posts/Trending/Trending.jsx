import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import "../Predictions/prediction.css";
import authFetch from "../../../utils/baseUrl";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Insight from "../../../assets/Icns/insight icon.png";
import Sales from "../../../assets/Icns/sales icon.png";
import Projection from "../../../assets/Icns/projection icon.png";
import OpenTrend from "./OpenTrend";

const Trending = ({ sidebar }) => {
  const [trend, setTrend] = useState([]);
  const [picks, setPicks] = useState([]);

  const [isDrop, setIsDrop] = useState(false);
  const [isAdminModal, setAdminModal] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const [isTrendOpen, setIsTrendOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function fetchPosts() {
      const authToken = localStorage.getItem("token");

      let res = await authFetch("/all-trendings");

      setTrend(res.data.data);
    }
    fetchPosts();
  }, [currentPage]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    const itemIndex = selectedItems.indexOf(itemId);
    if (itemIndex === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    }
  };

  const handleSelectAllChange = (event) => {
    if (event.target.checked) {
      setSelectedItems(trend.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const isChecked = (itemId) => {
    return selectedItems.indexOf(itemId) !== -1;
  };

  const isAllChecked = () => {
    return trend.length > 0 && selectedItems.length === trend.length;
  };

  const handleClose = () => {
    setSelectedRowIndex(-1);
    setIsTrendOpen(false);
  };

  const toggleDropdown = (index) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(-1);
      setIsTrendOpen(false);
    } else {
      setSelectedRowIndex(index);
      setIsTrendOpen(true);
    }
  };

  return (
    <>
      <div className="w-100">
        <Header />
        <table className="checkbox-table table-sm">
          <thead>
            <tr>
              <th scope="col-1">
                <input
                  type="checkbox"
                  checked={isAllChecked()}
                  onChange={handleSelectAllChange}
                />
              </th>
              <th>Trending</th>
              <th>Questionaire</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {trend.map((item, index) => (
              <React.Fragment key={index}>
                <tr className={`h ${isTrendOpen && selectedRowIndex === index ? "selected" : ""}`}>
                  <td>
                    <input
                      type="checkbox"
                      checked={isChecked(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>

                  <td style={{ paddingTop: "5px" }}>{item.title}</td>

                  <td style={{ paddingTop: "5px" }}>Tolu</td>
                  <td>
                    <img
                      src={Insight}
                      alt="insight"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </td>
                  <td>
                    <img
                      src={Sales}
                      alt="sales"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </td>
                  <td>
                    <img
                      src={Projection}
                      alt="projection"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </td>
                  <td>
                    <AiIcons.AiFillCheckSquare />
                  </td>
                  <td>
                    <IoIcons.IoIosArrowDropupCircle
                      onClick={() => toggleDropdown(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>

                {isTrendOpen && selectedRowIndex === index && (
                  <tr className=" selected_r ">
                    <td colSpan="8" >
                    <div className="selected_row col-7 mx-auto" >
                        <div className="selected_content  bg-warning">
                          <OpenTrend item={item} />
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Trending;
