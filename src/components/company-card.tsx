import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";
import { Link } from "react-router-dom";

const CompanyCard: FunctionComponent = () => {
  return (
    <div className="absolute bottom-[0rem] left-[0rem] w-[90rem] h-[31.25rem] overflow-hidden text-left text-[1.5rem] text-soft-blue font-caption-desktop">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-dark-blue" />
      <div className="absolute top-[4.56rem] left-[8.75rem] flex flex-col items-start justify-start gap-[1rem] text-[3.13rem] text-off-white">
        <div className="relative w-[8.63rem] h-[3.25rem]">
          <div className="absolute top-[0rem] left-[0rem] tracking-[-0.02em] leading-[100%] font-semibold">
            <span>team</span>
            <span className="text-[3.25rem] text-soft-blue">.</span>
          </div>
        </div>
        <div className="relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] flex items-center w-[10.5rem]">{`Collaboration platform for mordern team `}</div>
      </div>
      <div className="absolute top-[27.5rem] left-[8.75rem] flex flex-row items-start justify-start text-[0.88rem] text-off-white">
        <div className="relative tracking-[0.01em] leading-[1.44rem]">
          © Copyright Team Inc.
        </div>
      </div>
      <div className="absolute top-[5.94rem] left-[27.38rem] w-[7rem] h-[8.69rem]">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">
          Company
        </div>
        <div className="absolute top-[2.88rem] left-[0rem] flex flex-col items-start justify-start gap-[0.75rem] text-[0.88rem] text-off-white">
          <Link className="relative tracking-[0.01em] leading-[1.44rem] text-white" to={""}>
            Product
          </Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            Blog
          </Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            Support
          </Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem] hidden  text-white" to={""}>
            Support
          </Link>
        </div>
      </div>
      <div className="absolute top-[5.94rem] left-[39.69rem] w-[8.5rem] h-[10.88rem]">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">
          Features
        </div>
        <div className="absolute top-[2.88rem] left-[0rem] flex flex-col items-start justify-start gap-[0.75rem] text-[0.88rem] text-off-white">
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            Screen Sharing
          </Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>{`iOS & Android Apps`}</Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            File Sharing
          </Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            User Managment
          </Link>
        </div>
      </div>
      <div className="absolute top-[5.94rem] left-[52.13rem] w-[8.63rem] h-[10rem]">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">
          Contact Us
        </div>
        <div className="absolute top-[2.75rem] left-[0rem] flex flex-col items-start justify-center gap-[0.75rem] text-[0.88rem] text-off-white">
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            info@teamapp.com
          </Link>
          <Link className="relative tracking-[0.01em] leading-[1.44rem]  text-white" to={""}>
            1-800-200-300
          </Link>
          <div className="relative tracking-[0.01em] leading-[1.44rem]">
            <p className="m-0">1010 Sunset Blv.</p>
            <p className="m-0">Palo Alto, California</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[5.94rem] left-[64.56rem] w-[16.75rem] h-[7.81rem]">
        <div className="absolute top-[0rem] left-[0rem] leading-[1.88rem]">{`Stay up to date `}</div>
        <div className="absolute top-[2.88rem] left-[0rem] text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-off-white">
          Subscribe to our newseller
        </div>
        <TextField
          className="[border:none] bg-[transparent] absolute top-[4.94rem] left-[0rem]  bg-white"
          sx={{ width: 268 }}
          // color="primary"
          variant="outlined"
          type="text"
          label="Email"
          placeholder="Placeholder"
          size="medium"
          margin="none"
        />
      </div>
    </div>
  );
};

export default CompanyCard;
