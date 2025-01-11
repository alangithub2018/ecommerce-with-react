import React from "react";
import MainHeader from "../components/organisms/MainHeader";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default App;
