import React from "react";
import { Link } from "gatsby";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { push as Menu } from "react-burger-menu";
import { FaHome, FaTags, FaUser, FaSun, FaMoon } from "react-icons/fa";

export default (props) => {
  return (
    <Menu {...props} className="NavBarItems">
      <Link
        to="/"
        className="menu-item  block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        <div className="flex flex-row justify-start items-center space-x-2">
          <FaHome />
          <div>HOME</div>
        </div>
      </Link>
      <Link
        to="/about"
        className="menu-item block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
      >
        <div className="flex flex-row justify-start items-center  space-x-2">
          <FaUser />
          <div>ABOUT</div>
        </div>
      </Link>
      <div className=" menu-item text-sm lg:flex-grow ">
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="mt-4 flex items-center  w-full mb-4">
              <label className="flex items-center cursor-pointer">
                <div className="mr-3 text-sm">
                  <FaSun />
                </div>
                <div className="relative">
                  <input
                    id="toogleA"
                    type="checkbox"
                    className="sr-only"
                    onChange={(e) =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                  <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                </div>
                <div className="ml-3  text-sm">
                  <FaMoon />
                </div>
              </label>
            </div>
          )}
        </ThemeToggler>
      </div>
    </Menu>
  );
};
