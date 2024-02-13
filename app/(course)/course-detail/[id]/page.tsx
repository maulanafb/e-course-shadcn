import { Button } from "@/components/ui/button";
import FormatRupiah from "@/lib/formatter";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseDetail = () => {
  return (
    <section className="flex flex-col mx-auto px-3 md:px-0">
      <div className="flex mt-10 w-[1240px] md:mx-auto text-[14px] font-[400] duration-200">
        <Link
          href="/courses"
          className="flex shadow-sm hover:text-gray-400 bg-[#e6e8eb80] rounded-lg items-center px-2 py-1 tracking-tighter gap-2 "
        >
          <ArrowLeft /> <span>Back to Courses</span>
        </Link>
      </div>

      {/* hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-[1240px] py-10">
        {/* left */}
        <div className="md:order-last">
          <Image
            src={"/course1.jpg"}
            className="rounded-sm md:rounded-[20px] mx-auto md:mx-0"
            alt="course"
            width={1000}
            height={1000}
          />
        </div>
        <div className="md:order-first flex flex-col gap-4">
          <h1 className="md:text-start text-[30px] md:text-[60px] font-[600] text-[#050505] leading-[33px] md:leading-[55px] tracking-tighter md:py-2">
            Design Systems for Website using Figma
          </h1>
          <h2>
            <span>By</span>
            {"    "}
            <span className="text-[25px] font-[600]">Maulana Fb</span>
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-[#8d8c8c] text-[14px] font-bold tracking-tighter line-through animate-blink">
              {FormatRupiah(400000)}
            </span>
            <span className="text-[#fa5d29] font-bold tracking-tighter">
              {FormatRupiah(200000)}
            </span>
          </div>
          <Button
            variant={"default"}
            className={`max-w-[250px] md:max-w-[345px] font-[600] text-[18px] tracking-tighter h-[40px] `}
          >
            Buy Course
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
