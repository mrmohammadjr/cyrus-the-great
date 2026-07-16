"use client"
import React, { useRef } from "react";
import { respectData } from "../data/datas";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

// 🔹 Type
type RespectItem = {
  id: number | string;
  name: string;
  job: string;
  comment: string;
  photo: string;
};

const Respect: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      cardsRef.current.forEach((el, index) => {
        if (!el) return;

        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 60%",
              scrub: 1, // 👈 smooth scroll-based animation
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef } // ✅ very important
  );

  return (
    <div
      ref={containerRef}
      className="bg-gradient-to-r from-[#F3E4C9] via-[#BFA28C] to-[#896540] min-h-screen RTL pb-10"
    >
      {/* Header */}
      <h1 className="p-6 text-2xl text-center border-y-4 border-black bg-gradient-to-r from-[#A77F60] to-[#9A8678] shadow-md">
        سخنان فیلسوف‌ها و مورخان درباره کورش بزرگ
      </h1>

      {/* Cards */}
      <section className="max-w-6xl mx-auto mt-16 flex flex-col gap-10 px-4">
        {(respectData as RespectItem[]).map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="flex flex-col md:flex-row items-center gap-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.03]"
          >
            {/* Image */}
            <Image
              src={item.photo}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-xl border-4 border-zinc-400 shadow-md"
            />

            {/* Content */}
            <div className="text-center md:text-right space-y-2">
              <h3 className="text-xl font-bold KharazmFont">
                {item.name}
              </h3>
              <p className="text-gray-600 KharazmFont">
                {item.job}
              </p>
              <p className="text-gray-800 leading-relaxed KharazmFont">
                {item.comment}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Respect;
