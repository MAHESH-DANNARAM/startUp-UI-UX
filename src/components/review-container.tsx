import { FunctionComponent } from "react";

type ReviewContainerType = {
  productIds?: string;
  productIdsText?: string;
  productDimensions?: string;
  productIdsTextV2?: string;
  productIdsV3?: string;
  productDimensionsText?: string;
  productIdsTextV4?: string;
  artistNames?: string;
  executiveNames?: string;
};

const ReviewContainer: FunctionComponent<ReviewContainerType> = ({
  productIds,
  productIdsText,
  productDimensions,
  productIdsTextV2,
  productIdsV3,
  productDimensionsText,
  productIdsTextV4,
  artistNames,
  executiveNames,
}) => {
  return (
    <div className="bg-primary-0 shadow-[0px_16px_24px_rgba(118,_118,_178,_0.24)] w-[22.94rem] flex flex-col py-[2.75rem] px-[2.06rem] box-border items-start justify-start gap-[2.5rem] min-w-[16.25rem] max-w-[22.94rem] text-left text-[1.13rem] text-gray-400 font-caption-desktop">
      <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem]">
        <div className="flex flex-row items-start justify-start">
          <img
            className="relative w-[2.03rem] h-[2rem]"
            alt=""
            src={productIds}
          />
          <img
            className="relative w-[2.03rem] h-[2rem]"
            alt=""
            src={productIdsText}
          />
          <img
            className="relative w-[2.03rem] h-[2rem]"
            alt=""
            src={productDimensions}
          />
          <img
            className="relative w-[2.03rem] h-[2rem]"
            alt=""
            src={productIdsTextV2}
          />
          <img
            className="relative w-[2.03rem] h-[2rem]"
            alt=""
            src={productIdsV3}
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex-1 relative leading-[1.69rem]">
            {productDimensionsText}
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[0.88rem] text-[1.5rem] text-dark-blue">
        <img
          className="relative w-[3.5rem] h-[3.5rem] overflow-hidden shrink-0"
          alt=""
          src={productIdsTextV4}
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.13rem]">
          <div className="self-stretch relative leading-[1.88rem]">
            {artistNames}
          </div>
          <div className="self-stretch relative text-[0.88rem] tracking-[0.01em] leading-[1.44rem] text-desaturated-blue">
            {executiveNames}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;
