import { frontEnd, backEnd, uiUx, tools } from "../constants";
import { TechProps } from "../types";
import SectionHeading from "./SectionHeading";
import TechContainerContent from "./TechContainerContent";

export default function TechContainer() {
  return (
    <div>
      <SectionHeading title="Front End" />
      <TechContainerContent tech={frontEnd} />
      <SectionHeading title="Back End" />
      <TechContainerContent tech={backEnd} />
      <SectionHeading title="UI/UX" />
      <TechContainerContent tech={uiUx} />
      <SectionHeading title="Tools" />
      <TechContainerContent tech={tools} />
    </div>
  );
}
