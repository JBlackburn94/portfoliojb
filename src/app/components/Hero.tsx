"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import hero from "../../../public/computer.svg";
import desktopHero from "../../../public/desktopComputer.svg";
import { PiHandWavingFill } from "react-icons/pi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

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

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#image-container", {
      opacity: 1,
      duration: 0.4,
    });
    gsap.to("#waving", {
      delay: 0.5,
      duration: 0.4,
      rotation: 40,
      repeat: -1,
      yoyo: true,
    });
    gsap.to("#content-container", {
      delay: 0.5,
      opacity: 1,
      duration: 0.4,
      stagger: 1,
    });
  });

  return (
    <section className="flex flex-col md:flex-row-reverse justify-center md:justify-between items-center px-[41px] py-[100px] lg:px-[185px]">
      <div
        className="flex flex-col items-center justify-center relative md:ml-[100px] lg:ml-[166px] mt-[100px] opacity-0 shrink-0"
        id="image-container"
      >
        <PiHandWavingFill
          className="text-mainPink text-[70px] md:text-[80px] absolute m-auto left-0 right-12 bottom-16 md:bottom-14 lg:bottom-16 top-0"
          id="waving"
        />
        <Image
          src={hero}
          alt="A vector image of a computer monitor"
          className="object-cover"
          priority
        />
      </div>
      <div
        className="flex flex-col mt-[28px] md:mt-[100px] opacity-0 shrink"
        id="content-container"
      >
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
