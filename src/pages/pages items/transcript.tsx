import { FunctionComponent } from "react";
import Products from "../Products";
import SpecialPremiumAccountContainer from "../../components/special-premium-account-container";
import DashboardCard from "../../components/dashboard-card";



const Transcript: FunctionComponent = ({

}) => {
  return (
        <div className="absolute top-[1.63rem] left-[21.88rem] flex flex-col items-start justify-center gap-[3.25rem]">
          <DashboardCard productId="/vuesaxlinearsearchnormal.svg" />
          <SpecialPremiumAccountContainer dimensionCode="/group-11.svg" />
        </div>
  );
};

export default Transcript;
