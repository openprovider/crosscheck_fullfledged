// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl">Dashboard</h1>
      <div className="user-icon bg-gray-600 p-2 rounded-full cursor-pointer">
        {/* Placeholder for user icon */}
      </div>
    </nav>
  );
};

export default Navbar;
