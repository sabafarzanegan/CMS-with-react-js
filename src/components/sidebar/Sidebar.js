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
              <Link to="/">
                <FaHome className="sidbar-icons" />
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link to="/productes">
                <MdOutlineProductionQuantityLimits className="sidbar-icons" />
                محصولات
              </Link>
            </li>
            <li>
              <Link to="/comments">
                {" "}
                <FaRegCommentDots className="sidbar-icons" />
                کامنت ها
              </Link>
            </li>
            <li>
              <Link to="/users">
                {" "}
                <HiOutlineUsers className="sidbar-icons" />
                کاربران
              </Link>
            </li>
            <li>
              <Link to="/orders">
                <PiBagBold className="sidbar-icons" />
                سفارشات
              </Link>
            </li>
            <li>
              <Link to="/offs">
                <BsCurrencyDollar className="sidbar-icons" />
                تخفیف ها
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
