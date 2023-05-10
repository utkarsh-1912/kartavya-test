import React from "react";
import "./table.css";

const Table = () => {
  return (
    <div className="table">
      <table>
        <tr className="heading">
          <th>Center Name</th>
          <th>Center Rent</th>
          <th>Center Recruit Payment</th>
        </tr>
        <tr>
          <th>C1</th>
          <td>
            <a href="#payment">Rs. 10000 x 2 (For Two Month)</a>
          </td>
          <td>
            <a href="#payment">Rs. 10000 x 4 (For Four Month)</a>
          </td>
        </tr>
        <tr>
          <th>Anganwadi Center</th>
          <td>
            <a href="#payment">Rs. 500 x 12 (For Twelve Month)</a>
          </td>
          <td>
            <a href="#payment">Rs. 1500 x 2 (For Two Month)</a>
          </td>
        </tr>
        <tr>
          <th>C5</th>
          <td>
            <a href="#payment">Rs. 1500 x 4 (For Four Month)</a>
          </td>
          <td>
            <a href="#payment">Rs. 3400 x 3 (For Three Month)</a>
          </td>
        </tr>
        <tr>
          <th>C2</th>
          <td>
            <a href="#payment">-</a>
          </td>
          <td>
            <a href="#payment">Rs. 3600 x 3 (For Three Month)</a>
          </td>
        </tr>
        <tr>
          <th>Computer Center</th>
          <td>
            <a href="#payment">-</a>
          </td>
          <td>
            <a href="#payment">Rs. 5000 x 2 (For Two Month)</a>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
