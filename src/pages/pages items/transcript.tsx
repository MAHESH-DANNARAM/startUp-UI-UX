import { FunctionComponent } from "react";
import Products from "../Products";
import SpecialPremiumAccountContainer from "../../components/special-premium-account-container";
import DashboardCard from "../../components/dashboard-card";

type PAMContainerType = {
  productIds?: string;
  productDimensions?: string;
  productIdsAndDimensions?: string;
  productIdsAndDimensions24?: string;
  productIdsAndDimensions22?: string;
  productIdsAndDimensions242?: string;
  productIdsAndDimensions26?: string;
  productIdsAndDimensions262?: string;
};

const Transcript: FunctionComponent<PAMContainerType> = ({
  productIds,
  productDimensions,
  productIdsAndDimensions,
  productIdsAndDimensions24,
  productIdsAndDimensions22,
  productIdsAndDimensions242,
  productIdsAndDimensions26,
  productIdsAndDimensions262,
}) => {
  return (
        <div className="absolute top-[1.63rem] left-[21.88rem] flex flex-col items-start justify-center gap-[3.25rem]">
          <DashboardCard productId="/vuesaxlinearsearchnormal.svg" />
          <SpecialPremiumAccountContainer dimensionCode="/group-11.svg" />
        </div>
  );
};

export default Transcript;
