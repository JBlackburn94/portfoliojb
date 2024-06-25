import { frontEnd, backEnd, uiUx, tools } from "../constants";
import SectionHeading from "./SectionHeading";
import TechContainerContent from "./TechContainerContent";

export default function TechContainer() {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-col items-center w-1/4">
        <SectionHeading title="Front End" />
        <TechContainerContent tech={frontEnd} />
      </div>
      <div className="flex flex-col items-center w-1/4">
        <SectionHeading title="Back End" />
        <TechContainerContent tech={backEnd} />
      </div>
      <div className="flex flex-col items-center w-1/4">
        <SectionHeading title="UI/UX" />
        <TechContainerContent tech={uiUx} />
      </div>
      <div className="flex flex-col items-center w-1/4">
        <SectionHeading title="Tools" />
        <TechContainerContent tech={tools} />
      </div>
    </div>
  );
}
