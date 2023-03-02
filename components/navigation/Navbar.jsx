import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = ({ ...props }) => {

  return (
    <div className="navbar ">
      <ul className="flex w-full h-full justify-between items-center lg:flex-col lg:justify-start lg:my-12 lg:gap-4 font-semibold text-lg">
        <NavLink exact href={"/"} className="order-1">
          DashBoard
        </NavLink>
        <NavLink exact href={"/users"} className="order-2">
          Users
        </NavLink>
        <NavLink exact={false} href={"/chat"} className="order-3">
          Courses
        </NavLink>
        <NavLink myProfile href={"/profile"} className="order-4">
          Schedule
        </NavLink>
        <NavLink myProfile href={"/profile"} className="order-4">
          Reports
        </NavLink>
        <NavLink myProfile href={"/profile"} className="order-4">
          Settings
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
