import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-green">
          Fathul <span className="text-dark">Arifin</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-green">
            Home
          </a>
          <a href="/resume" className="text-gray-600 hover:text-green">
            Resume
          </a>
          <a href="#work" className="text-gray-600 hover:text-green">
            Work
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green">
            Contact
          </a>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-dark hover:text-green focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="#home"
            className="block text-gray-600 hover:text-green px-4 py-2"
          >
            Home
          </a>
          <a
            href="#resume"
            className="block text-gray-600 hover:text-green px-4 py-2"
          >
            Resume
          </a>
          <a
            href="#work"
            className="block text-gray-600 hover:text-green px-4 py-2"
          >
            Work
          </a>
          <a
            href="#contact"
            className="block text-gray-600 hover:text-green px-4 py-2"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
