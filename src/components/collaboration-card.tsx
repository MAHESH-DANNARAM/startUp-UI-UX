import { FunctionComponent } from "react";
import { Button, TextField, InputAdornment, Icon } from "@mui/material";
import { Link } from "react-router-dom";

const CollaborationCard: FunctionComponent = () => {
  return (
    <>
    <div className="continer">
    <div className="absolute top-[0rem] left-[0rem] bg-primary-0 w-[90rem] h-[50rem] overflow-hidden text-left text-[3.13rem] text-off-white font-caption-desktop">
      <img className="absolute top-[0rem] left-[0rem] w-[90rem] h-[50rem] object-cover"
        alt=""
        src="/ai.jpeg"
      />
      <div className="absolute top-[2.5rem] left-[calc(50%_-_580px)] w-[72.5rem] flex flex-row items-center justify-between">
        <div className="relative w-[8.63rem] h-[3.25rem]">
          <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
            <span>AI Company</span>
            <span className="text-[3.25rem] text-soft-blue">.</span>
          </div>
        </div>
        <div className="hidden flex-row items-start justify-start">
          <img
            className="relative w-[1.5rem] h-[1.5rem]"
            alt=""
            src="/iconnavigationmenu-24px.svg"
          />
        </div>
        <div className="flex-row items-center justify-between flex space-x-6  text-[1rem]">

          

          <Link className="relative [text-decoration:underline] leading-[150%] text-slate-50 font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]" to="/product">

            Product
          </Link>
          <Link className="relative [text-decoration:underline] leading-[150%] text-slate-50 font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]" to={"/"}>
            Blog
          </Link>
          <Link className="relative [text-decoration:underline] leading-[150%] text-slate-50 font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]" to={"/"}>
            Support
          </Link>
          <Link className="relative [text-decoration:underline] leading-[150%] text-slate-50 font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]" to={"/"}>
            Upcoming 
          </Link>
          <Link className="relative [text-decoration:underline] leading-[150%] text-slate-50 font-medium [text-shadow:0px_8px_16px_rgba(35,_35,_64,_0.6)]" to={"/"}>
            API
          </Link>
          <Button variant="contained" color="primary">
            Get Access
          </Button>
        </div>
      </div>
      <form className="absolute top-[15.75rem] left-[8.75rem] flex flex-col items-start justify-start gap-[3.5rem]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
          <b className="self-stretch relative text-[3.13rem] leading-[4rem] font-caption-desktop text-off-white text-left">
            Instant collaboration for remote teams
          </b>
          <div className="relative text-[1.13rem] leading-[1.69rem] font-caption-desktop text-off-white text-left inline-block w-[24.81rem]">
            All-in-one place for your remote team to chat, collaborate and track
            project progress.
          </div>
        </div>
        <div className="w-[35.19rem] flex flex-row items-start justify-start gap-[1rem]  text-white border-white">
          <TextField
            className="[border:none] bg-[transparent] self-stretch"
            sx={{ width: 298 }}
            color="primary"
            variant="outlined"
            type="text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>arrow_forward_sharp</Icon>
                </InputAdornment>
              ),
            }}
            label="Email"
            placeholder="Placeholder"
            size="medium"
            margin="none"
          />
          <Button variant="contained" color="primary">
            Button
          </Button>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};

export default CollaborationCard;
