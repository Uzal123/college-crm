import React from "react";
import Navbar from "../navigation/Navbar";
import Topbar from "../Topbar";

const AppLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="main">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
