"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Outro = () => {
  useGSAP(() => {
    gsap.set(".text", { color: "black" });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outro",
        start: "top 90%", // the old "-1200% center" depends on element height, which changes on mobile
        end: "bottom center",
        toggleActions: "play none play none",
      },
    });
    tl.to(".text", { color: "yellow", duration: 1, stagger: 1 });
  });

  return (
    <section>
      <div dir="rtl" className="outro my-12 flex flex-wrap justify-center gap-x-2 gap-y-3 px-4 text-center text-base sm:text-lg md:my-20 md:text-xl lg:justify-around lg:text-2xl">
        <p className="text">کورش</p>
        <p>،</p>
        <p className="text">شاه بزرگ</p>
        <p>،</p>
        <p className="text">شاه شاهان</p>
        <p>،</p>
        <p className="text">آزاد مرد آزاد مردان</p>
        <p>و</p>
        <p className="text">قهرمان تاریخ ایران و جهان</p>
        <p>،</p>
        <p className="text">آسوده بخواب</p>
        <p>،</p>
        <p className="text">زیرا که ما بیداریم</p>
        <p>و</p>
        <p className="text">همواره بیدار خواهیم بود</p>
      </div>

      <footer className="mt-auto bg-black px-6 py-8 text-gray-400">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <p>
            طراح و توسعه دهنده :
            <Link
              className="text-white hover:text-green-600"
              href={"https://mr-mohammad.javadrma-2017.workers.dev/"}
            >
              محمد جواد رسولی
            </Link>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Outro;