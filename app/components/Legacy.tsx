"use client";

import Image from "next/image";
import Tablet from "../assets/tablet.webp";
import { legacyData } from "../data/datas";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  useGSAP(() => {
    gsap.set(".tablets", { opacity: 0 });
    gsap.set(".tabletContent", { opacity: 0, scale: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tabletsProvider",
        start: "top center",
        end: "100% center",
        toggleActions: "play none none none",
      },
    });

    tl.to(".tablets", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.5,
    });

    tl.to(
      ".tabletContent",
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.3,
      },
      "-=0.3",
    );
  });

  return (
    <div className="bgLegacy min-h-screen tabletsProvider">
      <h1
        className="
          p-4
          sm:p-5
          text-xl
          sm:text-2xl
          text-center
          border-y-4
          border-black
          bg-gradient-to-r
          from-[#A77F60]
          to-[#9A8678]
        "
      >
        میراث کورش بزرگ
      </h1>

      <section
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-8
          md:gap-10
          p-5
          md:p-10
        "
      >
        {legacyData.map((item, index) => (
          <div
            key={index}
            className="
              tablets
              relative
              flex
              justify-center
              items-center
              w-full
            "
          >
            {/* Tablet Background */}
            <Image
              src={Tablet}
              alt="tablet"
              className="
                w-[95%]
                sm:w-[85%]
                md:w-[90%]
                lg:w-[85%]
              "
            />

            {/* Content */}
            <div
              className="
                tabletContent
                absolute
                flex
                flex-col
                sm:flex-row
                justify-center
                items-center
                gap-4
                sm:gap-8
                w-[65%]
                sm:w-[70%]
                md:w-fit
                RTL
              "
            >
              <div className="text-center sm:text-right">
                <h3
                  className="
                    text-lg
                    sm:text-xl
                    max-sm:text-sm
                    KharazmFont
                    "
                    >
                  {item?.title}
                </h3>

                <p
                  className="
                  KharazmFont
                  text-xs
                    sm:text-sm
                    max-sm:text-sm
                    w-full
                    sm:w-40
                  "
                >
                  {item?.description}
                </p>
              </div>

              <Image
                src={item?.image}
                alt="tablet item"
                width={200}
                height={200}
                className="
                  tabletImages
                  w-24
                  sm:w-36
                  md:w-48
                "
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Legacy;
