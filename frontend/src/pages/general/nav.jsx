import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SITE_CONFIG } from "../../config/site_config";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("studentToken");
    setIsLoggedIn(!!token);
  }, []);

  const logout = () => {
    localStorage.removeItem("studentToken");
    localStorage.removeItem("studentInfo");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Branding */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-900">
            {SITE_CONFIG.societyName}
          </span>
          <span className="hidden sm:block text-sm text-gray-600">
            {SITE_CONFIG.collegeName}
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
          <li>
            <Link
              to="/community"
              className="hover:text-blue-900 transition"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              to="/events"
              className="hover:text-blue-900 transition"
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="hover:text-blue-900 transition"
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="hover:text-blue-900 transition"
            >
              Admin
            </Link>
          </li>
        </ul>

        {/* Auth Section */}
        <div className="hidden md:flex space-x-4 items-center">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                className="px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition"
              >
                Profile
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu (placeholder for extension) */}
        <div className="md:hidden">
          <button className="text-blue-900 text-2xl">☰</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
