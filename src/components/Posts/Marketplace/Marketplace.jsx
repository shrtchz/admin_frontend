import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Predictions/Header";
import "./marketplace.css";
import authFetch from "../../../utils/baseUrl";
import OpenMarketplace from "./OpenMarketplace";

const Marketplace = ({ sidebar }) => {
  const [event, setEvent] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selectedColumns, setSelectedColumns] = useState([
    "Author",
    "Listing",
    "Category",
    "Subcategory",
    "Start Time",
    "Finish Time",
    "Genre",
    "Price",
  ]);

  useEffect(() => {
    async function fetchPosts() {
      const authToken = localStorage.getItem("token");
      let res = await authFetch("/all-predictions");
      setEvent(res.data.data);
    }
    fetchPosts();
  }, [currentPage]);

  const handleCheckboxChange = (event, index) => {
    const checked = event.target.checked;

    if (checked) {
      setSelectedRow(index);
    } else {
      setSelectedRow(null);
    }
  };

  return (
    <>
      <div className="w-100">
        <Header />
        <table className="checkbox-table  table-sm">
          <thead>
            <tr>
              <th>
                <input type="checkbox" checked={false} onChange={() => {}} />
              </th>
              {selectedColumns.includes("Author") && <th>Author</th>}
              {selectedColumns.includes("Listing") && <th>Listing</th>}
              {selectedColumns.includes("Category") && <th>Category</th>}
              {selectedColumns.includes("Subcategory") && <th>Subcategory</th>}
              {selectedColumns.includes("Start Time") && <th>Start Time</th>}
              {selectedColumns.includes("Finish Time") && <th>Finish Time</th>}
              {selectedColumns.includes("Genre") && <th>Genre</th>}
              {selectedColumns.includes("Price") && <th>Price</th>}
            </tr>
          </thead>
          <tbody>
            {event.map((item, index) => (
              <React.Fragment key={index}>
                <tr className={selectedRow === index ? "h checked" : "h"}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRow === index}
                      onChange={(event) => handleCheckboxChange(event, index)}
                    />
                  </td>
                  {selectedColumns.includes("Author") && (
                    <td style={{ paddingTop: "5px" }}>{item.user.username}</td>
                  )}
                  {selectedColumns.includes("Listing") && (
                    <td style={{ paddingTop: "5px" }}>{item.pick.question}</td>
                  )}
                  {selectedColumns.includes("Category") && (
                    <td>{item.pick.category.name}</td>
                  )}
                  {selectedColumns.includes("Subcategory") && (
                    <td>{item.pick.category.name}</td>
                  )}
                  {selectedColumns.includes("Start Time") && (
                    <td>20/06/2023 09:00 am</td>
                  )}
                  {selectedColumns.includes("Finish Time") && (
                    <td>20/06/2023 12:00 pm</td>
                  )}
                  {selectedColumns.includes("Genre") && (
                    <td>Live</td>
                  )}
                  {selectedColumns.includes("Price") && <td>10</td>}
                </tr>
                {selectedRow === index && (
                  <tr className="ttrow">
                    <td
                      className=""
                      colSpan={selectedColumns.length + 1}
                      style={{ verticalAlign: " top" }}
                    >
                      <OpenMarketplace />
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

export default Marketplace;
