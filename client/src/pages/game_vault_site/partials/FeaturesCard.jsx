import { Image } from "@nextui-org/image";
import React from "react";
import img from "../../../assets/1.jpg";

const FeaturesCard = ({
  src = img,
  title = "Title...",
  description = "description",
}) => {
  return (
    <div className="flex flex-col gap-5 w-full max-w-[300px] xs-tab:max-w-full">
      <Image src={src} alt="" />
      <div className="flex flex-col">
        <p>{title}</p>
        <span className="text-sm text-default-500"> {description}</span>
      </div>
    </div>
  );
};

export default FeaturesCard;
