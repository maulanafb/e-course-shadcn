import FormatRupiah from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseItem = () => {
  return (
    <Link
      href={`/course-detail/1`}
      className="flex justify-center items-center"
    >
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
              {FormatRupiah(400000)}
            </span>
            <span className="text-[#fa5d29] font-bold tracking-tighter">
              {FormatRupiah(200000)}
            </span>
          </div>
        </div>

        {/* price  */}
        {/* enrol  */}
      </div>
    </Link>
  );
};

export default CourseItem;
