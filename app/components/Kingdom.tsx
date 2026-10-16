"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { events } from "../data/data";
gsap.registerPlugin(ScrollTrigger, useGSAP);



const Kingdom = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current!;
      const track = trackRef.current!;
      const count = events.length;

      // how far the track must travel (positive x = moves right, revealing panels to the left)
      const getDistance = () => track.scrollWidth - wrapper.offsetWidth;

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: () => "+=" + getDistance(),
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true, // recalc on resize
          snap: {
            snapTo: 1 / (count - 1),
            duration: { min: 0.2, max: 0.6 },
            ease: "power1.inOut",
          },
        },
      });

      tl.to(track, { x: () => getDistance() }, 0);
      tl.to(barRef.current, { scaleX: 1 }, 0);
    },
    { scope: wrapperRef },
  );

  return (
    <div className="w-full bg-gradient-to-b from-yellow-900 via-yellow-950 to-black text-white">
      {/* This element is pinned */}
      {/* <Statue /> */}
      <div
        ref={wrapperRef}
        className="relative h-screen w-full overflow-hidden"
        dir="rtl"
      >
        {/* Track: wider than the viewport, first panel starts on the right */}
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{ width: `${events.length * 100}%` }}
        >
          {events.map((e) => (
            <article
              key={e.year}
              className="flex justify-between items-center h-full shrink-0  px-10 md:px-24"
              style={{ width: `${100 / events.length}%` }}
            >
              <div className="flex flex-col justify-center gap-4">
                <h2 className="text-lg text-yellow-500">{e.year}</h2>
                <h3 className="text-4xl font-bold flex justify-start items-center gap-2">
                  {e.title}
                </h3>
                <p className="max-w-xl text-lg leading-8 text-white/80">
                  {e.text}
                </p>
              </div>
              {/* <Image src={e?.image} alt="Cyrus" className="w-64 kingdom-image" /> */}
            </article>
          ))}
        </div>

        {/* Progress bar (fills from right to left) */}
        <div
          className="absolute bottom-8 right-10 left-10 h-1 bg-white/10"
          aria-hidden="true"
        >
          <div
            ref={barRef}
            className="h-full origin-right scale-x-0 bg-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Kingdom;
