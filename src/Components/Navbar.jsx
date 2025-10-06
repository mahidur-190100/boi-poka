import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2 font-bold rounded-full border-2 border-transparent hover:border-green-500 hover:text-green-500 transition-all duration-300 py-2 px-4">Home</li>
      </Link>
      <Link to="/About">
        <li className="m-2 font-bold rounded-full border-2 border-transparent hover:border-green-500 hover:text-green-500 transition-all duration-300 py-2 px-4">About</li>
      </Link>
      <Link to="ReadList">
        <li className="m-2 font-bold rounded-full border-2 border-transparent hover:border-green-500 hover:text-green-500 transition-all duration-300 py-2 px-4">ReadList</li>
      </Link>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Boi Poka</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-3 rounded-3xl">
        <a className="btn bg-green-600 text-white ">Sign In</a>
        <a className="btn bg-blue-300 text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
