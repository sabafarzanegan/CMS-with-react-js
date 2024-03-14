import React from "react";
import "./AddProduct.css";


function AddProduct() {
  return (
    <>
      <h1 className="addproduct-title">افزودن محصول جدید</h1>
      <div className="add-product-container">
        <div className="add-product-content">
          <form action="#" className="form-group">
            <div className="input-item">
              <input type="text" placeholder="اسم محصول را بنویسید" />
            </div>
            <div className="input-item">
              <input type="text" placeholder="موجودی محصول را بنویسید" />
            </div>
            <div className="input-item">
              <input type="text" placeholder="میزان محبوبیت محصول را بنویسید" />
            </div>
            <div className="input-item">
              <input type="text" placeholder="تعداد رنگبندی محصول را بنویسید" />
            </div>
            <div className="input-item">
              <input type="text" placeholder=" قیمت محصول را بنویسید" />
            </div>
            <div className="input-item">
              <input type="text" placeholder=" آدرس عکس محصول را بنویسید" />
            </div>
            <div className="input-item">
              <input type="text" placeholder=" میزان فروش محصول را بنویسید" />
                      </div>
                      <button type="submit" className="add-product-btn">ثبت محصول</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
