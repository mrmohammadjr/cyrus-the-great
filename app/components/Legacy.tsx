
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import NeonMap from "../assets/New_Neon.webp";
import { legacy } from "../data/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Legacy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(
        ".legacy-item"
      );

      // تمام آیتم‌ها ابتدا مخفی باشند
      gsap.set(items, {
        autoAlpha: 0,
        y: 20,
      });

      // ظاهر شدن آیتم‌ها به‌ترتیب
      gsap.to(items, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-black p-5 text-white my-28"
    >
      <h1 className="mt-5 mb-8 text-center text-5xl">
        میراث کورش
      </h1>

      {/* نقشه بدون انیمیشن */}
      <div className="relative mx-auto w-full max-w-5xl">
        <Image
          src={NeonMap}
          alt="نقشه ایران در دوران هخامنشی"
          className="h-auto w-full drop-shadow-xl drop-shadow-amber-500"
          priority
        />

        {/* آیتم‌ها روی نقشه */}
        <div
          ref={itemsRef}
          className="absolute inset-0"
        >
       
{legacy?.map((item, index) => (
  <div
    key={item.id}
    className="legacy-item group absolute w-56"
    style={{
      top: `${15 + index * 20}%`,
      right: `${5 + (index % 2) * 35}%`,
    }}
  >
    {/* Main item */}
    <div className="relative z-10 flex items-center justify-between gap-3 rounded-xl border border-yellow-300/50 bg-yellow-500/90 p-3 text-black shadow-lg transition-colors duration-300 group-hover:bg-yellow-400">
      <h5 className="text-sm font-bold">
        {item.title}
      </h5>

      <Image
        src={item.image}
        alt={item.title}
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 object-contain"
      />
    </div>

    {/* Description: appears on hover */}
    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
      <div className="overflow-hidden">
        <div className="mt-1 rounded-xl border border-yellow-500/40 bg-black/95 p-3 text-sm leading-6 text-yellow-100">
          {item.desc}
        </div>
      </div>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Legacy;
