import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/shared/Navbar";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/shared/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodingCraft",
  description:
    "Embark on Your Future-Ready Journey: Learn High-Demand IT Skills Today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#f8f8f8]`}
        style={{ scrollBehavior: "smooth" }}
      >
        <Navbar />
        <NextTopLoader />
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
