import React from "react";
import "./Comments.css";
import Errorbox from "../Errorbox/Errorbox";
import DeletModal from "../DeletModal/DeletModal";
import DetailProduct from "../../DetailProduct/DetailProduct";

function Comments() {
  return (
    <>
      <Errorbox msg="کامنتی یافت نشد" />
      <DetailProduct />
    </>
  );
}

export default Comments;
