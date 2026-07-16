"use client"
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Paper from "../assets/old_paper.webp";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const PCText: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(sections, {
        // 👇 Reverse direction for RTL
        xPercent: 100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () =>
  "+=" + (containerRef.current!.scrollWidth - window.innerWidth),
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div className="w-full overflow-hidden RTL max-lg:block lg:block max-sm:hidden max-md:hidden sm:hidden md:hidden">
      <h1 className="p-5 text-2xl text-center border-y-4 border-black bg-gradient-to-r from-[#A77F60] to-[#9A8678]">بخشی از متن استوانه کورش (سطر ۲۰ تا ۳۶)</h1>
      {/* <img src={Paper} alt="d" /> */}
      <div
        ref={containerRef}
        className="flex flex-row-reverse w-[200vw] h-screen  "
      >
        <div className="panel w-screen h-screen flex flex-col  items-center bgText ">
          <div className="flex flex-col p-10 w-full h-[100vh]">
            <p className="text-2xl text-black my-5 text-center">
              برکتی نیکو ارزانی داشت، تا با آرامش، شادمانه در حضورش باشم. به
              [فرمان] والایش، همهٔ شاهانی که بر تخت‌ها نشسته‌اند
            </p>
            <p className="text-2xl text-black my-5 text-center">
              از هر گوشهٔ (جهان)، از دریای بالا تا دریای پایین، آنان که در
              [سرزمین‌های دوردست] می‌زیند، (و) شاهان سرزمین اَمورّو که در چادرها
              زندگی می‌کنند، همهٔ آنان،
            </p>
            <p className="text-2xl text-black my-5 text-center">
              باج سنگینشان را به بابل آوردند و بر پاهایم بوسه زدند. از
              [شواَنّهَ] (=بابل) تا شهر آشور و شوش،
            </p>
            <p className="text-2xl text-black my-5 text-center">
              اَکد، سرزمین اِشنونهَ، شهر زَمبَن، شهر مِتورنو، دِر، تا مرز گوتی،
              جایگاه[های مقدس آنسو] ی دجله که از دیرباز محراب‌هایشان ویران شده
              بود،
            </p>
            <p className="text-2xl text-black my-5 text-center">
              خدایانی را که درون آن‌ها ساکن بودند، به جایگاه‌هایشان بازگرداندم و
              (آنان را) در جایگاه‌های ابدی خودشان نهادم. همهٔ مردمانِ آنان (=آن
              خدایان) را گردآوردم و به سکونتگاه‌هایشان بازگرداندم
            </p>
            <p className="text-2xl text-black my-5 text-center">
              و خدایان سرزمین سومر و اَکد را که نبونئید – در میان خشم سرور
              خدایان- به بابل آورده بود، به فرمان مردوک، سرور بزرگ، به سلامت
            </p>
            <p className="text-2xl text-black my-5 text-center">
              به جایگاه‌هایشان بازگرداندم، جایگاهی که دلشادشان می‌سازد. باشد تا
              همهٔ خدایانی که به درون نیایشگاه‌هایشان بازگرداندم،
            </p>
            <p className="text-2xl text-black my-5 text-center">
              هر روز در برابر (خدایان) بِل و نبو، روزگاری دراز (=عمری طولانی)
              برایم خواستا شوند (و) کارهای نیکم را یادآور شوند و به مردوک،
              سرورم، چنین گویند که «کوروش، شاهی که از تو می‌ترسد و کمبوجیه پسرش»
            </p>
            <p className="text-2xl text-black my-5 text-center">
              (باشد که) آنان تا روزگاران دراز ، سهمیه‌دهندگان نیایشگاه‌هایمان
              باشند و (باشد که) مردمان بابل شاهیِ مرا [بستایند]. من همهٔ
              سرزمین‌ها را در صلح (امنیت) نشاندم.
            </p>
          </div>
        </div>
        <div className="panel w-screen h-screen flex flex-col gap-10 items-center bgText">
          <div className="flex flex-col p-10 w-full h-[100vh]">
            <p className="text-2xl text-black my-5 text-center">
              منم کوروش، شاه جهان، شاه بزرگ، شاه نیرومند، شاه بابل، شاه سومر و
              اَکد، شاه چهارگوشهٔ جهان.
            </p>
            <p className="text-2xl text-black my-5 text-center">
              پسر کمبوجیه، شاه بزرگ، شاه شهر انشان، نوهٔ کوروش، شاه بزرگ، شاه
              شهر انشان، نوادهٔ چیش‌پش، شاه بزرگ، شاه شهر انشان
            </p>
            <p className="text-2xl text-black my-5 text-center">
              دودمان جاودانهٔ پادشاهی، که خدایان بِل و نَبو فرمانرواییش را دوست
              می‌دارند و پادشاهی او را با دلی شاد یاد می‌کنند.
            </p>
            <p className="text-2xl text-black my-5 text-center">
              آنگاه که با آشتی به درون بابل درآمدم، جایگاه سروری خود را با جشن و
              شادمانی در کاخ شاهی برپا کردم. مردوک، سرور بزرگ، قلب گشادهٔ کسی که
              بابل را دوست دارد، همچون سرنوشتم به من بخشید و من هر روز ترسان در
              پی نیایش‌اش بودم.
            </p>
            <p className="text-2xl text-black my-5 text-center">
              سپاهیان گسترده‌ام با آرامش درون بابل گام برمی‌داشتند. نگذاشتم کسی
              در همهٔ سومر و اَکد هراس‌آفرین باشد.
            </p>
            <p className="text-2xl text-black my-5 text-center">
              در پیِ امنیت شهر بابل و همهٔ جایگاه‌های مقدسش بودم. برای مردم بابل
              که برخلاف خواست خدایان یوغی بر آنان نهاده بود که شایسته‌شان نبود
            </p>
            <p className="text-2xl text-black my-5 text-center">
              خستگی‌هایشان را تسکین دادم (و) از بندها رهایشان کردم. مردوک، سرور
              بزرگ، از رفتار [نیک من] شادمان گشت{" "}
            </p>
            <p className="text-2xl text-black my-5 text-center">
              به من کوروش، شاهی که از او می‌ترسد و کمبوجیه پسر تنی [ام و به]
              همهٔ سپاهیانم،
            </p>
            <p className="text-2xl text-black my-5 text-center">
              برکتی نیکو ارزانی داشت، تا با آرامش، شادمانه در حضورش باشم. به
              [فرمان] والایش، همهٔ شاهانی که بر تخت‌ها نشسته‌اند
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCText;