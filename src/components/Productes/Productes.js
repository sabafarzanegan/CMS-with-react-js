import React, { useState } from "react";
import "./Productes.css";
import Errorbox from "../Errorbox/Errorbox";
import AddProduct from "../Addproduct/AddProduct";
import ProductTable from "../Producttable/ProductTable";
import DeletModal from "../DeletModal/DeletModal";
import DetailProduct from "../DetailProduct/DetailProduct";
import EditModal from "../editModal/EditModal";

function Productes() {
  const [isActiveModal, setIsActiveModal] = useState(false);
  const [isDetailModal, setisDetailModal] = useState(false);
  const [isEditModal, setisEditModal] = useState(false);
  const UpdateProduct = () => {
    console.log("اطلاعات ثبت شد");
  };
  return (
    <>
      <Errorbox msg="محصولی یافت نشد" />
      <AddProduct />
      <ProductTable
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        isDetailModal={isDetailModal}
        setisDetailModal={setisDetailModal}
        isEditModal={isEditModal}
        setisEditModal={setisEditModal}
      />
      <DeletModal
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
      />
      <DetailProduct
        isDetailModal={isDetailModal}
        setisDetailModal={setisDetailModal}
      />
      <EditModal
        onsubmit={UpdateProduct}
        onclose={() => setisEditModal(false)}
        isEditModal={isEditModal}
      ></EditModal>
    </>
  );
}

export default Productes;
