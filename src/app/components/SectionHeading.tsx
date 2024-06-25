import { SectionHeadingProps } from "../types";

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <>
      <h3 className="text-black font-bold text-[20px] mt-[15px]">{title}</h3>
    </>
  );
}
