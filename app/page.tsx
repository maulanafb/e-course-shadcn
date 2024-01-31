"use client";
import Header from "@/components/shared/Header";
import HomeBody from "@/components/shared/HomeBody";

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col w-[1124px] ">
      <Header />
      <HomeBody />
    </main>
  );
}
