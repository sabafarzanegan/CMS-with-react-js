import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css"
import Header from "./components/Header/Header";
import { Router } from "react-router-dom";

function App() {
  return (
    <>
      <Sidebar />
      <div className="app-container">
        <Header />
        {/* <Router/> */}
      </div>
    </>
  );
}

export default App;
