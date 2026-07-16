"use client"
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const Outro = () => {
 useGSAP(() => {
  const mm = gsap.matchMedia();

  // حالت دسکتاپ
  mm.add("(min-width: 1024px)", () => {
    gsap.set(".texts", { backgroundColor: "transparent" });
    gsap.set(".flag", { width: 0, height: "25rem" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outroProvider",
        start: "top center",
        end: "bottom center",
        // markers: true,
        toggleActions: "play none play none",
      },
    });

    tl.to(".texts", {
      backgroundColor: "white",
      duration: 1,
    });

    tl.to(".flag", {
      width: "55%",
      duration: 1,
    });
  });

  // حالت تبلت
  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    gsap.set(".texts", { backgroundColor: "transparent" });
    gsap.set(".flag", { width: 0, height: "20rem" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outroProvider",
        start: "top 70%",
        end: "bottom center",
        toggleActions: "play none play none",
      },
    });

    tl.to(".texts", {
      backgroundColor: "white",
      duration: 0.8,
    });

    tl.to(".flag", {
      width: "70%", // بزرگ‌تر برای تبلت
      duration: 0.8,
    });
  });

  // حالت موبایل
  mm.add("(max-width: 767px)", () => {
    gsap.set(".texts", { backgroundColor: "transparent" });
    gsap.set(".flag", { width: 0, height: "12rem" });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outroProvider",
        start: "top 80%",
        end: "bottom center",
        toggleActions: "play none play none",
      },
    });

    tl.to(".texts", {
      backgroundColor: "white",
      duration: 0.6,
    });

    tl.to(".flag", {
      width: "100%", // تقریبا فول عرض برای موبایل
      duration: 0.6,
    });
  });
});
  return (
    <div className="outroProvider RTL">
      <h1 className="p-5 text-2xl text-center border-y-4 border-black bg-gradient-to-r from-[#A77F60] to-[#9A8678]">
        بزرگداشت کورش
      </h1>
      <div className="absolute z-20 RTL lg:flex lg:justify-between max-sm:flex max-sm:flex-col max-sm:items-center px-10 w-full mt-20">
        <div className="lg:w-[35%] max-sm:w-full flex flex-col gap-8">
          <h1 className="text-3xl p-8 texts text-center">۷ آبان - ۲۹ اکتبر</h1>
          <p className="lg:text-5xl max-sm:text-4xl p-12 texts text-center">
            روز بزرگداشت <span className="font-bold text-red-600">کورش</span>{" "}
            بزرگ
          </p>
          <p className="text-3xl p-7 texts text-center">
            پادشاه بزرگ ایران زمین
          </p>
        </div>
      </div>
        <div className="bgOutro h-[100vh] blur-sm z-10"></div>
    </div>
  );
};

export default Outro;