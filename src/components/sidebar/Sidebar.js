import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <h1 className="sidbar-title">به داشبورد خود خوش آمدید</h1>
        <div className="sidbar-content">
          <ul>
            <li>
              <a href="/">صفحه اصلی</a>
            </li>
            <li>
              <a href="/">محصولات</a>
            </li>
            <li>
              <a href="/">کامنت ها</a>
            </li>
            <li>
              <a href="/">کاربران</a>
            </li>
            <li>
              <a href="/">سفارشات</a>
            </li>
            <li>
              <a href="/">تخفیف ها</a>
            </li>
           
    
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
