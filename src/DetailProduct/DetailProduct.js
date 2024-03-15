import React from "react";
import ReactDOM from "react-dom";
import "./DetailProduct.css";

function DetailProduct() {
    return ReactDOM.createPortal(
      <div className="modal-parent  ">
        <table className="cms-table ">
          <thead className="thead-detail">
            <tr>
              <th>اسم</th>
              <th>قیمت</th>
              <th>محبوبیت</th>
            </tr>
          </thead>
          <tbody className="tbody-details">
            <tr>
              <td>لب تاب</td>
              <td>120000</td>
              <td>91</td>
            </tr>
          </tbody>
        </table>
      </div>,
      document.getElementById("modal")
    );
}

export default DetailProduct;
