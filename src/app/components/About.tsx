import Image from "next/image";
import aboutImage from "../../../public/mobileSide.svg";
import TechContainer from "./TechContainer";

export default function About() {
  return (
    <section className="bg-mainCyan flex flex-row-reverse justify-between">
      <Image
        src={aboutImage}
        alt="A collection of vector images"
        className="w-1/2"
      />
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-start px-[26px]">
          <h2 className="heading text-mainPink text-[48px] uppercase">Tech</h2>
          <TechContainer />
        </div>
      </div>
    </section>
  );
}
