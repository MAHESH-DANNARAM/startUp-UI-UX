import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";

type TaskContainer1Type = {
  projectId?: string;
  projectTitle?: string;
  projectType?: string;
  projectCompletionPercenta?: string;
  projectDeadline?: string;
  projectRemainingDays?: string;
  projectImageSize?: string;
  projectImageId?: string;
  projectImageSizeId?: string;
  projectImageSizeIds?: string;
  projectImageSizeIdsText?: string;

  /** Style props */
  propWidth?: Property.Width;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;
};

const TaskContainer1: FunctionComponent<TaskContainer1Type> = ({
  projectId,
  projectTitle,
  projectType,
  projectCompletionPercenta,
  projectDeadline,
  projectRemainingDays,
  projectImageSize,
  projectImageId,
  projectImageSizeId,
  projectImageSizeIds,
  projectImageSizeIdsText,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const yourJobAsStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const lineDivStyle: CSS.Properties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const markStyle: CSS.Properties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[12.53rem] overflow-hidden shrink-0 text-left text-[0.64rem] text-dark-blue font-plus-jakarta-sans">
      <img
        className="absolute top-[0.96rem] left-[0.96rem] rounded-[6.39px] w-[11.18rem] h-[4.39rem] object-cover"
        alt=""
        src={projectId}
      />
      <div className="absolute top-[5.99rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.16rem]">
        <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[8.62rem] h-[0.8rem] shrink-0">
          {projectTitle}
        </div>
        <div
          className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.87rem] h-[0.64rem] shrink-0"
          style={yourJobAsStyle}
        >
          {projectType}
        </div>
      </div>
      <div className="absolute top-[8.22rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.32rem]">
        <div className="flex flex-row items-start justify-start gap-[5.11rem]">
          <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
            Progress
          </div>
          <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
            {projectCompletionPercenta}
          </div>
        </div>
        <div className="relative w-[11.18rem] h-[0.64rem]">
          <div className="absolute top-[0.16rem] left-[0rem] rounded-[5.11px] bg-royalblue w-[11.18rem] h-[0.32rem]" />
          <div
            className="absolute top-[0.16rem] left-[0rem] rounded-tl-[5.11px] rounded-tr-none rounded-br-none rounded-bl-[5.11px] bg-soft-blue w-[8.38rem] h-[0.32rem]"
            style={lineDivStyle}
          />
          <div
            className="absolute top-[0rem] left-[8.06rem] rounded-[50%] bg-soft-blue box-border w-[0.64rem] h-[0.64rem] border-[1.3px] border-solid border-primary-0"
            style={markStyle}
          />
        </div>
      </div>
      <div className="absolute top-[10.62rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
        <img
          className="relative w-[0.96rem] h-[0.96rem]"
          alt=""
          src={projectDeadline}
        />
        <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.67rem] h-[0.96rem] shrink-0">
          {projectRemainingDays}
        </div>
      </div>
      <div className="absolute top-[10.62rem] left-[8.62rem] flex flex-row items-start justify-start">
        <img
          className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover"
          alt=""
          src={projectImageSize}
        />
        <img
          className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
          alt=""
          src={projectImageId}
        />
        <img
          className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
          alt=""
          src={projectImageSizeId}
        />
        <img
          className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
          alt=""
          src={projectImageSizeIds}
        />
        <img
          className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
          alt=""
          src={projectImageSizeIdsText}
        />
      </div>
    </div>
  );
};

export default TaskContainer1;
