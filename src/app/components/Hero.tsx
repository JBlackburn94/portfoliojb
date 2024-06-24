"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import hero from "../../../public/computer.svg";
import desktopHero from "../../../public/desktopComputer.svg";

export default function Hero() {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center px-[41px] py-[50px] lg:px-[185px]">
      <div className="flex flex-col items-center justify-center md:ml-[100px] lg:ml-[166px]">
        <h2 className="top-[140px] md:top-[110px] right-[20px] lg:right-[30px] lg:top-[150px] relative rotate-3 font-bold text-[20px] lg:text-[24px]">
          I am <span className="text-mainPink">Jason</span>
        </h2>
        <Image
          src={width > 390 ? desktopHero : hero}
          alt="A vector image of a computer monitor"
          priority
        />
      </div>
      <div className="flex flex-col mt-[28px] md:mt-0">
        <h2 className="font-bold text-mainPink text-[28px] lg:text-[40px] leading-none ">
          Creative
        </h2>
        <h1 className="heading uppercase text-mainCyan text-[48px] lg:text-[80px] leading-none">
          Full Stack <br /> <span className="text-white">Developer</span>
        </h1>
        <div className="flex mt-2">
          <p className="font-bold text-[16px] lg:text-[20px]">React</p>
          <p className="ml-[20px] font-bold text-[16px] lg:text-[20px]">
            Next.js
          </p>
          <p className="ml-[20px] font-bold text-[16px] lg:text-[20px]">
            TypeScript
          </p>
          <p className="ml-[20px] font-bold text-[16px] lg:text-[20px]">GSAP</p>
        </div>
        <p className="text-[16px] lg:text-[20px] mt-[16px]">
          A Full Stack Developer, specialised in crafting responsive,
          user-friendly and accessible interfaces for the web
        </p>
      </div>
    </section>
  );
}
