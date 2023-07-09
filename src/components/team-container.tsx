import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type TeamContainerType = {
  teamChatText?: string;
  teamChatDescription?: string;
  teamChatId?: string;

  /** Style props */
  propWidth?: Property.Width;
};

const TeamContainer: FunctionComponent<TeamContainerType> = ({
  teamChatText,
  teamChatDescription,
  teamChatId,
  propWidth,
}) => {
  const offerStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="w-[28.75rem] flex flex-col items-start justify-start gap-[3rem] text-left text-[3.13rem] text-dark-blue font-caption-desktop"
      style={offerStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <b className="self-stretch relative leading-[4rem]"> {teamChatText}</b>
        <div className="self-stretch relative text-[1.13rem] leading-[1.69rem] text-gray-400">
          {teamChatDescription}
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-soft-blue">
        <div className="relative [text-decoration:underline] leading-[150%] font-medium">{`Learn more `}</div>
        <img
          className="relative w-[1.88rem] h-[1.88rem]"
          alt=""
          src={teamChatId}
        />
      </div>
    </div>
  );
};

export default TeamContainer;
