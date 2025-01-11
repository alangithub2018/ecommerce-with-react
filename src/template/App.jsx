import React from "react";
import MainHeader from "../components/organisms/MainHeader";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-16 max-w-256 m-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
