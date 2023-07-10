import { FunctionComponent } from "react";
import { TextField, InputAdornment, Icon } from "@mui/material";

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

const PAMContainer: FunctionComponent<PAMContainerType> = ({
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
    <div className="absolute top-[0.879rem] left-[-0.06rem] flex flex-col justify-center gap-[9.38rem] text-left text-[1.56rem] text-white font-raleway">
      <div className="">
        <div className="w-[18.06rem] flex flex-row py-[0rem] px-[2.13rem] box-border items-center justify-start gap-[1.63rem]">
          <div className="flex flex-col items-start justify-center">
            <div className="flex flex-row py-[0.71rem] px-[0rem] items-start justify-start">
              <b className="relative">PAM</b>
            </div>
            <div className="flex flex-row py-[0.71rem] px-[0rem] items-start justify-start mt-[-0.78rem] text-[0.78rem]">
              <div className="absolute">( Purchase account management )</div>
            </div>
          </div>
        </div>
        <div className="w-[13.75rem] h-[31.61rem] flex flex-col items-center  gap-[1.19rem] text-[1.02rem] text-gray-100 font-rubik">
          <div className="w-[9.49rem] h-[21.73rem] flex flex-col items-start justify-center gap-[0.5rem]">
            <div className="flex flex-row items-center justify-start gap-[0.34rem]">
              <div className="w-[1.53rem] h-[1.51rem] flex flex-col py-[0rem] px-[0rem] box-border items-start justify-end">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[1.39rem] h-[1.39rem]"
                    alt=""
                    src={productIds}
                  />
                </div>
                <div className="[filter:blur(27.23px)] flex flex-row items-start justify-start opacity-[0.2] mt-[-1.37rem]">
                  <img
                    className="relative w-[1.51rem] h-[1.51rem]"
                    alt=""
                    src={productDimensions}
                  />
                </div>
              </div>

              <div className="flex flex-row p-[0.68rem] items-start justify-start">
                <div className="relative">Campaigns</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.34rem]">
              <div className="w-[1.53rem] h-[1.51rem] flex flex-col py-[0rem] px-[0rem] box-border items-start justify-end">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[1.39rem] h-[1.39rem]"
                    alt=""
                    src={productIdsAndDimensions}
                  />
                </div>
                <div className="[filter:blur(27.23px)] flex flex-row items-start justify-start opacity-[0.2] mt-[-1.37rem]">
                  <img
                    className="relative w-[1.51rem] h-[1.51rem]"
                    alt=""
                    src={productIdsAndDimensions24}
                  />
                </div>
              </div>
              <div className="flex flex-row p-[0.68rem] items-start justify-start">
                <div className="relative">Reports</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[0.34rem]">
              <div className="w-[1.51rem] h-[1.51rem] flex flex-col items-start justify-end">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="relative w-[1.39rem] h-[1.39rem]"
                    alt=""
                    src={productIdsAndDimensions22}
                  />
                </div>
                <div className="[filter:blur(27.23px)] flex flex-row items-start justify-start opacity-[0.2] mt-[-1.37rem]">
                  <img
                    className="relative w-[1.51rem] h-[1.51rem]"
                    alt=""
                    src={productIdsAndDimensions242}
                  />
                </div>
              </div>
              <div className="flex flex-row p-[0.68rem] items-start justify-start">
                <div className="relative">Analitics</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.34rem]">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative w-[1.63rem] h-[1.63rem]"
                  alt=""
                  src={productIdsAndDimensions26}
                />
              </div>
              <div className="flex flex-row p-[0.68rem] items-start justify-start">
                <div className="relative">Inbox</div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-[0.34rem]">
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative w-[1.63rem] h-[1.63rem]"
                  alt=""
                  src={productIdsAndDimensions262}
                />
              </div>
              <div className="flex flex-row p-[0.68rem] items-start justify-start">
                <div className="relative">Setting</div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </div>
  );
};

export default PAMContainer;
