"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { SearchDialog } from "./SearchDialog";
import { NavbarItem } from "./NavbarItem";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b container text-gray-800 bg-opacity-30 backdrop-blur-md sticky top-0 left-0 right-0 z-50 flex items-center justify-between p-3 bg-white">
      <div className="flex space-x-6 justify-center items-center">
        <Link href={"/"} className="font-semibold text-lg">
          CodingCraft
        </Link>
        <div
          className={`lg:flex items-center space-x-3 font-[500] tracking-tight text-[14px] ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <NavbarItem />
          <div className="flex space-x-6">
            <a href="#" className="">
              Contact
            </a>
            <a href="#" className="">
              Support
            </a>
          </div>
        </div>
      </div>

      <div className="hidden  lg:flex space-x-6 items-center  text-sm">
        <SearchDialog />
        <Link href="/auth">Log in</Link>
        <Link
          href="/auth"
          className="px-4 py-1 bg-black rounded-md font-semibold text-white hover:bg-gray-800 transition-all duration-300"
        >
          Get Started Free <span className="font-bold text-[15px]">→</span>
        </Link>
      </div>

      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className=" focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
