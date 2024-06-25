import { TechContainerContentProps } from "../types";

export default function TechContainerContent({
  tech,
}: TechContainerContentProps) {
  return (
    <div className="flex flex-wrap justify-center w-1/2 md:w-3/4">
      {tech.map((item) => (
        <p
          className="bg-mainPink mr-1 md:mr-2 flex shrink-0 text-[16px] md:text-[20px] mt-2 p-1 font-bold"
          key={item.id}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}
