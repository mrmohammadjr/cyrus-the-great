"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { events } from "../data/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);
// stops the mobile address bar show/hide from re-calculating the pin
ScrollTrigger.config({ ignoreMobileResize: true });

const Kingdom = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // ---------- Tablet landscape / desktop: horizontal pinned scroll ----------
      mm.add("(min-width: 768px)", () => {
        const wrapper = wrapperRef.current!;
        const track = trackRef.current!;
        const count = events.length;
        const getDistance = () => track.scrollWidth - wrapper.offsetWidth;

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => "+=" + getDistance(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: {
              snapTo: 1 / (count - 1),
              duration: { min: 0.2, max: 0.6 },
              ease: "power1.inOut",
            },
          },
        });

        tl.to(track, { x: () => getDistance() }, 0);
        tl.to(barRef.current, { scaleX: 1 }, 0);
      });

      // ---------- Mobile: normal vertical scroll, panels fade in ----------
      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray<HTMLElement>(".kingdom-panel").forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: { trigger: panel, start: "top 85%" },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: wrapperRef },
  );

  return (
    <div className="w-full bg-gradient-to-b from-yellow-900 via-yellow-950 to-black text-white">
      <div
        ref={wrapperRef}
        className="relative w-full md:h-[100svh] md:overflow-hidden"
        dir="rtl"
      >
        <div
          ref={trackRef}
          className="flex flex-col md:h-full md:flex-row md:will-change-transform md:w-[calc(var(--n)*100%)]"
          style={{ "--n": events.length } as React.CSSProperties}
        >
          {events.map((e) => (
            <article
              key={e.year}
              className="kingdom-panel flex shrink-0 items-center px-6 py-12 sm:px-10 md:h-full md:px-16 md:py-0 lg:px-24 md:w-[calc(100%/var(--n))]"
            >
              <div className="flex flex-col justify-center gap-3 md:gap-4">
                <h2 className="text-base text-yellow-500 md:text-lg">{e.year}</h2>
                <h3 className="text-3xl font-bold md:text-4xl">{e.title}</h3>
                <p className="max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
                  {e.text}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* progress bar only makes sense for the horizontal layout */}
        <div
          className="absolute bottom-8 left-10 right-10 hidden h-1 bg-white/10 md:block"
          aria-hidden="true"
        >
          <div
            ref={barRef}
            className="h-full origin-right scale-x-0 bg-yellow-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Kingdom;