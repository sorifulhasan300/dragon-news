import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const Authentication = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Authentication;
