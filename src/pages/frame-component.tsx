import { FunctionComponent } from "react";
import CollaborationCard from "../components/collaboration-card";
import ChatContainer from "../components/chat-container";
import InfoSectionContainer from "../components/info-section-container";
import WorkOptionsContainer from "../components/work-options-container";
import CompanyCard from "../components/company-card";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center text-left text-[3.13rem] text-dark-blue font-caption-desktop">
      <div className="self-stretch relative bg-off-white h-[322.25rem] overflow-hidden shrink-0">
        <CollaborationCard />
        <ChatContainer />
        <InfoSectionContainer
          chatTeamText="/imggroup.svg"
          teamChatText="Chats for your distributed teams"
          teamThreadText="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
        />
        <WorkOptionsContainer />
        <InfoSectionContainer
          chatTeamText="/imggroup2.svg"
          teamChatText="Move faster with your Team tools"
          teamThreadText="With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
          propTop="189.13rem"
        />
        <img
          className="absolute top-[105rem] right-[47.19rem] w-[16rem] h-[6.88rem] object-cover"
          alt=""
          src="/calender@2x.png"
        />
        
      
        <CompanyCard />
        {/* <img
          className="absolute top-[162.94rem] left-[67.88rem] w-[11.88rem] h-[5.09rem] object-cover"
          alt=""
          src="/image4@2x.png"
        />
        <img
          className="absolute top-[168.75rem] left-[67.88rem] w-[11.88rem] h-[11.35rem] object-cover"
          alt=""
          src="/image5@2x.png"
        />
        <img
          className="absolute top-[205.81rem] left-[10.31rem] w-[11.88rem] h-[11.34rem] object-cover"
          alt=""
          src="/image6@2x.png"
        />
        <img
          className="absolute top-[217.88rem] left-[10.31rem] w-[11.88rem] h-[5.09rem] object-cover"
          alt=""
          src="/image7@2x.png"
        /> */}
      </div>
    </div>
  );
};

export default FrameComponent;
