"use client";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Transition = () => {
  useGSAP(() => {
    gsap.set(".transition", {
      opacity: 0,
      x:-1600
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".transition",
        start: "10px center",
        end: "300px center",
        markers: true,
        toggleActions: "play reverse play reverse",
      
      },
    });
    tl.fromTo(
      ".transition",
      {
        opacity: 0,
        duration: 0.3,
        delay: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
        // delay: 0.5,
        x:0
      },
    );
  }, []);
  return (
    <div className="absolute w-full h-screen z-20">
      <div className=" absolute w-full h-screen bg-yellow-500 transition">
        
      </div>
    </div>
  );
};

export default Transition;
