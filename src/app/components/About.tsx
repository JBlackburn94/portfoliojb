import Image from "next/image";
import TechContainer from "./TechContainer";

export default function About() {
  return (
    <section className="h-screen flex items-start justify-center px-40">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="heading text-mainCyan text-[48px] md:text-[80px] uppercase">
            Tech
          </h2>
          <TechContainer />
        </div>
      </div>
    </section>
  );
}
