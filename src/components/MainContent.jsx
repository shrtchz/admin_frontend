import React from "react";
import SideBar from "./SideBar/SideBar";
import Dash from "./contents/Home";

const MainContent = () => {
  return (
    <div className="main">
      <SideBar />
      <Dash />
    </div>
  );
};

export default MainContent;
