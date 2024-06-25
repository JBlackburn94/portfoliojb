import { TechContainerContentProps } from "../types";

export default function TechContainerContent({
  tech,
}: TechContainerContentProps) {
  return (
    <div className="flex flex-wrap">
      {tech.map((item) => (
        <p
          className="bg-mainPink mr-1 text-[16px] mt-2 p-1 font-bold"
          key={item.id}
        >
          {item.name}
        </p>
      ))}
    </div>
  );
}
