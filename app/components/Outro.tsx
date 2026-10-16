"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
const Outro = () => {
  useGSAP(() => {
    gsap.set(".text", {
      color: "black",
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outro",
        start: "-1200% center",
        end: "bottom center",
        // markers: true,
        toggleActions: "play none play none",
      },
    });
    tl.to(".text", {
      color: "yellow",
      duration: 1,
      stagger: 1,
    });
  });
  return (
    <section>
      <div className="flex justify-around outro my-20 RTL">
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
       <footer className="mt-auto bg-black text-gray-400 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        <div>
          <p>طراح و توسعه دهنده :<Link className="text-white hover:text-green-600" href={"https://mr-mohammad.javadrma-2017.workers.dev/"}>محمد جواد رسولی</Link></p>
        </div>
        
      </div>
    </footer>
    </section>
  );
};

export default Outro;
