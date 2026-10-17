"use client";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Transition from "./Transition";
const Banner = () => {
  useGSAP(() => {
    gsap.set(".text1", {
      opacity: 0,
    });
    gsap.to(".text1", {
      opacity: 1,
      duration: 1.5,
      stagger: 1,
      delay: 0.5,
    });
  
  });
  return (
    <section>
      <div className=" w-full h-screen BannerComponent">
        <div className="backG z-30 w-full h-full bg-gradient-to-b from-transparent via-transparent to-yellow-900 p-10">
          <div className="flex flex-col gap-7 mt-[15%]">
            <h1 className="text-white text-8xl max-lg:text-right lg:text-right text1 max-sm:text-center sm:text-center">کورش بزرگ</h1>
            <p className="text-2xl max-lg:text-right lg:text-right text1 max-sm:text-center sm:text-center text1">شاهنشاه ایران زمین</p>
          </div>
        </div>
      </div>
      {/* <Transition /> */}
    </section>
  );
};

export default Banner;
