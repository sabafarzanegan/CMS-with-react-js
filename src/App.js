import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Productes from "./components/Productes/Productes";
import Comments from "./components/Comments/Comments";
import Users from "./components/Users/Users";
import Orders from "./components/Orders/Orders";
import Offs from "./components/Offs/Offs";

function App() {
  return (
    <>
      <Sidebar />
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/productes" element={<Productes />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/offs" element={<Offs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
