"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Cyrus from "../assets/cyrus-neon.webp";
import Cylinder from "../assets/Cyrus_Cylinder.webp";
import Faults from "../assets/Nabonidus's_faults.webp";

import Image from "next/image";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const Docs = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.set(".Cylinder", { opacity: 0, x: -630 });
    gsap.set(".Faults", { opacity: 0, x: 630 });

    // باکس‌ها اول از بالا بسته‌اند (فقط از پایین کلیپ شده‌اند)
    gsap.set(".textBox", {
      clipPath: "inset(-40px -40px 100% -40px)",
      opacity: 0,
    });

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".DocsProvider",
        start: "top center",
        end: "100% center",
        toggleActions: "play none none none",
      },
    });

    tl.to(".Cylinder", { opacity: 1, x: -50, duration: 1 })
      .to(".Faults", { opacity: 1, x: 50, duration: 1 })
      // بعد از ظاهر شدن تصاویر، باکس‌ها از بالا به پایین باز می‌شوند
      .to(".textBox", {
        clipPath: "inset(-40px -40px -40px -40px)",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
      });
  });

  return (
    <section ref={wrapperRef} className="bg-black p-3 w-full DocsProvider">
      <div className="flex justify-between w-full">
        <div className="w-full flex flex-col items-center">
          <Image
            src={Faults}
            alt="Faults"
            className="w-[30%] Faults mt-20 relative z-10"
          />
          <span
            className="textBox block w-[75%] p-10 text-right ml-[20%] mb-20 -mt-10 relative z-0
                       bg-black border-2 border-yellow-300/60 rounded-md
                       shadow-[0_0_25px_6px_rgba(253,224,71,0.55),inset_0_0_25px_6px_rgba(253,224,71,0.35)]"
          >
            سال ششم (۵۵۰/ ۵۴۹)
شاه آسـتـیـاگ (در متن بابلی: ایـشْـتـومِـگـو) سپاهش را فراخواند. آنان بسوی کورش (در متن بابلی: کـورَش)، شاه اَنـشـان به پیش تاختند تا به نبردی پیروزمندانه با او در آیند. اما سپاهیان آسـتـیـاگ بر شاه خود شوریدند. او را به زنجیر کشیده و به کورش سپردند.

کورش، بسوی کشور هَـگـمَـتـانـه/ همدان (در بابلی: اَگَـمـتَـنـو) پیش تاخت. سرای پادشاهی او را تصرف کرد. سیم و زر، و دیگر کالاهای گرانبهای کشور هـگـمـتـانـه را به غنیمت برگرفت و به اَنـشـان برد. اشیای ارزشمندی از . . .
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <Image
            src={Cyrus}
            alt="Cyrus"
            className="w-[60%] mb-12 kingdom-image"
          />
        </div>

        <div className="w-full flex flex-col items-center">
          <Image
            src={Cylinder}
            alt="Cylinder"
            className="w-[30%] Cylinder mt-32 relative z-10"
          />
          <span
            className="textBox block text-right w-[75%] p-10 mr-[20%] mb-20 -mt-10 relative z-0
                       bg-black border-2 border-yellow-300/60 rounded-md
                       shadow-[0_0_25px_6px_rgba(253,224,71,0.55),inset_0_0_25px_6px_rgba(253,224,71,0.35)]"
          >
            منم کوروش، شاه جهان، شاه بزرگ، شاه نیرومند، شاه بابل، شاه سومر و
            اَکد، شاه چهارگوشهٔ جهان. پسر کمبوجیه، شاه بزرگ، شاه شهر انشان، نوهٔ
            کوروش، شاه بزرگ، شاه شهر انشان، نوادهٔ چیش‌پش، شاه بزرگ، شاه شهر
            انشان دودمان جاودانهٔ پادشاهی، که خدایان بِل و نَبو فرمانرواییش را
            دوست می‌دارند و پادشاهی او را با دلی شاد یاد می‌کنند. آنگاه که با
            آشتی به درون بابل درآمدم، جایگاه سروری خود را با جشن و شادمانی در
            کاخ شاهی برپا کردم. مردوک، سرور بزرگ، قلب گشادهٔ کسی که بابل را دوست
            دارد، همچون سرنوشتم به من بخشید و من هر روز ترسان در پی نیایش‌اش
            بودم.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Docs;
