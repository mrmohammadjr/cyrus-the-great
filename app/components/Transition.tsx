"use client";

import Image from "next/image";
import Tape from "../assets/tape.webp";

const Transition = () => {
  return (
    <div className="flex overflow-hidden">
      {Array.from({ length: 13 }).map((_, index) => (
        <div key={index} className="relative h-10 w-[120px]">
          <Image
            src={Tape}
            alt="tape"
            fill
            className="object-cover border border-yellow-700"
          />
        </div>
      ))}
    </div>
  );
};

export default Transition;