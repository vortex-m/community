import React from "react";
import LeftSidebar from "../Bars/LeftSidebar";
import { Outlet } from "react-router-dom";
import RightSideBar from "../Bars/RightSideBar";
import "../../App.css";

function MainLayout() {
  return (
    <div className="flex max-w-[85svw] mx-auto flex-row">
      {/* Left Side */}
      <div className="w-[25%] flex justify-center items-start">
        <LeftSidebar />
      </div>

      {/* Outlet */}
      <div className="w-[60%] h-screen overflow-y-scroll flex flex-col scroll">
        <div className="flex-1 flex justify-start items-start py-4">
          <Outlet />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-[25%] flex justify-center items-start">
        <RightSideBar />
      </div>
    </div>
  );
}

export default MainLayout;
