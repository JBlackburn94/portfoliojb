"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  useGSAP(() => {
    gsap.to("#logo", {
      opacity: 0,
      scrollTrigger: {
        trigger: "#logo",
        start: "top 5%",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <header className="h-[100px] fixed w-full z-10">
      <nav className="flex items-center justify-between px-[20px] py-[40px]">
        <h1 className="heading text-[16px] uppercase" id="logo">
          Jason Blackburn
        </h1>
        <button className="uppercase font-bold">Menu</button>
      </nav>
    </header>
  );
}
