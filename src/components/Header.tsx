import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa"; // Import user circle icon
import { FaChevronDown } from "react-icons/fa"; // Import chevron down icon

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image
          src="/42GearsLogo.png"
          alt="42Gears Logo"
          width={120}
          height={30}
        />
      </div>

      {/* User and Logout Section */}
      <div className="flex items-center space-x-8">
        {/* Test User with Icon */}
        <div className="flex items-center space-x-2">
          <FaUserCircle size={24} />
          <span>Test User</span>
          <FaChevronDown size={16} /> {/* Arrow down icon */}
        </div>

        {/* Separator */}
        <div className="h-6 w-px bg-white"></div>

        {/* Logout Option */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            src="/icons/Logout_Arrow.svg"
            alt="Logout"
            width={20}
            height={20}
          />
          <span>Logout</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
