import {
  Building2,
  Contact,
  Contact2,
  Youtube,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2 border-black ">
      <div className="container flex flex-row mx-auto justify-between py-5 max-w-[1224px]">
        <div className="font-semibold">
          Build By{" "}
          <a
            href="https://www.maulanafb.my.id/"
            target="_blank"
            className="hover:text-blue-500 transition-all duration-300"
          >
            @MaulanaFb
          </a>
        </div>

        <div className="flex flex-col ">
          <h1 className="font-semibold pb-2 flex flex-row">
            <div>Company</div>
          </h1>
          <Link
            href=""
            className="flex flex-row hover:text-[#71717a] transition-all duration-300"
          >
            {/* <Building2 /> */}
            About
          </Link>
          <Link
            href=""
            className="flex hover:text-[#71717a] transition-all duration-300"
          >
            {/* <Contact2 /> */}
            Contact
          </Link>
          <Link
            href=""
            className="flex hover:text-[#71717a] transition-all duration-300"
          >
            Youtube
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Instagram
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Tiktok
          </Link>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-semibold pb-2">Learn Languages</h1>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            PHP
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Javascript
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Golang
          </Link>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-semibold pb-2">Resources</h1>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            E-Books
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Blogs
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Events
          </Link>
        </div>
        <div className="flex flex-col ">
          <h1 className="font-semibold pb-2">Useful Links</h1>
          <Link
            href="/"
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Privacy & Policy
          </Link>
          <Link
            href="/"
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Terms & Conditions
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            All Courses
          </Link>
          <Link
            href=""
            className="hover:text-[#71717a] transition-all duration-300"
          >
            Golang
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
