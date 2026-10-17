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

const CLOSED = "inset(-40px -40px 100% -40px)";
const OPEN = "inset(-40px -40px -40px -40px)";

const boxClasses =
  "textBox relative z-0 block w-[92%] rounded-md border-2 border-yellow-300/60 bg-black/75 p-5 text-right text-sm leading-7 " +
  "shadow-[0_0_25px_6px_rgba(253,224,71,0.55),inset_0_0_25px_6px_rgba(253,224,71,0.35)] " +
  "-mt-8 mb-12 md:p-8 md:text-base lg:-mt-10 lg:mb-20 lg:w-[75%] lg:bg-black lg:p-10";

const Docs = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      // glowing Cyrus (all sizes)
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

      const mm = gsap.matchMedia();

      // ---------- Desktop: 3 columns, one timeline ----------
      mm.add("(min-width: 1024px)", () => {
        gsap.set(".Cylinder", { opacity: 0, x: -630 });
        gsap.set(".Faults", { opacity: 0, x: 630 });
        gsap.set(".textBox", { clipPath: CLOSED, opacity: 0 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ".DocsProvider",
              start: "top center",
              end: "100% center",
              toggleActions: "play none none none",
            },
          })
          .to(".Cylinder", { opacity: 1, x: -50, duration: 1 })
          .to(".Faults", { opacity: 1, x: 50, duration: 1 })
          .to(".textBox", {
            clipPath: OPEN,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.3,
          });
      });

      // ---------- Mobile / tablet: stacked, each column animates when it appears ----------
      mm.add("(max-width: 1023px)", () => {
        gsap.utils.toArray<HTMLElement>(".docs-col").forEach((col) => {
          const img = col.querySelector(".Cylinder, .Faults");
          const box = col.querySelector(".textBox");
          if (!img || !box) return;

          gsap.set(img, { opacity: 0, y: 60 });
          gsap.set(box, { clipPath: CLOSED, opacity: 0 });

          gsap
            .timeline({
              scrollTrigger: { trigger: col, start: "top 75%", toggleActions: "play none none none" },
            })
            .to(img, { opacity: 1, y: 0, duration: 0.8 })
            .to(box, { clipPath: OPEN, opacity: 1, duration: 0.9, ease: "power2.out" });
        });
      });

      return () => mm.revert();
    },
    { scope: wrapperRef },
  );

  return (
    <section ref={wrapperRef} className="DocsProvider relative w-full bg-black p-3">
      <div className="flex w-full flex-col lg:flex-row lg:justify-between">
        {/* Faults */}
        <div className="docs-col relative z-10 order-2 flex w-full flex-col items-center lg:order-1">
          <Image
            src={Faults}
            alt="Faults"
            className="Faults relative z-10 mt-10 w-[55%] sm:w-[40%] md:w-[32%] lg:mt-20 lg:w-[30%] max-sm:mb-3 sm:mb-3"
          />
          <span className={`${boxClasses} lg:ml-[20%] `}>
            سال ششم (۵۵۰/ ۵۴۹)
            شاه آسـتـیـاگ (در متن بابلی: ایـشْـتـومِـگـو) سپاهش را فراخواند. آنان بسوی کورش (در متن بابلی: کـورَش)، شاه اَنـشـان به پیش تاختند تا به نبردی پیروزمندانه با او در آیند. اما سپاهیان آسـتـیـاگ بر شاه خود شوریدند. او را به زنجیر کشیده و به کورش سپردند.

            کورش، بسوی کشور هَـگـمَـتـانـه/ همدان (در بابلی: اَگَـمـتَـنـو) پیش تاخت. سرای پادشاهی او را تصرف کرد. سیم و زر، و دیگر کالاهای گرانبهای کشور هـگـمـتـانـه را به غنیمت برگرفت و به اَنـشـان برد. اشیای ارزشمندی از . . .
          </span>
        </div>

        {/* Cyrus: mobile/tablet = faded backdrop behind everything (sticky while scrolling),
            desktop = normal middle column */}
        <div className="docs-col pointer-events-none absolute inset-0 z-0 lg:pointer-events-auto lg:static lg:order-2 lg:flex lg:w-full lg:flex-col lg:items-center">
          <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center opacity-25 lg:static lg:h-auto lg:opacity-100">
            <Image
              src={Cyrus}
              alt="Cyrus"
              className="kingdom-image w-[85%] sm:w-[65%] md:w-[55%] lg:mb-12 lg:w-[60%]"
            />
          </div>
        </div>

        {/* Cylinder */}
        <div className="docs-col relative z-10 order-3 flex w-full flex-col items-center">
          <Image
            src={Cylinder}
            alt="Cylinder"
            className="Cylinder relative z-10 mt-10 w-[55%] sm:w-[40%] md:w-[32%] lg:mt-32 lg:w-[30%]"
          />
          <span className={`${boxClasses} lg:mr-[20%]`}>
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