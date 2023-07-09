import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import { Link } from "react-router-dom";

type InfoSectionContainerType = {
  chatTeamText?: string;
  teamChatText?: string;
  teamThreadText?: string;

  /** Style props */
  propTop?: Property.Top;
};

const InfoSectionContainer: FunctionComponent<InfoSectionContainerType> = ({
  chatTeamText,
  teamChatText,
  teamThreadText,
  propTop,
}) => {
  const infoSectionStyle: CSS.Properties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[103.5rem] left-[calc(50%_-_580px)] w-[72.5rem] flex flex-row items-center justify-between text-left text-[3.13rem] text-dark-blue font-caption-desktop"
      style={infoSectionStyle}
    >
      <img
        className="relative w-[35.31rem] h-[35.31rem]"
        alt=""
        src={chatTeamText}
      />
      <div className="w-[28.5rem] flex flex-col items-start justify-start gap-[3rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
          <b className="self-stretch relative leading-[4rem]">{teamChatText}</b>
          <div className="self-stretch relative text-[1.13rem] leading-[1.69rem] text-gray-400">
            {teamThreadText}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.5rem] text-[1rem] text-soft-blue">
          <Link className="relative [text-decoration:underline] leading-[150%] font-medium" to={"/"}>{`Learn more `}</Link>
          <img
            className="relative w-[1.88rem] h-[1.88rem]"
            alt=""
            src="/iconactionarrow-right-alt-24px1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSectionContainer;
