import React, { useState } from "react";
import "./Productes.css";
import Errorbox from "../Errorbox/Errorbox";
import AddProduct from "../Addproduct/AddProduct";
import ProductTable from "../Producttable/ProductTable";
import DeletModal from "../DeletModal/DeletModal";

function Productes() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  return (
    <>
      <Errorbox msg="محصولی یافت نشد" />
      <AddProduct />
      <ProductTable isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}/>
      <DeletModal isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal } />
    </>
  );
}

export default Productes;
