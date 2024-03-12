import React from "react";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { PiBagBold } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <h1 className="sidbar-title">به داشبورد خود خوش آمدید</h1>
        <div className="sidbar-content">
          <ul>
            <li>
              <a href="/">صفحه اصلی<FaHome className="sidbar-icons" /></a>
            </li>
            <li>
              <a href="/">محصولات<MdOutlineProductionQuantityLimits className="sidbar-icons" /></a>
            </li>
            <li>
              <a href="/">کامنت ها<FaRegCommentDots className="sidbar-icons" /></a>
            </li>
            <li>
              <a href="/">کاربران <HiOutlineUsers className="sidbar-icons"/></a>
            </li>
            <li>
              <a href="/">سفارشات<PiBagBold className="sidbar-icons" /></a>
            </li>
            <li>
              <a href="/">تخفیف ها<BsCurrencyDollar className="sidbar-icons"/></a>
            </li>
           
    
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
