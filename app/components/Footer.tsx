"use client"
import React from "react";

import react from "../assets/programing.png"
import typescript from "../assets/typescript.png"
import tailwind from "../assets/icons8-tailwind-css-480.png"
import gsap from "../assets/gsap.jpg"
import Image from "next/image";
const Footer:React.FC = () => {
  return (
    <div className="flex lg:justify-between max-sm:flex-col gap-5 items-center p-10 bg-gradient-to-br from-[#A77F60] to-[#9A8678]">
        <div className="flex justify-center gap-5 items-center">
           <h3> This Site Made By</h3>
           <Image src={react} className="w-10" alt="react" />
           <Image src={typescript} className="w-10" alt="typescript" />
           <Image src={tailwind} className="w-10" alt="tailwind" />
           <Image src={gsap} className="w-10 rounded-md" alt="gsap" />
        </div>
      <div className="mt-5 flex gap-5 justify-center items-center bg-black text-white w-fit p-2 rounded-2xl hover:gap-2 hover:text-purple-500 transition-all">
        <a href={"https://mrmohammadjr.github.io/portfolio-app/"}>Author</a>
      </div>
    </div>
  );
};

export default Footer;
