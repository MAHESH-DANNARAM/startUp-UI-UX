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
  
      </div>
    </div>
  );
};

export default ChatContainer;
