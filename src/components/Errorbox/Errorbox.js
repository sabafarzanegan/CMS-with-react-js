import React from "react";
import "./Errorbox.css"

function Errorbox({ msg }) {
  return (
    <>
      <div className="error-box">
        <h3>{msg}</h3>
      </div>
    </>
  );
}

export default Errorbox;
