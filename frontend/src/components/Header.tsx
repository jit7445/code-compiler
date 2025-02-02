import React from 'react';
import DarkModeSwitch from './DarkModeSwitch'; // Assuming you have a DarkModeSwitch component

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 shadow-lg">
      {/** Logo Section */}
      <div className="text-white text-2xl font-bold">
        Codemining
      </div>

      {/** Navigation Links */}
      <nav className="flex items-center gap-6">
        <a href="#home" className="text-gray-300 hover:text-white">
          Home
        </a>
        <a href="#about" className="text-gray-300 hover:text-white">
          About
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white">
          Contact
        </a>
      </nav>

      {/** Dark Mode Switch */}
      <div className="flex items-center">
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
