"use client"
import React from "react";
import Banner from "../assets/Tomb.webp";
import Sculpture from "../assets/1lfup1bl.webp";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const HeroSection = () => {
  useGSAP(() => {
    gsap.set(".text2", {
      x: "300px",
      opacity: 0,
    });

    gsap.to(".text2", {
      opacity: 1,
      x: "0",
      duration: 1.5,
    });

    gsap.set(".text1", {
      x: "-300px",
      opacity: 0,
    });

    gsap.to(".text1", {
      opacity: 1,
      x: "0",
      duration: 1.5,
    });

    gsap.fromTo(
      ".sculpture",
      {
        filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.9))",
        opacity: 1,
      },
      {
        filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.1))",
        opacity: 0.7,
        duration: 1.7,
        yoyo: true,
        repeat: -1,
      },
    );
  });

  return (
    <div className="relative w-full lg:min-h-[500px] md:min-h-screen overflow-hidden bg-slate-50">
      {/* Background */}
      <Image
        alt="banner"
        src={Banner}
        className=" inset-0 w-full lg:h-full object-cover"
      />

      {/* Sculpture */}
      <Image
        alt="Sculpture"
        src={Sculpture}
        className="
        max-sm:hidden
        sm:hidden
        md:block
        lg:block
          absolute 
          sculpture
          w-[65%]
          md:w-[40%]
          lg:w-[35%]
          top-[80px]
          md:top-[28px]
          left-1/2
          -translate-x-1/2
          md:left-0
          md:translate-x-0
          
        "
      />

      {/* Text */}
      <div
        className="
          absolute 
          top-32
          sm:top-40
          md:top-40
          w-full
          flex
          justify-center
        "
      >
        <div className="flex flex-col items-center lg:translate-y-0 md:translate-y-0 max-sm:translate-y-[-90px] gap-4 sm:gap-8">
          <h1
            className="
              text2
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              text-amber-500
              text-center
              [text-shadow:_0_2px_4px_rgb(0,0,0)]
            "
          >
            کورش بزرگ
          </h1>

          <h1
            className="
              text1
              PersianFont
              text-xl
              sm:text-2xl
              md:text-3xl
              text-white
              text-center
              [text-shadow:_0_2px_4px_rgb(0,0,0)]
            "
          >
            koorosh bozorg
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;