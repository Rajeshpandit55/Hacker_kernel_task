import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [products, setProducts] = useState([]);
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  // Load products from localStorage on initial render
  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  }, []);


  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          ProductApp
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link to="/" className="text-white hover:text-blue-200 border border-white px-4 py-2 rounded-md">
              Home
            </Link>
          </li>

          {!userToken ? (
            // Links for unauthenticated users
            <>
              <li>
                <Link
                  to="/login"
                  className="text-white hover:text-blue-200 transition border border-white px-4 py-2 rounded-md"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-white hover:text-blue-200 transition border border-white px-4 py-2 rounded-md"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            // Links for authenticated users
            <>
              {/* Add Product Button */}
              <li>
                <Link
                  to="/add-product"
                  className="text-white hover:text-blue-200 transition border border-white px-4 py-2 rounded-md"
                >
                  Add Product
                </Link>
              </li>

              {/* Logout Button */}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-red-800 hover:text-red-300 transition border border-white px-4 py-2 rounded-md"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>   
      </div>
    </nav>
  );
};

export default Navbar;
