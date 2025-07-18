"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`relative bg-black z-50 group ${
        isMenuOpen ? "menu-open" : ""
      }`}
    >
      {/* Toggle Button */}
      <div
        className="w-16 h-16 flex items-center fixed right-5 lg:right-10 top-10 justify-center rounded-full bg-white shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
        onClick={toggleMenu}
      >
        {/* Menu Icon SVG */}
        <svg
          className={`w-6 h-6 transition-all duration-300 ${
            isMenuOpen
              ? "opacity-0 rotate-90"
              : "group-hover:opacity-0 group-hover:rotate-90"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        {/* Cross Icon SVG */}
        <svg
          className={`w-6 h-6 transition-all duration-300 fixed ${
            isMenuOpen
              ? "opacity-100 rotate-0"
              : "opacity-0 rotate-90 group-hover:opacity-100 group-hover:rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      {/* Menu Overlay */}
      <div
        className={`fixed z-50 right-5 top-28 lg:top-20  lg:right-28 w-80 bg-white rounded-xl p-6 shadow-2xl transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
        }`}
      >
        <div className="text-xs font-semibold mb-4">MENU</div>
        <ul className="flex flex-col gap-4 font-normal tracking-wide text-2xl">
          <Link
            href="/"
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/works"
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            WORKS
          </Link>
          <Link
            href="/exhibitions"
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            EXHIBITIONS
          </Link>
          <Link
            href="/thesis-supervision"
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            THESIS SUPERVISION
          </Link>

          <Link
            href="contact"
            className="cursor-pointer hover:text-gray-500"
            onClick={() => setIsMenuOpen(false)}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
