import FormatRupiah from "@/lib/formatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseItem from "./CourseItem";

// async function getProducts() {
//   const res = await fetch(`https://fakestoreapi.com/products`);
//   return res.json();
// }

const HomeBody = async () => {
  // const productData = await getProducts();
  // console.log(productData[2]);
  return (
    <div className="py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-[36px] font-semibold tracking-tighter text-start leading-[40px]">
          Unlock your potential <br /> with high demand skills.
        </h1>
        <div>
          <Link
            href="/courses"
            className="bg-primary px-4 py-1 text-background rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
          >
            All Courses →
          </Link>
        </div>
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[70px] justify-center">
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </div>
  );
};

export default HomeBody;
