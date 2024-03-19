import React, { useState } from "react";
import "./Productes.css";
import Errorbox from "../Errorbox/Errorbox";
import AddProduct from "../Addproduct/AddProduct";
import ProductTable from "../Producttable/ProductTable";
import DeletModal from "../DeletModal/DeletModal";
import DetailProduct from "../../DetailProduct/DetailProduct";

function Productes() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isDetailModal, setisDetailModal] = useState(false);
  return (
    <>
      <Errorbox msg="محصولی یافت نشد" />
      <AddProduct />
      <ProductTable
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        isDetailModal={isDetailModal}
        setisDetailModal={setisDetailModal}
      />
      <DeletModal
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
      <DetailProduct
        isDetailModal={isDetailModal}
        setisDetailModal={setisDetailModal}
      />
    </>
  );
}

export default Productes;
