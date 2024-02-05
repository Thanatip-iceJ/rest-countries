import React from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <NavBar />
      <div className="pt-3 pb-[2rem] px-[5rem] mt-[3rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
