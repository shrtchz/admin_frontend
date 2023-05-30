import React, { useState, useEffect } from "react";
import "./table.css";
import * as BsIcon from "react-icons/bs";
import axios from "axios";

import EditMarket from "./EditMarket";
import EditCurr from "./EditCurr";

const api = "https://shrtchz.pw/api/admin-profile/toggle-subcategories";



const TableCurr = ({
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
  const [selectedId, setSelectedId] = useState(null);

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
  const handleOpenModal = (id) => {
    console.log("Opened");
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closed");
    setIsModalOpen(false);
  };

 
  
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
                <th>Currency</th>
                <th>Acronym</th>
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
                 <td>{item.name}</td>
                 <td>{item.acronym}</td>

                  <td>
                    <BsIcon.BsPencilSquare
                      onClick={() => handleOpenModal(item.curr_id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      </div>
      <EditCurr
        isOpen={isModalOpen}
        isClose={handleCloseModal}
        id={selectedId}
        updateTable={updateTable}
        data={data}
      />
    </>
  );
};

export default TableCurr;
