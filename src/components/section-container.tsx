import { FunctionComponent } from "react";
import ReviewContainer from "./review-container";

const SectionContainer: FunctionComponent = () => {
  return (
    <div className="absolute top-[248.44rem] left-[0rem] w-[132.25rem] flex flex-col items-center justify-center text-left text-[1.13rem] text-gray-400 font-caption-desktop">
      <div className="self-stretch relative h-[32.31rem] overflow-hidden shrink-0">
        <div className="absolute top-[0rem] left-[10rem] flex flex-row flex-wrap items-start justify-between">
          <ReviewContainer
            productIds="/star.svg"
            productIdsText="/star1.svg"
            productDimensions="/star2.svg"
            productIdsTextV2="/star3.svg"
            productIdsV3="/star4.svg"
            productDimensionsText="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
            productIdsTextV4="/avatar.svg"
            artistNames="Chealsea Morgan"
            executiveNames="CEO ot Subway"
          />
          <ReviewContainer
            productIds="/star.svg"
            productIdsText="/star1.svg"
            productDimensions="/star2.svg"
            productIdsTextV2="/star3.svg"
            productIdsV3="/star5.svg"
            productDimensionsText="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis."
            productIdsTextV4="/avatar1.svg"
            artistNames="Nick Cave"
            executiveNames="CMO ot Nokia"
          />
          <ReviewContainer
            productIds="/star6.svg"
            productIdsText="/star7.svg"
            productDimensions="/star8.svg"
            productIdsTextV2="/star9.svg"
            productIdsV3="/star5.svg"
            productDimensionsText="Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo."
            productIdsTextV4="/avatar2.svg"
            artistNames="Lana Rosenfeld"
            executiveNames="Senior VP ot Pinterest"
          />
          <ReviewContainer
            productIds="/star10.svg"
            productIdsText="/star11.svg"
            productDimensions="/star12.svg"
            productIdsTextV2="/star13.svg"
            productIdsV3="/star14.svg"
            productDimensionsText="Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc."
            productIdsTextV4="/avatar3.svg"
            artistNames="Giorgio Moroder"
            executiveNames="CTO ot Glovo"
          />
          <ReviewContainer
            productIds="/star15.svg"
            productIdsText="/star16.svg"
            productDimensions="/star17.svg"
            productIdsTextV2="/star18.svg"
            productIdsV3="/star19.svg"
            productDimensionsText="Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis. In a laoreet purus."
            productIdsTextV4="/avatar4.svg"
            artistNames="Young Liu"
            executiveNames="CAO ot Foxconn"
          />
        </div>
        <div className="absolute top-[29.81rem] left-[71.31rem] flex flex-row p-[0.25rem] items-start justify-start gap-[1.5rem]">
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/arrow.svg"
          />
          <img
            className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
            alt=""
            src="/arrow1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionContainer;
