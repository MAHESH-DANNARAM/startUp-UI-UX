import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";

type DashboardCardType = {
  productId?: string;
};

const DashboardCard: FunctionComponent<DashboardCardType> = ({ productId }) => {
  return (
    <div className="flex flex-row items-end justify-start gap-[6.03rem] text-left text-[1.52rem] text-white font-raleway">
      <div className="flex flex-col items-start justify-start gap-[0.25rem]"> 
        <div className="flex flex-row items-start justify-start">
          <b className="relative">Dashboard</b>
        </div>
        <div className="flex flex-row items-start justify-start text-[1.09rem]">
          <div className="relative font-light">
            see your account information in here!
          </div>
        </div>
      </div>
      <div className="rounded-[11.65px] bg-darkslategray-100 flex flex-row py-[0.61rem] pr-[1.03rem] pl-[0.91rem] items-center justify-center gap-[0.36rem] text-[0.91rem] font-inter">
        <div className="flex flex-row p-[0.61rem] items-start justify-start">
          <div className="relative font-light">
            can’t find something? search it here!
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <img
            className="relative w-[1.34rem] h-[1.34rem]"
            alt=""
            src={productId}
          />
        </div>
      </div>
    
    </div>
  );
};

export default DashboardCard;
