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
            className="font-bold text-lg  px-2 py-1 rounded hover:bg-[#e6e8eb80] hover:text-[#5cc081] text-[#16a34a] transition-all duration-200"
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
          className="lg:hidden font-bold text-lg  px-2 py-1 rounded hover:bg-[#e6e8eb80] hover:text-[#5cc081] text-[#16a34a] transition-all duration-200"
        >
          <Image src={"/logo-mobile.png"} width={35} height={35} alt="logo" />
        </Link>

        <div
          onClick={() => setIsMenuAccountOpen(!isMenuAccountOpen)}
          className="flex justify-center items-center  p-2 lg:hidden rounded-lg"
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
            isMenuOpen ? "bg-white -bottom-0 shadow-lg" : "-bottom-full"
          } duration-500 h-[80%] w-screen z-10 fixed rounded-t-[35px] gap-7`}
        >
          <div
            className="flex justify-end mb-5"
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

          {/* Place other menu items here */}

          <div className="flex flex-col tracking-tighter gap-4 ">
            <h1 className="font-semibold tracking-tighter">Development</h1>
            <div className="flex justify-between">
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white border-[1px] rounded-xl p-4">
                Fullstack
              </div>
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white  border-[1px] rounded-xl p-4">
                FrontEnd
              </div>
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white border-[1px] rounded-xl p-4">
                BackEnd
              </div>
            </div>
          </div>

          <div className="flex flex-col tracking-tighter gap-4">
            <h1 className="font-semibold tracking-tighter">Courses</h1>
            <div className="flex justify-between">
              <Link
                href={"/courses"}
                className="flex flex-col bg-[#e6e8eb80] hover:bg-white border-[1px] rounded-xl p-4"
              >
                All Courses
              </Link>
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white border-[1px] rounded-xl p-4">
                Website
              </div>
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white  border-[1px] rounded-xl p-4">
                Mobile
              </div>
            </div>
          </div>

          <div className="flex flex-col tracking-tighter gap-4">
            <h1 className="font-semibold tracking-tighter">Events</h1>
            <div className="flex justify-between">
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white border-[1px] rounded-xl p-4">
                Online
              </div>
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white  border-[1px] rounded-xl p-4">
                Offline
              </div>
              <div className="flex flex-col bg-[#e6e8eb80] hover:bg-white border-[1px] rounded-xl p-4">
                Collaboration
              </div>
            </div>
          </div>
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
