import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <section className="flex flex-col py-6 md:py-4  max-w-[1024px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[34px] md:text-[66px] font-semibold tracking-tighter text-center leading-[40px] md:leading-[70px]">
          Elevate Your Skills.
          <br className="hidden md:block" /> Unlock Your Potential
        </h1>
        <div className="text-[24px] font-[500] text-[#050505] tracking-tighter text-center md:py-2">
          Embark on Your Future-Ready Journey: Learn High-Demand IT Skills
          Today.
        </div>
        <div className="flex flex-col justify-center md:flex-row items-center space-x-4 py-4">
          <Link
            href="/courses"
            className="px-4 py-1 bg-primary rounded-md text-white cursor-pointer hover:bg-gray-900 transition-all duration-300"
          >
            Unlock skills →
          </Link>
          <div className="text-primary cursor-pointer hover:underline hover:text-[#0c3e5e] transition-all duration-300">
            <a href="https://roadmap.sh" target="_blank">
              Visit Roadmap →
            </a>
          </div>
        </div>
        <Image src={"/g77.svg"} height={10} width={800} alt="home-hero" />
      </div>
    </section>
  );
};

export default Header;
