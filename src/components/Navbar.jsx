import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-8">
      <div className="blank"></div>
      <div className="nav-item flex gap-4">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-part flex gap-5">
        <img src="/user.png" alt="" />
        <button className="btn text-white bg-[#403F3F] ">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
