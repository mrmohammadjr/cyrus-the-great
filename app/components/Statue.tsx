"use client"
import React from 'react'
import gsap from "gsap";
import Cyrus from "../assets/cyrus-neon.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
const Statue = () => {
  useGSAP(
    () => {
      gsap.from(".kingdom-image", { opacity: 0, duration: 1, ease: "power2.out" });
      gsap.fromTo(
        ".kingdom-image",
        { filter: "drop-shadow(0 15px 40px rgb(255, 176, 0))" },
        {
          filter: "drop-shadow(0 15px 40px rgba(0,0,0,0.1))",
          duration: 1.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
      );
    },
    
  );
  return (
    <div className=' w-[23%] pl-8 px-5 bg-gradient-to-b from-black via-black to-yellow-950'>
        <Image src={Cyrus} alt="Cyrus" className="w-full kingdom-image" />
    </div>
  )
}

export default Statue