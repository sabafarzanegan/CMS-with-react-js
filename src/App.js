import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Header from "./components/Header/Header";
import { useRoutes } from "react-router-dom";

import routes from "./Routes";

function App() {
  const router = useRoutes(routes);
  return (
    <>
      <Sidebar />
      <div className="app-container">
        <Header />
        {router}
      </div>
    </>
  );
}

export default App;
