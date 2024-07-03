import "./game-card.css";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React, { useEffect, useState } from "react";
import img from "../assets/1.jpg";

import { FaWindows, FaPlaystation, FaXbox, FaPlus } from "react-icons/fa6";
import { IoLogoAndroid, IoIosPhonePortrait } from "react-icons/io";
import { SiNintendo3Ds } from "react-icons/si";
import { Chip } from "@nextui-org/chip";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { IoIosArrowForward } from "react-icons/io";

const GameCard = ({
  gameImage = img,
  platforms = [
    <FaWindows />,
    <FaPlaystation />,
    <FaXbox />,
    <SiNintendo3Ds />,
    <IoIosPhonePortrait />,
    <IoLogoAndroid />,
  ],
  metascore = 0,
  hasMetascore = true,
  gameName = "Game Name",
  added = 0,
  status = "recommended",
  releaseDate = "2013-09-17",
  genres = ["Anime", "Action", "Sci-Fi"],
  rank = 12,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gameImage.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [gameImage]); */

  return (
    <Card className="w-[320px] shadow-sm rounded-medium bg-content2  break-inside-avoid">
      <div className="relative rounded-ss-medium rounded-se-medium overflow-hidden">
        {/*  {gameImage.map((imageUrl, index) => (
          <img
            // removeWrapper
            key={index}
            src={imageUrl}
            isZoomed
            radius="none"
            alt={`Screenshot ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))} */}
        <Image src={gameImage} isZoomed radius="none" />
      </div>
      <CardBody className="flex flex-col gap-3 px-4 ">
        <div className="flex items-center justify-between rounded-small">
          <div className="flex gap-1">
            {platforms.map((platform) => (
              <div key={platform}>{getPlatformIcon(platform)}</div>
            ))}
          </div>
          {hasMetascore && (
            <Chip
              color={getMetascoreColor(metascore)}
              variant="flat"
              size="sm"
              radius="sm"
            >
              {metascore}
            </Chip>
          )}
        </div>
        {/* ================== */}

        <p className="text-xl font-bold">
          {gameName} {getStatus(status)}
        </p>
        <Chip variant="flat" radius="sm" size="sm" startContent={<FaPlus />}>
          {added}
        </Chip>
      </CardBody>
      <CardFooter className="flex flex-col items-center gap-3">
        <div className="flex justify-between  w-full ">
          <span className="text-xs text-default-500">Release date</span>{" "}
          <span className="text-xs text-default-500">
            {formatDate(releaseDate)}
          </span>
        </div>
        <Divider />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-default-500">Genre</span>{" "}
          <div className="text-xs text-default-500 flex gap-1">
            {genres.map((genre) => (
              <Chip key={genre} size="sm" variant="flat">
                {genre}
              </Chip>
            ))}
          </div>
        </div>
        <Divider />
        <div className="flex justify-between items-center w-full">
          <span className="text-xs text-default-500">Chart</span>{" "}
          <span className="text-xs text-default-500">
            #{rank} Top {getYearFromDate(releaseDate)}
          </span>
        </div>
        <Button
          variant="flat"
          endContent={<IoIosArrowForward />}
          className="w-full"
        >
          Show more like this
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;

function getYearFromDate(dateString) {
  const date = new Date(dateString);
  return date.getFullYear();
}

function getMetascoreColor(metascore = 0) {
  if (metascore >= 80) return "success";
  else if (metascore >= 60) return "warning";
  else if (metascore >= 40) return "primary";
  else return "danger";
}

function getStatus(status) {
  if (status === "exceptional") {
    return "🎯";
  } else if (status === "recommended") {
    return "👍";
  } else if (status === "meh") {
    return "😐";
  } else if (status === "skip") {
    return "⛔";
  } else {
    return "🙁";
  }
}
function getPlatformIcon(platform) {
  if (platform === "pc") return <FaWindows />;
  else if (platform === "playstation") return <FaPlaystation />;
  else if (platform === "xbox") return <FaXbox />;
  else if (platform === "nintendo") return <SiNintendo3Ds />;
  else if (platform === "ios") return <IoIosPhonePortrait />;
  else if (platform === "android") return <IoLogoAndroid />;
  else return null;
}

function formatDate(inputDate) {
  // Parse the input date string
  const date = new Date(inputDate);

  // Define options for toLocaleDateString
  const options = { year: "numeric", month: "short", day: "numeric" };

  // Format the date
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}
