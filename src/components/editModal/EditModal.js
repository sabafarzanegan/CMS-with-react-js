import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import "./EditModal.css";

function EditModal({ children, onsubmit, onclose, isEditModal }) {
  useEffect(() => {
    const checkkey = (e) => {
      if (e.keyCode) {
        onclose();
      }
    };
      window.addEventListener("keydown", checkkey);
      return ()=>{window.removeEventListener("keydown",checkkey)}
  });

  return ReactDOM.createPortal(
    <div className={`modal-parent ${isEditModal ? "active" : ""}`}>
      <form className="form-edit-modal">
        <h1>اطلاعات جدید را وارد کنید</h1>
        {children}
        <button type="submit">ثبت</button>
      </form>
    </div>,
    document.getElementById("modal")
  );
}

export default EditModal;
