import React, { useState, useEffect } from "react";
import "./table.css";
import { renderImage } from "./Headers";
import * as BsIcon from "react-icons/bs";
import axios from "axios";

import EdidSubCat from "./EditSubCat";

const api = "https://shrtchz.pw/api/admin-profile/toggle-subcategories";

// http://127.0.0.1:8000/api/admin-profile/all-subcategories

const TableSub = ({
  headers,
  data,
  selectedRows,
  setSelectedRows,
  fetchData,
  setData,
}) => {
    // console.log(data)
  const [checkedRows, setCheckedRows] = useState(selectedRows);
  const [toggleState, setToggleState] = useState({});
  const [status, setStatus] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubCatId, setSelectedSubCatId] = useState(null);

  const handleCheckboxChange = (event, index) => {
    const checked = event.target.checked;
    let updatedCheckedRows = [...checkedRows];
    // console.log(updatedCheckedRows)

    if (index === -1) {
      // Checkbox in the header is clicked
      // Handle header checkbox change event here
      updatedCheckedRows = checked ? Array.from(Array(data.length).keys()) : [];
      console.log("Header Checkbox:", checked);
    } else {
      // Checkbox in the table row is clicked
      // Handle row checkbox change event here
      if (checked) {
        updatedCheckedRows.push(index);
        setSelectedRows((prevSelectedRows) => [...prevSelectedRows, index]);
      } else {
        const rowIndex = updatedCheckedRows.indexOf(index);
        setSelectedRows((prevSelectedRows) =>
          prevSelectedRows.filter((rowIndex) => rowIndex !== index)
        );

        if (rowIndex !== -1) {
          updatedCheckedRows.splice(rowIndex, 1);
        }
      }

      // Pass the selected data back to the parent component
      // onDataReturn(selectedData);
    }

    setCheckedRows(updatedCheckedRows);
    // console.log('Row Checkbox:', checked, index);
    //  const selectedData = updatedCheckedRows.map((selectedIndex) => data[selectedIndex]);
    // handleDelete(selectedData);
  };
  const handleOpenModal = (subcatId) => {
    console.log("Opened");
    setSelectedSubCatId(subcatId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closed");
    setIsModalOpen(false);
  };

  // useEffect(() => {
  //   setToggleState({});
  // }, [selectedRows]);
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const handleClick = async (index, itemId) => {
    // console.log('Fetching API data...');
    try {
      const authToken = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${authToken}`,
      };
      const item = data[index]; // Access the item object based on the index
      const newState = { ...toggleState };
      newState[index] = !newState[index];
      setToggleState(newState);

      let res = await axios.post(`${api}/${itemId}`, {}, { headers });
      fetchData();
      setStatus(res.data.data.status);
      setSelectedSubCatId(itemId);
      console.log("Fetched!!!");
    //   console.log(res.data.data);

      // Update the button text based on the response
      const updatedButtonText = res.data.data.sta ? "Inactive" : "Active";
      const updatedData = [...data];
      updatedData[index] = { ...item, status: updatedButtonText };
      setData(updatedData);

      // Store the updated toggle state in local storage
      localStorage.setItem("toggleState", JSON.stringify(newState));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    // Retrieve the toggle state from local storage on page load
    const storedToggleState = localStorage.getItem("toggleState");
    if (storedToggleState) {
      setToggleState(JSON.parse(storedToggleState));
    }
  }, []);
  const updateTable = () => {
    fetchData();
  };

  return (
    <>
      <div className="tbl-container">
        <div className="table-wrapper">
          <table className="checkbox-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={(event) => handleCheckboxChange(event, -1)}
                  />
                </th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className={checkedRows.includes(index) ? "check" : ""}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={checkedRows.includes(index)}
                      onChange={(event) => handleCheckboxChange(event, index)}
                    />
                  </td>

                  <td>{item.category?item.category.name:'N/A'}</td>
                 <td>{item.name}</td>
                  <td>
                    <button
                      className={checkedRows.includes(index) ? "check" : ""}
                      style={{
                        backgroundColor:
                          index % 2 === 0 ? "#ffffff" : "#f8f8f8",
                      }}
                      onClick={() => handleClick(index, item.subcat_id)}
                    >
                      {capitalizeFirstLetter(item.status)}
                    </button>
                  </td>
                  <td>
                    <BsIcon.BsPencilSquare
                      onClick={() => handleOpenModal(item.subcat_id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      </div>
      <EdidSubCat
        isOpen={isModalOpen}
        isClose={handleCloseModal}
        subcatId={selectedSubCatId}
        updateTable={updateTable}
      />
    </>
  );
};

export default TableSub;
