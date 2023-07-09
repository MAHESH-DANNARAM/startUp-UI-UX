import { FunctionComponent } from "react";
import TeamContainer from "./team-container";

const WorkOptionsContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[146.31rem] left-[calc(50%_-_580px)] w-[72.5rem] flex flex-row items-center justify-between">
      <TeamContainer
        teamChatText="Choose how you want to work"
        teamChatDescription="In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
        teamChatId="/iconactionarrow-right-alt-24px2.svg"
        propWidth="28.5rem"
      />
      <img
        className="relative w-[35.31rem] h-[35.31rem]"
        alt=""
        src="/imggroup1.svg"
      />
    </div>
  );
};

export default WorkOptionsContainer;
