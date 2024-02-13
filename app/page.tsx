"use client";
import Header from "@/components/shared/Header";
import HomeBody from "@/components/shared/HomeBody";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col max-w-[1124px] ">
      <Header />
      <HomeBody />
    </main>
  );
}
