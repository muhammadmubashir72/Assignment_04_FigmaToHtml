// 
import React from "react";
import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="bg-FooterBackground h-auto py-6 flex flex-col items-center justify-center space-y-6  mt-60 md:mt-[5px]">
      {/* Social Media Links */}
      <div className="flex space-x-5 ">
        <Link href={"#"} aria-label="Facebook">
          <FaFacebookSquare className="w-[30px] h-[30px] hover:text-blue-700 transition duration-300" />
        </Link>
        <Link href={"#"} aria-label="Instagram">
          <FaInstagram className="w-[30px] h-[30px] hover:text-pink-500 transition duration-300" />
        </Link>
        <Link href={"#"} aria-label="Twitter">
          <FaTwitter className="w-[30px] h-[30px] hover:text-blue-400 transition duration-300" />
        </Link>
        <Link href={"#"} aria-label="LinkedIn">
          <FaLinkedin className="w-[30px] h-[30px] hover:text-blue-600 transition duration-300" />
        </Link>
      </div>

      {/* Copyright Text */}
      <p
        className={`${heebo.className} text-center font-medium text-[16px] md:text-[22px] text-black`}
      >
        Copyright ©2020 All rights reserved
      </p>
    </div>
  );
}
