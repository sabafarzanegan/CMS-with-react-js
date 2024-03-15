import React from "react";
import "./DeletModal.css";
import ReactDOM from "react-dom";

function DeletModal({ isActiveModal, setIsActiveModal }) {
  const CancelDeletProductHandler = () => {
    setIsActiveModal(false)
  };
  return ReactDOM.createPortal(
    <div className={isActiveModal ? "modal-parent active" : "modal-parent"}>
      <div className="delet-modal">
        <h1>آیا از حذف اطمینان دارید؟</h1>
        <div className="delet-modal-btns">
          <button
            className="delet-btns delet-accept-btns
            "
          >
            بله
          </button>
          <button
            onClick={CancelDeletProductHandler}
            className="delet-btns delet-reject-btns"
          >
            خیر
          </button>
        </div>
      </div>
    </div>,

    document.getElementById("modal")
  );
}

export default DeletModal;
