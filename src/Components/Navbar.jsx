import React from "react";
import { Link } from "react-router";
import { useAuth } from "../Context/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOUT } = useAuth();

  const handleLogOut = () => {
    logOUT();
    console.log("Working");
  };

  return (
    <div className="bg-base-100 shadow-sm w-full">
      <div className=" navbar  max-w-screen-xl container mx-auto">
        <div className="navbar-start ">
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
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/service"}>Service</Link>
              </li>
              <li>
                <Link to={"/categories"}>Blogs</Link>
              </li>
              <li>
                <details>
                  <summary>Categories</summary>
                  <ul className="p-5">
                    <li>
                      <a>UI/UX Design</a>
                    </li>
                    <li>
                      <a>Web Development</a>
                    </li>
                    <li>
                      <a>Web Automation</a>
                    </li>
                    <li>
                      <a>Robotics</a>
                    </li>
                    <li>
                      <a>Blockchain Development</a>
                    </li>
                    <li>
                      <a>Data Science And Machine Learning</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <Link to={"/"} className=" btn bg-primary text-xl ">
              NEXTIFY
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/service"}>Service</Link>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>
              <details>
                <summary>Categories</summary>
                <ul className="p-5">
                  <li>
                    <a>UI/UX Design</a>
                  </li>
                  <li>
                    <a>Web Development</a>
                  </li>
                  <li>
                    <a>Web Automation</a>
                  </li>
                  <li>
                    <a>Robotics</a>
                  </li>
                  <li>
                    <a>Blockchain Development</a>
                  </li>
                  <li>
                    <a>Data Science And Machine Learning</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end space-x-5">
            <Link to={"/package"} className="btn bg-primary ">
              Start Free Trial
            </Link>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                <div className="text-xl bg-gray-900 p-3 rounded-full text-secondary hover:cursor-pointer">
                  <FaUserAlt />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link to={"/dashboard"} className="text-secondary ">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogOut} className="text-secondary ">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end space-x-5">
            <Link to={"/login"} className="btn btn-outline btn-secondary">
              Login
            </Link>
            <Link to={"/package"} className="btn bg-primary ">
              Start Free Trial
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
