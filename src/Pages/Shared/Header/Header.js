import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* small device navigation */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="font-bold" to={"/home"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="font-bold " to={"/services"}>
                Services
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/blog"}>
                Blog
              </Link>
            </li>
            {/* toggle in sign up and signin route */}
            {/* <li>
              <Link className="font-bold" to={"/myreview"}>
                My Review
              </Link>
            </li>
            <li>
              <Link className="font-bold" to={"/addservice"}>
                Add Service
              </Link>
            </li>
            <Link className="block lg:hidden">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-firstColor rounded-lg group bg-gradient-to-br from-orange-500 to-firstColor group-hover:from-firstColor group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Log Out
                </span>
              </button>
            </Link> */}
            <Link className="block lg:hidden w-8" to={"/login"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-firstColor rounded-lg group bg-gradient-to-br from-orange-500 to-firstColor group-hover:from-firstColor group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </Link>
            <Link className="block lg:hidden w-8" to={"/register"}>
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-firstColor rounded-lg group bg-gradient-to-br from-orange-500 to-firstColor group-hover:from-firstColor group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </Link>
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn bg-white hover:bg-white text-black outline-none border-none hover:bg-none font-semibold normal-case text-xl"
        >
          Legal
          <span className=" bg-firstColor rounded-lg p-2 ml-2 text-white">
            {" "}
            solution
          </span>
        </Link>
      </div>
      {/* large device navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link
              className="font-bold hover:transform hover:scale-125 hover:text-firstColor hover:border-b-2 hover:border-b-firstColor hover:transition hover:duration-200"
              to={"/home"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-bold hover:transform hover:scale-125 hover:text-firstColor hover:border-b-2 hover:border-b-firstColor hover:transition hover:duration-200"
              to={"/services"}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="font-bold hover:transform hover:scale-125 hover:text-firstColor hover:border-b-2 hover:border-b-firstColor hover:transition hover:duration-200"
              to={"/blog"}
            >
              Blog
            </Link>
          </li>
          {/* toggle beetween sign up and signout route */}
          {/* <li>
            <Link
              className="font-bold hover:transform hover:scale-125 hover:text-firstColor hover:border-b-2 hover:border-b-firstColor hover:transition hover:duration-200"
              to={"/myreview"}
            >
              My Review
            </Link>
          </li>
          <li>
            <Link
              className="font-bold hover:transform hover:scale-125 hover:text-firstColor hover:border-b-2 hover:border-b-firstColor hover:transition hover:duration-200"
              to={"/addservice"}
            >
              Add Service
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end ">
        {/* toggle btn at login and logout */}
        {/* <Link className="hidden lg:block">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-firstColor rounded-lg group bg-gradient-to-br from-orange-500 to-firstColor group-hover:from-firstColor group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Log Out
            </span>
          </button>
        </Link> */}
        <Link className="hidden lg:block" to={"/login"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-firstColor rounded-lg group bg-gradient-to-br from-orange-500 to-firstColor group-hover:from-firstColor group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Login
            </span>
          </button>
        </Link>
        <Link className="hidden lg:block" to={"/register"}>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-firstColor rounded-lg group bg-gradient-to-br from-orange-500 to-firstColor group-hover:from-firstColor group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-orange-200 dark:focus:ring-orange-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Register
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
