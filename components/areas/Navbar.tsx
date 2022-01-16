import React, { useState } from "react";
import Menu from "./main/Menu";

export default function Navbar() {
  const [isVisible, setVisibility] = useState(false);

  const toggleMenu = () => {
    setVisibility(!isVisible);

    return () => {};
  };

  return (
    <nav className="text-right">
      <div className="flex justify-between items-center">
        {Header()}
        <div className="px-4 cursor-pointer md:hidden" onClick={toggleMenu}>
          {Burger()}
        </div>
      </div>
      <div className={`mt-6 md:block ${!isVisible ? "hidden" : ""}`}>
        <Menu />
      </div>
    </nav>
  );

  function Header() {
    return (
      <h1 className="font-bold uppercase p-4 border-b border-gray-100">
        <a href="/" className="hover:text-gray-700 tracking-widest">
          Food Ninja
        </a>
      </h1>
    );
  }

  function Burger() {
    return (
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    );
  }
}
