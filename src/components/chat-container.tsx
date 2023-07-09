import { FunctionComponent, useState } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  Menu,
  MenuItem,
} from "@mui/material";
import TeamContainer from "./team-container";
import TaskContainer1 from "./task-container1";

const ChatContainer: FunctionComponent = () => {
  const [timeAnchorEl, setTimeAnchorEl] = useState<HTMLElement | null>(null);
  const [monthAnchorEl, setMonthAnchorEl] = useState<HTMLElement | null>(null);
  const timeOpen = Boolean(timeAnchorEl);
  const handleTimeClick = (event: React.MouseEvent<HTMLElement>) => {
    setTimeAnchorEl(event.currentTarget);
  };
  const handleTimeClose = () => {
    setTimeAnchorEl(null);
  };
  const monthOpen = Boolean(monthAnchorEl);
  const handleMonthClick = (event: React.MouseEvent<HTMLElement>) => {
    setMonthAnchorEl(event.currentTarget);
  };
  const handleMonthClose = () => {
    setMonthAnchorEl(null);
  };

  return (
    <div className="absolute top-[55rem] left-[0rem] bg-off-white w-[90rem] h-[41rem] overflow-hidden text-left text-[3.13rem] text-dark-blue font-caption-desktop">
      <div className="absolute top-[0.13rem] left-[8.75rem] flex flex-row items-center justify-between">
        <TeamContainer
          teamChatText="Chats for your distributed teams"
          teamChatDescription="Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
          teamChatId="/iconactionarrow-right-alt-24px.svg"
        />
        <div className="relative w-[65.67rem] h-[40.88rem] text-[0.96rem] font-plus-jakarta-sans">
          <form className="absolute top-[1.06rem] left-[1.46rem] rounded-[3.72px] bg-primary-0 shadow-[0px_13px_26px_rgba(118,_118,_178,_0.24)] w-[8.66rem] h-[17.88rem] overflow-hidden">
            <div className="absolute top-[0.56rem] left-[0.56rem] flex flex-row items-start justify-start gap-[5.31rem]">
              <div className="relative text-[0.33rem] tracking-[-0.02em] leading-[150%] font-semibold font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[1.77rem] h-[0.47rem] shrink-0">
                Task Today
              </div>
              <img
                className="relative w-[0.47rem] h-[0.47rem]"
                alt=""
                src="/vuesaxlinearmore.svg"
              />
            </div>
            <img
              className="absolute top-[1.49rem] left-[0.56rem] rounded-[3.72px] w-[7.54rem] h-[3.72rem] object-cover"
              alt=""
              src="/image@2x.png"
            />
            <div className="absolute top-[5.68rem] left-[0.56rem] flex flex-col items-start justify-start gap-[0.09rem]">
              <div className="relative text-[0.37rem] tracking-[-0.02em] leading-[150%] font-semibold font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[5.77rem] h-[0.47rem] shrink-0">
                Creating Awesome Mobile Apps
              </div>
              <div className="relative text-[0.28rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-secondary-400 text-left flex items-center w-[2.14rem] h-[0.37rem] shrink-0">
                UI /UX Designer
              </div>
            </div>
            <div className="absolute top-[10.61rem] left-[0.56rem] flex flex-row items-start justify-start gap-[3.07rem]">
              <div className="relative text-[0.37rem] tracking-[-0.02em] leading-[150%] font-semibold font-plus-jakarta-sans text-dark-blue text-left flex items-center w-[2.33rem] h-[0.47rem] shrink-0">
                Detail Task
              </div>
              <div className="relative text-[0.28rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-desaturated-blue text-left flex items-center w-[2.14rem] h-[0.47rem] shrink-0">
                UI / UX Designer
              </div>
            </div>
            <div className="absolute top-[7.08rem] left-[0.56rem] flex flex-col items-start justify-start gap-[0.19rem]">
              <div className="flex flex-row items-start justify-start gap-[4rem]">
                <div className="relative text-[0.37rem] tracking-[-0.02em] leading-[150%] font-medium font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[2.33rem] h-[0.47rem] shrink-0">
                  Progress
                </div>
                <div className="relative text-[0.37rem] tracking-[-0.02em] leading-[150%] font-medium font-plus-jakarta-sans text-primary-500 text-right flex items-center w-[1.21rem] h-[0.47rem] shrink-0">
                  90%
                </div>
              </div>
              <div className="relative w-[7.54rem] h-[0.37rem]">
                <div className="absolute top-[0.09rem] left-[0rem] rounded-[2.98px] bg-royalblue w-[7.54rem] h-[0.19rem]" />
                <div className="absolute top-[0.09rem] left-[0rem] rounded-tl-[2.98px] rounded-tr-none rounded-br-none rounded-bl-[2.98px] bg-soft-blue w-[6.28rem] h-[0.19rem]" />
                <div className="absolute top-[0rem] left-[6.1rem] rounded-[50%] bg-primary-500 box-border w-[0.37rem] h-[0.37rem] border-[0.7px] border-solid border-primary-0" />
              </div>
            </div>
            <div className="absolute top-[9.86rem] left-[0.55rem] box-border w-[7.56rem] h-[0.02rem] border-t-[0.4px] border-solid border-whitesmoke" />
            <div className="absolute top-[8.57rem] left-[0.56rem] flex flex-row items-start justify-start gap-[0.19rem]">
              <img
                className="relative w-[0.56rem] h-[0.56rem]"
                alt=""
                src="/iconlylighttime-circle.svg"
              />
              <div className="relative text-[0.37rem] tracking-[-0.02em] leading-[150%] font-medium font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[2.14rem] h-[0.56rem] shrink-0">
                1 Hour
              </div>
            </div>
            <div className="absolute top-[8.57rem] left-[6.05rem] flex flex-row items-start justify-start">
              <img
                className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover"
                alt=""
                src="/photo-4@2x.png"
              />
              <img
                className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                alt=""
                src="/photo-2@2x.png"
              />
              <img
                className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                alt=""
                src="/photo-1@2x.png"
              />
              <img
                className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                alt=""
                src="/photo-5@2x.png"
              />
              <img
                className="relative rounded-[74.48px] w-[0.56rem] h-[0.56rem] object-cover ml-[-0.19rem]"
                alt=""
                src="/photo-3@2x.png"
              />
            </div>
            <Button
              className="absolute top-[16.29rem] left-[0.56rem]"
              variant="contained"
              color="primary"
            >
              Go To Detail
            </Button>
            <div className="absolute top-[11.54rem] left-[0.56rem] flex flex-row items-center justify-start gap-[0.28rem]">
              <Button
                sx={{ width: 13.40625 }}
                variant="outlined"
                color="primary"
              >
                1
              </Button>
              <div className="w-[6.42rem] flex flex-row items-start justify-start">
                <div className="relative text-[0.33rem] tracking-[-0.02em] leading-[150%] font-medium font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[6.42rem] h-[0.56rem] shrink-0">
                  Understanding the tools in Figma
                </div>
              </div>
            </div>
            <div className="absolute top-[12.85rem] left-[0.56rem] flex flex-row items-center justify-start gap-[0.28rem]">
              <Button
                sx={{ width: 13.40625 }}
                variant="outlined"
                color="primary"
              >
                2
              </Button>
              <div className="w-[6.42rem] flex flex-row items-start justify-start">
                <div className="relative text-[0.33rem] tracking-[-0.02em] leading-[150%] font-medium font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[6.42rem] h-[0.56rem] shrink-0">
                  Understand the basics of making designs
                </div>
              </div>
            </div>
            <div className="absolute top-[14.15rem] left-[0.56rem] flex flex-row items-center justify-start gap-[0.28rem]">
              <TextField
                className="[border:none] bg-[transparent]"
                sx={{ width: 13.40625 }}
                color="primary"
                variant="outlined"
                type="text"
                label="3"
                placeholder="Placeholder"
                size="medium"
                margin="none"
              />
              <div className="w-[6.42rem] flex flex-row items-start justify-start">
                <div className="relative text-[0.33rem] tracking-[-0.02em] leading-[150%] font-medium font-plus-jakarta-sans text-secondary-500 text-left flex items-center w-[6.42rem] h-[0.56rem] shrink-0">
                  Design a mobile application with figma
                </div>
              </div>
            </div>
          </form>
          <div className="absolute top-[0rem] left-[8.19rem] rounded-xl bg-gray-100 shadow-[0px_8px_24px_rgba(118,_118,_178,_0.24)] w-[57.48rem] h-[40.88rem] overflow-hidden">
            <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] bg-primary-0 w-[10.06rem] text-[1.92rem] font-caption-desktop">
              <div className="absolute w-[calc(100%_-_160.31px)] top-[-0.02rem] right-[-0.02rem] left-[10.04rem] box-border h-[40.92rem] border-r-[0.6px] border-solid border-whitesmoke" />
              <div className="absolute top-[1.28rem] left-[1.28rem] flex flex-row items-center justify-start">
                <div className="relative tracking-[-0.02em] leading-[80%] font-semibold">
                  <span>team</span>
                  <span className="text-[2.56rem] text-soft-blue">.</span>
                </div>
              </div>
              <div className="absolute top-[5.27rem] left-[1.28rem] flex flex-col items-start justify-start gap-[0.96rem]">
                <Button variant="outlined" color="primary">
                  Overview
                </Button>
                <Button variant="text" color="primary">
                  Task
                </Button>
                <Button variant="text" color="primary">
                  Mentors
                </Button>
                <Button variant="text" color="primary">
                  Message
                </Button>
                <Button variant="text" color="primary">
                  Settings
                </Button>
              </div>
              <form className="absolute top-[28.66rem] left-[1.28rem] w-[7.5rem] h-[10.94rem]">
                <div className="absolute top-[1.04rem] left-[0rem] rounded-[6.39px] bg-dark-blue w-[7.5rem] h-[9.9rem] overflow-hidden">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[6.39px] bg-gray-200 w-[7.5rem] h-[9.9rem]" />
                  <div className="absolute top-[-3.99rem] left-[-3.75rem] rounded-[50%] bg-gray-300 w-[6.39rem] h-[6.39rem]" />
                  <div className="absolute top-[6.71rem] left-[4.79rem] rounded-[50%] bg-gray-300 w-[6.39rem] h-[6.39rem]" />
                  <Button
                    className="absolute top-[7.66rem] left-[0.64rem]"
                    sx={{ width: 99.6328125 }}
                    variant="text"
                    color="primary"
                  >
                    Go To Help Center
                  </Button>
                  <div className="absolute top-[2.83rem] left-[0.72rem] w-[6.07rem] h-[3.03rem]">
                    <div className="absolute top-[0rem] left-[0.96rem] text-[0.64rem] tracking-[-0.02em] leading-[150%] font-semibold font-plus-jakarta-sans text-primary-0 text-center flex items-center justify-center w-[4.15rem] h-[0.8rem]">
                      Help Center
                    </div>
                    <div className="absolute top-[1.28rem] left-[0rem] text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-primary-0 text-center flex items-center w-[6.07rem] h-[1.76rem]">
                      <span className="[line-break:anywhere] w-full">
                        <p className="m-0">Having Trouble in Learning.</p>
                        <p className="m-0">
                          Please contact us for more questions.
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <TextField
                  className="[border:none] bg-[transparent] absolute top-[0rem] left-[2.79rem]"
                  sx={{ width: 30.65625 }}
                  color="primary"
                  variant="outlined"
                  type="text"
                  label="Label"
                  placeholder="Placeholder"
                  size="medium"
                  margin="none"
                />
              </form>
            </div>
            <div className="absolute top-[1.28rem] left-[11.34rem] flex flex-col items-start justify-start gap-[0.32rem]">
              <div className="relative tracking-[-0.03em] leading-[150%] font-semibold flex items-center w-[8.62rem]">
                Hi, Skylar Dias
              </div>
              <div className="relative text-[0.64rem] tracking-[-0.02em] leading-[150%] font-medium text-desaturated-blue inline-block w-[9.42rem] h-[1.12rem] shrink-0">
                Let's finish your task today!
              </div>
            </div>
            <div className="absolute top-[0rem] left-[40.08rem] bg-whitesmoke w-[17.4rem] h-[40.88rem]" />
            <div className="absolute top-[1.92rem] left-[33.69rem] flex flex-row items-start justify-start gap-[0.96rem]">
              <img
                className="relative w-[2.08rem] h-[2.08rem]"
                alt=""
                src="/notif.svg"
              />
              <img
                className="relative rounded-[63.87px] w-[2.08rem] h-[2.08rem] object-cover"
                alt=""
                src="/profil@2x.png"
              />
            </div>
            <div className="absolute top-[5.91rem] left-[11.34rem] rounded-[6.39px] bg-dark-blue w-[7.74rem] h-[8.54rem] text-[1.28rem] text-off-white">
              <div className="absolute top-[2.4rem] left-[0.8rem] tracking-[-0.03em] leading-[150%] font-semibold">
                65
              </div>
              <div className="absolute w-[calc(100%_-_44.71px)] top-[0.8rem] right-[2rem] left-[0.8rem] flex flex-row items-center justify-start text-[0.64rem] text-primary-0">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold inline-block w-[4.95rem] shrink-0">
                  Running Task
                </div>
              </div>
              <div className="absolute top-[4.95rem] left-[0.8rem] w-[2.71rem] h-[2.71rem] text-center text-[0.72rem]">
                <div className="absolute top-[0rem] left-[0rem] w-[2.71rem] h-[2.71rem]">
                  <img
                    className="absolute top-[-0.06rem] left-[-0.06rem] w-[2.83rem] h-[2.83rem]"
                    alt=""
                    src="/chart.svg"
                  />
                  <div className="absolute top-[0.88rem] left-[0.48rem] tracking-[-0.02em] leading-[150%] font-medium flex items-center justify-center w-[1.76rem] h-[0.96rem]">
                    45%
                  </div>
                </div>
              </div>
              <div className="absolute top-[5.39rem] left-[4.23rem] flex flex-col items-start justify-start gap-[0.16rem] text-[0.8rem]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[1.6rem] h-[0.96rem] shrink-0">
                  100
                </div>
                <div className="relative text-[0.56rem] tracking-[-0.02em] leading-[150%] font-medium text-desaturated-blue flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
                  Task
                </div>
              </div>
            </div>
            <form className="absolute top-[5.91rem] left-[20.36rem] rounded-[6.39px] bg-whitesmoke w-[18.44rem] h-[8.54rem] overflow-hidden">
              <div className="absolute top-[0.8rem] right-[0.8rem]">
                <Button
                  id="button-This Week"
                  aria-controls="menu-This Week"
                  aria-haspopup="true"
                  aria-expanded={timeOpen ? "true" : undefined}
                  onClick={handleTimeClick}
                  color="primary"
                >
                  This Week
                </Button>
                <Menu
                  anchorEl={timeAnchorEl}
                  open={timeOpen}
                  onClose={handleTimeClose}
                />
              </div>
              <div className="absolute w-[calc(100%_-_256.75px)] top-[0.8rem] right-[15.25rem] left-[0.8rem] flex flex-row items-center justify-start">
                <div className="relative text-[0.64rem] tracking-[-0.02em] leading-[150%] font-semibold font-plus-jakarta-sans text-dark-blue text-left inline-block w-[2.4rem] shrink-0">
                  Activity
                </div>
              </div>
              <div className="absolute top-[2.56rem] left-[0.8rem] rounded-[6.39px] bg-primary-0 w-[16.85rem] h-[5.19rem] overflow-hidden">
                <div className="absolute top-[0.64rem] left-[0.64rem] flex flex-col items-start justify-start gap-[0.8rem]">
                  <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-center flex items-center justify-center w-[0.32rem] h-[0.56rem] shrink-0">
                    3
                  </div>
                  <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-center flex items-center justify-center w-[0.32rem] h-[0.56rem] shrink-0">
                    2
                  </div>
                  <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-center flex items-center justify-center w-[0.32rem] h-[0.56rem] shrink-0">
                    1
                  </div>
                </div>
                <div className="absolute top-[0.64rem] left-[1.6rem] flex flex-row items-start justify-between">
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      S
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      M
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      T
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      W
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      T
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      F
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[0.32rem]">
                    <div className="relative box-border w-[0.04rem] h-[3.23rem] border-r-[0.6px] border-solid border-whitesmoke" />
                    <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium font-plus-jakarta-sans text-dark-blue text-left">
                      S
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[0.96rem] left-[1.7rem] w-[14.41rem] h-[3.29rem]"
                  alt=""
                  src="/cart.svg"
                />
              </div>
              <div className="absolute top-[4.79rem] left-[4.63rem] flex flex-col items-center justify-center">
                <img
                  className="relative w-[0.96rem] h-[0.96rem]"
                  alt=""
                  src="/point.svg"
                />
              </div>
              <div className="absolute top-[2.44rem] left-[3.27rem] w-[3.35rem] h-[1.88rem]">
                <img
                  className="absolute top-[0.62rem] left-[0.42rem] rounded-[1.28px] w-[2.51rem] h-[2.37rem]"
                  alt=""
                  src="/polygon-2.svg"
                />
                <Button
                  className="absolute top-[0rem] left-[0rem]"
                  variant="contained"
                  color="primary"
                >
                  2 Task
                </Button>
              </div>
            </form>
            <div className="absolute top-[15.73rem] left-[11.34rem] w-[27.46rem] flex flex-col items-start justify-start gap-[0.8rem]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative tracking-[-0.03em] leading-[150%] font-semibold flex items-center w-[7.82rem] shrink-0">
                  Monthly Mentors
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.4rem]">
                  <img
                    className="relative w-[0.96rem] h-[0.96rem]"
                    alt=""
                    src="/arrowleft.svg"
                  />
                  <img
                    className="relative w-[0.96rem] h-[0.96rem]"
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between text-[0.56rem]">
                <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[5.59rem] overflow-hidden shrink-0">
                  <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.32rem] text-[0.64rem]">
                    <img
                      className="relative rounded-[127.73px] w-[1.92rem] h-[1.92rem] object-cover"
                      alt=""
                      src="/photo@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.16rem]">
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[4.95rem] h-[0.8rem] shrink-0">
                        Curious George
                      </div>
                      <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.87rem] h-[0.64rem] shrink-0">
                        UI UX Design
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[1.44rem] left-[9.74rem] tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[2.4rem] h-[0.96rem]">{`+ Follow `}</div>
                  <div className="absolute top-[3.67rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/vuesaxlinearnote2.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.08rem] h-[0.96rem] shrink-0">
                      40 Task
                    </div>
                  </div>
                  <div className="absolute top-[3.67rem] left-[6.07rem] flex flex-row items-start justify-start gap-[0.32rem]">
                    <img
                      className="relative rounded-[0.64px] w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[4.79rem] h-[0.96rem] shrink-0">
                      4,7 (750 Reviews)
                    </div>
                  </div>
                </div>
                <div className="relative rounded-[6.39px] bg-primary-0 w-[13.09rem] h-[5.59rem] overflow-hidden shrink-0">
                  <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.32rem] text-[0.64rem]">
                    <img
                      className="relative rounded-[127.73px] w-[1.92rem] h-[1.92rem] object-cover"
                      alt=""
                      src="/photo1@2x.png"
                    />
                    <div className="flex flex-col items-start justify-start gap-[0.16rem]">
                      <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[5.27rem] h-[0.8rem] shrink-0">
                        Abraham Lincoln
                      </div>
                      <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[2.87rem] h-[0.64rem] shrink-0">
                        3D Design
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[1.44rem] left-[9.58rem] tracking-[-0.02em] leading-[150%] font-medium text-secondary-400 text-right flex items-center w-[2.56rem] h-[0.96rem]">
                    Followed
                  </div>
                  <div className="absolute top-[3.67rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem]">
                    <img
                      className="relative w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/vuesaxlinearnote21.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.08rem] h-[0.96rem] shrink-0">
                      32 Task
                    </div>
                  </div>
                  <div className="absolute top-[3.67rem] left-[6.07rem] flex flex-row items-start justify-start gap-[0.32rem]">
                    <img
                      className="relative rounded-[0.64px] w-[0.96rem] h-[0.96rem]"
                      alt=""
                      src="/star-11.svg"
                    />
                    <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[4.79rem] h-[0.96rem] shrink-0">
                      4,9 (510 Reviews)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[24.83rem] left-[11.34rem] w-[27.46rem] flex flex-col items-start justify-start gap-[0.8rem]">
              <div className="self-stretch flex flex-row items-center justify-between">
                <div className="relative tracking-[-0.03em] leading-[150%] font-semibold flex items-center w-[7.82rem] shrink-0">
                  Upcoming Task
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.4rem]">
                  <img
                    className="relative w-[0.96rem] h-[0.96rem]"
                    alt=""
                    src="/arrowleft1.svg"
                  />
                  <img
                    className="relative w-[0.96rem] h-[0.96rem]"
                    alt=""
                    src="/arrowright1.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between text-[0.64rem]">
                <TaskContainer1
                  projectId="/image1@2x.png"
                  projectTitle="Creating Mobile App Design"
                  projectType="UI UX Design"
                  projectCompletionPercenta="75%"
                  projectDeadline="/iconlylighttime-circle1.svg"
                  projectRemainingDays="3 Days Left"
                  projectImageSize="/photo-11@2x.png"
                  projectImageId="/photo-21@2x.png"
                  projectImageSizeId="/photo-31@2x.png"
                  projectImageSizeIds="/photo-41@2x.png"
                  projectImageSizeIdsText="/photo-51@2x.png"
                />
                <TaskContainer1
                  projectId="/image2@2x.png"
                  projectTitle="Creating Perfect Website"
                  projectType="Web Developer"
                  projectCompletionPercenta="85%"
                  projectDeadline="/iconlylighttime-circle2.svg"
                  projectRemainingDays="4 Days Left"
                  projectImageSize="/photo-32@2x.png"
                  projectImageId="/photo-12@2x.png"
                  projectImageSizeId="/photo-52@2x.png"
                  projectImageSizeIds="/photo-22@2x.png"
                  projectImageSizeIdsText="/photo-42@2x.png"
                  propWidth="3.67rem"
                  propWidth1="9.58rem"
                  propLeft="9.26rem"
                />
              </div>
            </div>
            <div className="absolute top-[1.28rem] left-[41.35rem] rounded-[6.39px] bg-primary-0 w-[14.85rem] h-[6.39rem] overflow-hidden text-center text-[0.48rem] text-secondary-500">
              <div className="absolute top-[0.96rem] left-[0.96rem]">
                <Button
                  id="button-July 2022"
                  aria-controls="menu-July 2022"
                  aria-haspopup="true"
                  aria-expanded={monthOpen ? "true" : undefined}
                  onClick={handleMonthClick}
                  color="primary"
                >
                  July 2022
                </Button>
                <Menu
                  anchorEl={monthAnchorEl}
                  open={monthOpen}
                  onClose={handleMonthClose}
                />
              </div>
              <div className="absolute top-[2.95rem] left-[8.62rem] rounded-[14.66px] bg-secondary-500 w-[1.6rem] h-[2.87rem]" />
              <div className="absolute top-[3.19rem] left-[0.8rem] flex flex-row items-start justify-start gap-[0.72rem]">
                <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    S
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="outlined"
                    color="primary"
                  >
                    10
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    M
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="outlined"
                    color="primary"
                  >
                    11
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    T
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="outlined"
                    color="primary"
                  >
                    12
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    W
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="outlined"
                    color="primary"
                  >
                    13
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.48rem] text-primary-0">
                  <div className="relative tracking-[-0.02em] font-semibold flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    T
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="contained"
                    color="primary"
                  >
                    14
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    F
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="outlined"
                    color="primary"
                  >
                    15
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.48rem]">
                  <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[0.48rem] h-[0.64rem] shrink-0">
                    S
                  </div>
                  <Button
                    sx={{ width: 20.4375 }}
                    variant="outlined"
                    color="primary"
                  >
                    16
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute top-[8.94rem] left-[41.35rem] rounded-[6.39px] bg-primary-0 w-[14.85rem] h-[30.66rem] overflow-hidden text-[0.56rem] text-secondary-500">
              <div className="absolute top-[0.96rem] left-[0.96rem] flex flex-row items-start justify-start gap-[9.1rem]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[3.03rem] h-[0.8rem] shrink-0">
                  Task Today
                </div>
                <img
                  className="relative w-[0.8rem] h-[0.8rem]"
                  alt=""
                  src="/vuesaxlinearmore1.svg"
                />
              </div>
              <img
                className="absolute top-[2.56rem] left-[0.96rem] rounded-[6.39px] w-[12.93rem] h-[6.39rem] object-cover"
                alt=""
                src="/image3@2x.png"
              />
              <div className="absolute top-[9.74rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.16rem] text-[0.64rem]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[9.9rem] h-[0.8rem] shrink-0">
                  Creating Awesome Mobile Apps
                </div>
                <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-secondary-400 flex items-center w-[3.67rem] h-[0.64rem] shrink-0">
                  UI /UX Designer
                </div>
              </div>
              <div className="absolute top-[18.2rem] left-[0.96rem] flex flex-row items-start justify-start gap-[5.27rem] text-[0.64rem] text-dark-blue">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
                  Detail Task
                </div>
                <div className="relative text-[0.48rem] tracking-[-0.02em] font-medium text-desaturated-blue flex items-center w-[3.67rem] h-[0.8rem] shrink-0">
                  UI / UX Designer
                </div>
              </div>
              <div className="absolute top-[12.14rem] left-[0.96rem] flex flex-col items-start justify-start gap-[0.32rem] text-[0.64rem]">
                <div className="flex flex-row items-start justify-start gap-[6.87rem]">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.99rem] h-[0.8rem] shrink-0">
                    Progress
                  </div>
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-primary-500 text-right flex items-center w-[2.08rem] h-[0.8rem] shrink-0">
                    90%
                  </div>
                </div>
                <div className="relative w-[12.93rem] h-[0.64rem]">
                  <div className="absolute top-[0.16rem] left-[0rem] rounded-[5.11px] bg-royalblue w-[12.93rem] h-[0.32rem]" />
                  <div className="absolute top-[0.16rem] left-[0rem] rounded-tl-[5.11px] rounded-tr-none rounded-br-none rounded-bl-[5.11px] bg-soft-blue w-[10.78rem] h-[0.32rem]" />
                  <div className="absolute top-[0rem] left-[10.46rem] rounded-[50%] bg-primary-500 box-border w-[0.64rem] h-[0.64rem] border-[1.3px] border-solid border-primary-0" />
                </div>
              </div>
              <div className="absolute top-[16.91rem] left-[0.94rem] box-border w-[12.97rem] h-[0.04rem] border-t-[0.6px] border-solid border-whitesmoke" />
              <div className="absolute top-[14.69rem] left-[0.96rem] flex flex-row items-start justify-start gap-[0.32rem] text-[0.64rem]">
                <img
                  className="relative w-[0.96rem] h-[0.96rem]"
                  alt=""
                  src="/iconlylighttime-circle3.svg"
                />
                <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[3.67rem] h-[0.96rem] shrink-0">
                  1 Hour
                </div>
              </div>
              <div className="absolute top-[14.69rem] left-[10.38rem] flex flex-row items-start justify-start">
                <img
                  className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover"
                  alt=""
                  src="/photo-43@2x.png"
                />
                <img
                  className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                  alt=""
                  src="/photo-23@2x.png"
                />
                <img
                  className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                  alt=""
                  src="/photo-13@2x.png"
                />
                <img
                  className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                  alt=""
                  src="/photo-53@2x.png"
                />
                <img
                  className="relative rounded-[127.73px] w-[0.96rem] h-[0.96rem] object-cover ml-[-0.32rem]"
                  alt=""
                  src="/photo-33@2x.png"
                />
              </div>
              <Button
                className="absolute top-[27.94rem] left-[0.96rem]"
                variant="contained"
                color="primary"
              >
                Go To Detail
              </Button>
              <div className="absolute top-[19.8rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.48rem]">
                <Button
                  sx={{ width: 22.9921875 }}
                  variant="outlined"
                  color="primary"
                >
                  1
                </Button>
                <div className="w-[11.02rem] flex flex-row items-start justify-start">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[11.02rem] h-[0.96rem] shrink-0">
                    Understanding the tools in Figma
                  </div>
                </div>
              </div>
              <div className="absolute top-[22.03rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.48rem]">
                <Button
                  sx={{ width: 22.9921875 }}
                  variant="outlined"
                  color="primary"
                >
                  2
                </Button>
                <div className="w-[11.02rem] flex flex-row items-start justify-start">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[11.02rem] h-[0.96rem] shrink-0">
                    Understand the basics of making designs
                  </div>
                </div>
              </div>
              <div className="absolute top-[24.27rem] left-[0.96rem] flex flex-row items-center justify-start gap-[0.48rem]">
                <Button
                  sx={{ width: 22.9921875 }}
                  variant="outlined"
                  color="primary"
                >
                  3
                </Button>
                <div className="w-[11.02rem] flex flex-row items-start justify-start">
                  <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[11.02rem] h-[0.96rem] shrink-0">
                    Design a mobile application with figma
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[19.88rem] left-[0rem] rounded-[8.29px] bg-primary-0 shadow-[0px_12px_24px_rgba(84,_104,_231,_0.24)] w-[18.34rem] h-[11.81rem] overflow-hidden text-[0.73rem]">
            <div className="absolute top-[1.24rem] left-[1.24rem] flex flex-row items-center justify-start gap-[0.41rem] text-[0.83rem]">
              <img
                className="relative rounded-[165.79px] w-[2.49rem] h-[2.49rem] object-cover"
                alt=""
                src="/photo2@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[0.21rem]">
                <div className="relative tracking-[-0.02em] leading-[150%] font-semibold flex items-center w-[7.88rem] h-[1.04rem] shrink-0">
                  Julia Philips
                </div>
                <div className="relative text-[0.62rem] tracking-[-0.01em] text-desaturated-blue flex items-center w-[6.42rem] h-[0.83rem] shrink-0">
                  IOS Developer
                </div>
              </div>
            </div>
            <div className="absolute top-[1.87rem] left-[13.78rem] tracking-[-0.02em] leading-[150%] font-medium text-soft-blue text-right flex items-center w-[3.32rem] h-[1.24rem]">{`+ Follow  `}</div>
            <div className="absolute top-[9.33rem] left-[1.24rem] flex flex-row items-start justify-start gap-[0.41rem]">
              <img
                className="relative w-[1.24rem] h-[1.24rem]"
                alt=""
                src="/vuesaxlinearnote22.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[2.69rem] h-[1.24rem] shrink-0">
                60 Task
              </div>
            </div>
            <div className="absolute top-[9.33rem] left-[9.22rem] flex flex-row items-start justify-start gap-[0.41rem]">
              <img
                className="relative rounded-[0.83px] w-[1.24rem] h-[1.24rem]"
                alt=""
                src="/star-12.svg"
              />
              <div className="relative tracking-[-0.02em] leading-[150%] font-medium flex items-center w-[6.22rem] h-[1.24rem] shrink-0">
                4,9 (910 Reviews)
              </div>
            </div>
            <div className="absolute top-[4.97rem] left-[1.24rem] leading-[200%] font-medium text-gray-400 flex items-center w-[15.85rem] h-[3.11rem]">
              Hi, I'm Julia Philips. I'm a senior manager at Apple company . . .
            </div>
          </div>
          <div className="absolute top-[18.38rem] left-[16.75rem] rounded-3xs bg-soft-blue shadow-[0px_8px_24px_rgba(118,_118,_178,_0.24)] flex flex-row p-[0.63rem] items-start justify-start">
            <img
              className="relative w-[1.5rem] h-[1.5rem]"
              alt=""
              src="/send2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
