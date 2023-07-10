import { FunctionComponent, useEffect } from "react";
import PAMContainer from "../components/p-a-m-container";
import DashboardCard from "../components/dashboard-card";
import SpecialPremiumAccountContainer from "../components/special-premium-account-container";
import { Outlet } from "react-router-dom";



const Products: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <>
    <div className="relative w-full flex flex-col items-center justify-center">
      <div className="w-full overflow-hidden flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <div
            className=" bg-gray-200 [backdrop-filter:blur(40px)] w-full h-[64.56rem] overflow-hidden shrink-0 "
            data-animate-on-scroll
          >
             <img
              className="absolute top-[0rem] left-[16.7rem] rounded-44xl w-[43.84rem] h-[16.4rem]"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className="absolute top-[0rem] left-[16.7rem] rounded-44xl w-[43.84rem] h-[16.4rem]"
              alt=""
              src="/vector-5.svg"
            />
            <img
              className="absolute top-[8.78rem] left-[0rem] rounded-44xl w-[8.41rem] h-[40.06rem]"
              alt=""
              src="/vector-3.svg"
            />
            <img
              className="absolute top-[0rem] left-[53.35rem] rounded-44xl w-[28.02rem] h-[40.16rem]"
              alt=""
              src="/vector-4.svg"
            />
            <img
              className="absolute top-[0rem] left-[0rem] w-[138.44rem] h-[113.69rem]"
              alt=""
              src="/group-1.svg"
            />
            <PAMContainer
              productIds="/chart2.svg"
              productDimensions="/chart21.svg"
              productIdsAndDimensions="/diagram.svg"
              productIdsAndDimensions24="/diagram1.svg"
              productIdsAndDimensions22="/graph.svg"
              productIdsAndDimensions242="/graph1.svg"
              productIdsAndDimensions26="/sms.svg"
              productIdsAndDimensions262="/setting.svg"
            />
          
          </div>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  );
};

export default Products;
