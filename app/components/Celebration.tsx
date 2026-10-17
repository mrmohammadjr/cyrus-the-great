"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const labelBase = "h-fit bg-white p-2 text-xs text-black sm:p-3 sm:text-base";
// mobile: label sits centered, half on the box edge. md+: back to normal flow inside the overlay.
const labelMobileEdge =
  "absolute left-1/2 z-10 -translate-x-1/2 whitespace-nowrap " +
  "md:static md:translate-x-0 md:translate-y-0 md:whitespace-normal";

const Celebration = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".CelebrationComponent",
      { y: 10 },
      { y: 0, duration: 1.5, ease: "sine.inOut", yoyo: true, repeat: -1 },
    );
    gsap.fromTo(
      ".name",
      { color: "black" },
      { color: "yellow", duration: 1, ease: "sine.inOut", yoyo: true, repeat: -1 },
    );
  });

  return (
    <div className="my-14 flex w-full justify-center md:h-screen ">
      {/* mobile: same 16:9 proportions as the laptop version, md+: fills the screen height like before */}
      <div className="CelebrationComponent relative my-6 aspect-[16/9] w-[92%] rounded-4xl bg-white shadow-xl/55 shadow-white md:m-10 md:aspect-auto md:w-[72.55%]">
        <div className="flex h-full w-full justify-between rounded-4xl bg-gradient-to-b from-black/50 via-transparent to-black/75 md:flex-row md:p-10">
          <p className={`${labelBase} ${labelMobileEdge} top-0 -translate-y-1/2`}>
            روز بزرگداشت <span className="name text-yellow-500">کورش</span> بزرگ
          </p>
          <p className={`${labelBase} ${labelMobileEdge} bottom-0 translate-y-1/2`}>
            هفتم آبان (بیست و نهم اکتبر)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Celebration;