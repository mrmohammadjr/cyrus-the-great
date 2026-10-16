"use client";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Celebration = () => {
  useGSAP(() => {
    gsap.from(".kingdom-image", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
    gsap.fromTo(
      ".CelebrationComponent",
      {
        y: 10,
      },
      {
        y: 0,
        duration: 1.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      },
    );
     gsap.fromTo(
      ".name",
      {
        color: "black",
      },
      {
        color: "yellow",
        duration: 1,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      },
    );
  });
  return (
    <div className=" w-full h-screen my-14 flex justify-center">
      <div className="bg-white w-[72.55%] shadow-xl/55 shadow-white m-10 rounded-4xl CelebrationComponent">
        <div className=" w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/75 rounded-4xl flex justify-between p-10">
          <p className="bg-white text-black h-fit p-3">
            روز بزرگداشت <span className="name text-yellow-500">کورش</span> بزرگ
          </p>
          <p className="bg-white text-black h-fit p-3">
            هفتم آبان (بیست و نهم اکتبر)
          </p>
        </div>
      </div>
      {/* <Image alt="2500" src={Celebrations} className=' ' /> */}
    </div>
  );
};

export default Celebration;
