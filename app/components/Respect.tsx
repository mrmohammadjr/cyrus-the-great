"use client";
import React from "react";
import { respectData } from "../data/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Respect = () => {
  useGSAP(() => {
    // one trigger per card so every card animates when IT is on screen
    gsap.utils.toArray<HTMLElement>(".box").forEach((box) => {
      gsap.fromTo(
        box,
        { x: "15%", opacity: 0.3 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: box,
            start: "top 85%",
            toggleActions: "play none play none",
          },
        },
      );
    });
  });

  return (
    <div className="my-16 w-full bg-black px-4 py-10 sm:px-6 md:my-32 md:px-10 lg:my-56">
      <div className="flex flex-col items-center gap-6 overflow-hidden md:gap-10">
        {respectData.map((item) => (
          <div
            key={item.id}
            className="box flex w-full flex-col-reverse items-center gap-4 rounded-3xl bg-gray-800/50 p-5 sm:flex-row sm:justify-end sm:p-7 md:w-[90%] lg:w-[75%]"
          >
            <div className="flex flex-col items-end gap-3 overflow-hidden sm:gap-5 sm:pr-5">
              <h2 className="text-right text-yellow-500">{item.name}</h2>
              <p className="text-right text-sm text-yellow-500 md:text-base">{item.job}</p>
              <p className="text-right text-sm leading-7 md:text-base md:leading-8">
                {item.comment}
              </p>
            </div>
            <Image
              alt={item.name}
              src={item.photo}
              className="w-20 shrink-0 border-4 border-yellow-950 sm:w-24 md:w-28"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Respect;