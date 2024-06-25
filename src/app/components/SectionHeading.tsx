import { SectionHeadingProps } from "../types";

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <>
      <h3 className="font-bold text-[20px] md:text-[40px] uppercase text-center mt-[15px]">
        {title}
      </h3>
    </>
  );
}
