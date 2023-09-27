import React from "react";
import { Outlet } from "react-router-dom";
import Container from "../components/Container";
import SideNavBar from "../components/SideNavBar";
import SideContainer from "../SideContainer";

export default function RootLayout() {
  return (
    <div>
      <div className="flex">
        <div className="w-[300px] border-r-2 relative h-screen">
          <SideNavBar />
          <SideContainer />
        </div>
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
