import { FunctionComponent } from "react";
import { Button } from "@mui/material";

type SpecialPremiumAccountContainerType = {
  dimensionCode?: string;
};

const SpecialPremiumAccountContainer: FunctionComponent<
  SpecialPremiumAccountContainerType
> = ({ dimensionCode }) => {
  return (
    <div className="rounded-[29.13px] bg-darkslategray-200 flex w-[90%] flex-row py-[0.85rem] px-[2.06rem] items-center justify-start gap-[0.91rem] text-left text-[2rem] text-white font-raleway">
  
    </div>
  );
};

export default SpecialPremiumAccountContainer;
