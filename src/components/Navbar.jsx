import React from "react";
import { Settings } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full px-4 py-3 shadow-md bg-white flex items-center justify-between">
      <div className="w-6 h-6 md:w-10 md:h-10" />

      <div className="text-xl md:text-2xl font-bold text-center absolute left-1/2 transform -translate-x-1/2">
        LOGO
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Settings className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;