import { TechContainerContentProps } from "../types";

export default function TechContainerContent({
  tech,
}: TechContainerContentProps) {
  return (
    <div className="flex flex-wrap">
      {tech.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}
