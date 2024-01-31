import React from "react";
import HeroAnim from "./HeroAnim";

const Header = () => {
  return (
    <section className="flex flex-col py-4 container max-w-[1024px]">
      <div className="flex flex-col items-center">
        <h1 className="text-[66px] font-semibold tracking-tighter text-center leading-[70px]">
          Elevate Your Skills.
          <br /> Unlock Your Potential
        </h1>
        <div className="text-[24px] font-[500] text-[#050505] tracking-tighter text-center md:py-2">
          Embark on Your Future-Ready Journey: Learn High-Demand IT Skills
          Today.
        </div>
        <div className="flex items-center space-x-4 py-4">
          <div className="px-4 py-1 bg-[#050505] rounded-md text-white cursor-pointer hover:bg-gray-900 transition-all duration-300">
            Unlock your skills →
          </div>
          <div className="text-[#0a85d1] cursor-pointer hover:underline hover:text-[#0c3e5e] transition-all duration-300">
            <a href="https://roadmap.sh" target="_blank">
              Visit Roadmap →
            </a>
          </div>
        </div>
        {/* <Image src={"/g25.svg"} height={10} width={800} alt="home-hero" /> */}
        <HeroAnim />
      </div>
    </section>
  );
};

export default Header;
