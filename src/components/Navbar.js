import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="font-semibold text-xl tracking-tight">My Portfolio</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-500 hover:border-gray-500">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-gray-500 mr-4">
            About
          </a>
          <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-gray-500 mr-4">
            Projects
          </a>
          <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 text-black font-medium hover:text-gray-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
