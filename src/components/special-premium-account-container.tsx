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
      <section className="py-6">
        <div className="container">
          <div className="grid grid-cols-2 gap-4">
            <div className="max-w-xl">
              <label className="flex justify-center w-full h-14 px-4 transition bg-transparent bottom-2 outline outline-sky-600 rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                <span className="flex items-center space-x-2">
                  <input className=" bg-sky-600" type="file" />

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <span className="font-medium text-white text-sm">
                    or drag and drop here to upload
                  </span>
                </span>
                <input type="file"  name="file_upload" className="hidden bg-white" />
              </label>
            </div>
            <div className="max-w-xl">
              <Button variant="contained" className="">uplode</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialPremiumAccountContainer;
