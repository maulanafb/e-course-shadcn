"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SearchDialog } from "./SearchDialog";
import { NavbarItem } from "./NavbarItem";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAccountOpen, setIsMenuAccountOpen] = useState(false);

  return (
    <>
      <nav className=" container text-gray-800 bg-opacity-30 backdrop-blur-md sticky top-0 left-0 right-0 z-50 flex items-center justify-between p-3 bg-white">
        <div className="hidden lg:flex space-x-6 justify-center items-center">
          <Link
            href={"/"}
            className="font-bold text-lg  px-2 py-1 rounded hover:bg-[#e6e8eb80] hover:text-[#5cc081] text-[#16a34a] transition-all duration-300"
          >
            CodingCraft
          </Link>

          <div
            className={`lg:flex items-center  font-[500] tracking-tight text-[14px] hidden `}
          >
            <NavbarItem />
            <div className="flex ">
              <a
                href=""
                className="hover:bg-[#e6e8eb80] px-4 py-2 rounded-md transition-all duration-300"
              >
                Contact
              </a>
              <a
                href=""
                className="hover:bg-[#e6e8eb80] px-4 py-2 rounded-md transition-all duration-300"
              >
                Support
              </a>
            </div>
          </div>
        </div>

        <div className="hidden  lg:flex space-x-6 items-center   text-sm">
          <SearchDialog />
          <Link href="/auth">Log in</Link>
          <Link
            href="/auth"
            className="px-4 py-1 bg-primary rounded-md font-semibold text-white hover:bg-gray-800 transition-all duration-300"
          >
            Get Started Free <span className="font-bold text-[15px]">→</span>
          </Link>
        </div>

        <div className="lg:hidden flex justify-center items-center bg-[#e6e8eb80] p-2 rounded-lg">
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
        <Link
          href={"/"}
          className="lg:hidden font-bold text-lg  px-2 py-1 rounded hover:bg-[#e6e8eb80] hover:text-[#5cc081] text-[#16a34a] transition-all duration-300"
        >
          <Image src={"/logo-mobile.png"} width={35} height={35} alt="logo" />
        </Link>

        <div
          onClick={() => setIsMenuAccountOpen(!isMenuAccountOpen)}
          className="flex justify-center items-center bg-[#e6e8eb80] p-2 lg:hidden rounded-lg"
        >
          <Image
            src={"/account.svg"}
            width={30}
            height={30}
            alt="logo"
            className="text-primary"
          />
        </div>
      </nav>
      <div className="relative">
        <div
          className={`lg:hidden flex flex-col  py-6 px-6 ${
            isMenuOpen ? "bg-[#e6e8eb] -bottom-0 shadow-lg" : "-bottom-full"
          } duration-500 h-[85%] w-screen z-10 fixed rounded-t-[35px]`}
        >
          <div
            className="flex justify-end "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
          </div>
          <span className="text-black text-2xl font-bold mb-4">
            Navbar Menu Mobiles
          </span>
          {/* Place other menu items here */}
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Close Menu
          </button>
        </div>

        {/* Backdrop Shadow */}
        {isMenuOpen && (
          <div
            className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-black opacity-50 duration-200"
            onClick={() => setIsMenuAccountOpen(false)}
          ></div>
        )}
      </div>
      <div className="relative">
        <div
          className={`lg:hidden flex flex-col  py-6 px-6 ${
            isMenuAccountOpen
              ? "bg-[#e6e8eb] -bottom-0 shadow-lg"
              : "-bottom-full"
          } duration-500 h-[85%] w-screen z-10 fixed rounded-t-[35px]`}
        >
          <div
            className="flex justify-end bg-[#e6e8eb80]"
            onClick={() => setIsMenuAccountOpen(!isMenuAccountOpen)}
          >
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
          </div>
          <span className="text-black text-2xl font-bold mb-4">
            Navbar Menu Account
          </span>
          {/* Place other menu items here */}
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
            onClick={() => setIsMenuAccountOpen(false)}
          >
            Close Menu
          </button>
        </div>

        {/* Backdrop Shadow */}
        {isMenuAccountOpen && (
          <div
            className="lg:hidden fixed top-0 left-0 w-screen h-screen bg-black opacity-50 duration-200"
            onClick={() => setIsMenuAccountOpen(false)}
          ></div>
        )}
      </div>
    </>
  );
};

export default Navbar;
