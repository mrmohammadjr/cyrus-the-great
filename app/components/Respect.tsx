"use client";
import React from "react";
import { respectData } from "../data/data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const Respect = () => {
  useGSAP(() => {
    gsap.set(".box", {
      x: "20%",
      opacity: 0.3,
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "bottom center",
        // markers: true,
        toggleActions: "play none play none",
      },
    });
    tl.to(".box", {
      x: 0,
      opacity: 1,
      duration:1,
      stagger:1
    });
  });
  return (
    <div className="bg-black my-56 w-full h-screen px-10">
      <div className="flex items-center flex-col gap-10  overflow-hidden ">
        {respectData.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/50 rounded-3xl w-[75%] flex justify-end items-center p-7 box"
          >
            <div className="flex flex-col items-end gap-5 pr-5  overflow-hidden ">
              <h2 className="text-right text-yellow-500">{item.name}</h2>
              <p className="text-right text-yellow-500">{item.job}</p>
              <p className="text-right">{item.comment}</p>
            </div>
            <Image
              alt="faces"
              src={item.photo}
              className="w-28 border-4 border-yellow-950"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Respect;
