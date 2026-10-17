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

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".legacy-item");
      gsap.set(items, { autoAlpha: 0, y: 20 });

      // each item reveals when IT reaches the viewport (works for map overlay + stacked cards)
      ScrollTrigger.batch(items, {
        start: "top 90%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.4,
            ease: "power2.out",
            overwrite: true,
          }),
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="my-16 w-full bg-black p-4 text-white sm:p-5 lg:my-28"
    >
      <h1 className="mb-6 mt-3 text-center text-3xl sm:text-4xl lg:mb-8 lg:text-5xl">
        میراث کورش
      </h1>

      <div className="relative mx-auto w-full max-w-5xl">
        <Image
          src={NeonMap}
          alt="نقشه ایران در دوران هخامنشی"
          className="h-auto w-full drop-shadow-xl drop-shadow-amber-500 max-lg:block lg:block max-sm:hidden sm:hidden"
          priority
        />

        {/* < lg: cards below the map (always readable, no hover needed)
            >= lg: items overlaid on the map with hover descriptions */}
        <div className="mt-6 grid gap-3 md:grid-cols-3 lg:absolute lg:inset-0 lg:mt-0 lg:block">
          {legacy.map((item, index) => (
            <div
              key={item.id}
              className="legacy-item group w-full lg:absolute lg:top-[var(--t)] lg:right-[var(--r)] lg:w-56"
              style={
                {
                  "--t": `${15 + index * 20}%`,
                  "--r": `${5 + (index % 2) * 35}%`,
                } as React.CSSProperties
              }
            >
              <div className="relative z-10 flex items-center justify-between gap-3 rounded-xl border border-yellow-300/50 bg-yellow-500/90 p-3 text-black shadow-lg transition-colors duration-300 group-hover:bg-yellow-400">
                <h5 className="text-sm font-bold">{item.title}</h5>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 object-contain"
                />
              </div>

              <div className="grid grid-rows-[1fr] opacity-100 transition-all duration-300 ease-in-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
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