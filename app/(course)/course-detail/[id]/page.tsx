import { Button } from "@/components/ui/button";
import FormatRupiah from "@/lib/formatter";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CourseDetail = () => {
  return (
    <section className="flex flex-col mx-auto">
      <div className="flex mt-10 w-[1240px] text-[14px] font-[400] mx-auto hover:text-gray-400 duration-200">
        <Link href="/courses" className="flex gap-2 items-center">
          <ArrowLeft /> <span>Back to Courses</span>
        </Link>
      </div>
      {/* hero  */}
      <div className="grid grid-cols-2 gap-10 mx-auto max-w-[1240px] py-10">
        {/* left  */}
        <div className="flex flex-col gap-4">
          <h1 className="md:text-start text-[60px] font-[600] text-[#050505] leading-[50px] tracking-tighter text-center md:py-2">
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
            className={`max-w-[345px] font-[600] text-[18px] tracking-tighter h-[40px]`}
          >
            Buy Course
          </Button>
        </div>
        <div>
          <Image
            src={"/course1.jpg"}
            className="rounded-[20px]"
            alt="course"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseDetail;
