import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <NavLink
              to="/"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
              aria-label="Homepage"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                <img
                  className="w-[120px]"
                  src="../../public/images/logo1.png"
                  alt="Logo"
                />
              </span>
            </NavLink>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <NavLink
                to="/"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                activeClassName="text-gray-900"
                exact
              >
                Home
              </NavLink>
              <NavLink
                to="/verfei"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                activeClassName="text-gray-900"
                exact
              >
                verfei
              </NavLink>
              <NavLink
                to="/features"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                activeClassName="text-gray-900"
              >
                Features
              </NavLink>
              <NavLink
                to="/pricing"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                activeClassName="text-gray-900"
              >
                Pricing
              </NavLink>
              <NavLink
                to="/blog"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
                activeClassName="text-gray-900"
              >
                Blog
              </NavLink>
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <NavLink
              to="/signin"
              className="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
              aria-label="Sign in"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              aria-label="Sign up"
            >
              Sign up
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
