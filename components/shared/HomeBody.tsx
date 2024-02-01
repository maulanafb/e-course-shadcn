import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeBody = () => {
  function formatRupiah(amount: number): string {
    return amount.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[36px] font-semibold tracking-tighter text-start leading-[40px]">
          Unlock your potential <br /> with high demand skills.
        </h1>
        <div>
          <Link
            href=""
            className="bg-white px-4 py-1 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            All Courses →
          </Link>
        </div>
      </div>
      <div className="flex gap-4 mt-[70px] justify-center">
        <div className="flex flex-col  rounded-[20px] bg-[#fff] overflow-x-hidden w-[335px] shadow-sm">
          {/* image */}
          <Image
            src={"/course1.jpg"}
            className="rounded-t-[20px]"
            alt="course"
            width={353}
            height={255}
          />
          {/* description  */}
          <div className="flex px-3 py-4 border-b">
            <h1 className="text-[18px] font-semibold tracking-tighter ">
              Design Systems for Website using Figma
            </h1>
          </div>

          <div className="flex px-3 py-4 justify-between">
            <h1 className="text-[16px] font-semibold tracking-tighter ">
              <span className="font-medium">by</span> <span>Maulana Fb</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-[#8d8c8c] text-[14px] font-bold tracking-tighter line-through animate-blink">
                {formatRupiah(400000)}
              </span>
              <span className="text-[#fa5d29] font-bold tracking-tighter">
                {formatRupiah(200000)}
              </span>
            </div>
          </div>

          {/* price  */}
          {/* enrol  */}
        </div>
        <div className="flex flex-col  rounded-[20px] bg-[#fff] overflow-x-hidden w-[335px] shadow-sm">
          {/* image */}
          <Image
            src={"/course1.jpg"}
            className="rounded-t-[20px]"
            alt="course"
            width={353}
            height={255}
          />
          {/* description  */}
          <div className="flex px-3 py-4 border-b">
            <h1 className="text-[18px] font-semibold tracking-tighter ">
              Design Systems for Websites using Figma
            </h1>
          </div>

          <div className="flex px-3 py-4 justify-between">
            <h1 className="text-[16px] font-semibold tracking-tighter ">
              <span className="font-medium">by</span> <span>Maulana Fb</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-[#8d8c8c] text-[14px] font-bold tracking-tighter line-through animate-blink">
                {formatRupiah(400000)}
              </span>
              <span className="text-[#fa5d29] font-bold tracking-tighter">
                {formatRupiah(200000)}
              </span>
            </div>
          </div>

          {/* price  */}
          {/* enrol  */}
        </div>
        <div className="flex flex-col  rounded-[20px] bg-[#fff] overflow-x-hidden w-[335px] shadow-sm">
          {/* image */}
          <Image
            src={"/course1.jpg"}
            className="rounded-t-[20px]"
            alt="course"
            width={353}
            height={255}
          />
          {/* description  */}
          <div className="flex px-3 py-4 border-b">
            <h1 className="text-[18px] font-semibold tracking-tighter ">
              Design Systems for Websites using Figma
            </h1>
          </div>

          <div className="flex px-3 py-4 justify-between">
            <h1 className="text-[16px] font-semibold tracking-tighter ">
              <span className="font-medium">by</span> <span>Maulana Fb</span>
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-[#8d8c8c] text-[14px] font-bold tracking-tighter line-through animate-blink">
                {formatRupiah(400000)}
              </span>
              <span className="text-[#fa5d29] font-bold tracking-tighter">
                {formatRupiah(200000)}
              </span>
            </div>
          </div>

          {/* price  */}
          {/* enrol  */}
        </div>
      </div>
    </div>
  );
};

export default HomeBody;
