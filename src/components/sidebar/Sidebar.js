import React from "react";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { PiBagBold } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    
    <>
      <div className="sidebar-container">
        <h1 className="sidbar-title">به داشبورد خود خوش آمدید</h1>
        <div className="sidbar-content">
          <ul>
            <li>
              <Link to="/">صفحه اصلی<FaHome className="sidbar-icons" /></Link>
            </li>
            <li>
              <Link to="/productes">محصولات<MdOutlineProductionQuantityLimits className="sidbar-icons" /></Link>
            </li>
            <li>
              <Link to="/comments">کامنت ها<FaRegCommentDots className="sidbar-icons" /></Link>
            </li>
            <li>
              <Link to="/users">کاربران <HiOutlineUsers className="sidbar-icons"/></Link>
            </li>
            <li>
              <Link to="/orders">سفارشات<PiBagBold className="sidbar-icons" /></Link>
            </li>
            <li>
              <Link to="/offs">تخفیف ها<BsCurrencyDollar className="sidbar-icons"/></Link>
            </li>
           
    
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
