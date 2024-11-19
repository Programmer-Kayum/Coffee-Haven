import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RealTimeClock from "../RealTimeClock/RealTimeClock";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        alert("LogOut successful!");
        // Redirect to the home page or dashboard
        setTimeout(() => {
          navigate("/"); // Use navigate to redirect
        }, 2000); // Optional delay for feedback
        return;
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`); // Handle errors
      });
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink to={"/"}>
            <div className="lg:text-2xl lg:font-bold font-bold mr-1 text-gray-800 dark:text-white">
              COFFEE <span className="text-orange-500">HAVEN</span>
            </div>
          </NavLink>

          <RealTimeClock></RealTimeClock>

          {/* Links for larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink
              to={"/"}
              className="text-gray-600 font-bold dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              HOME
            </NavLink>
            <NavLink
              to={"/order"}
              className="text-gray-600 font-bold dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              ORDER LIST
            </NavLink>

            <NavLink
              to={"/addCoffee"}
              className="text-gray-600 font-bold dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              ADD COFFEE
            </NavLink>
            <NavLink
              to={"/user"}
              className="text-gray-600 font-bold dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              USER
            </NavLink>
            <NavLink
              to={"/coffee"}
              className="text-gray-600 font-bold dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              ADMIN
            </NavLink>
            {/* Login/Profile */}
          </div>

          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {user ? (
              <button
                onClick={handleLogOut}
                className="px-4 font-bold py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                LogOut
              </button>
            ) : (
              <NavLink to={"/login"}>
                <button className="px-4 font-bold py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                  Login
                </button>
              </NavLink>
            )}
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {menuOpen && (
          <div className="md:hidden space-y-2 px-4 pb-4">
            <NavLink
              to={"/"}
              className="block text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              HOME
            </NavLink>
            <NavLink
              to={"/addCoffee"}
              className="block text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              ADD COFFEE
            </NavLink>

            <NavLink
              to={"/coffee"}
              className="block text-gray-600 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
            >
              ADMIN
            </NavLink>
            <NavLink to={"/login"}>
              <button className="px-4  py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Login
              </button>
            </NavLink>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:ring focus:ring-blue-500 focus:outline-none dark:bg-gray-900 dark:text-gray-200"
            />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
