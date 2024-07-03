import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";
import { formatNumberWithCommas } from "./GameCard";
import "./game-card.css";
import { Chip } from "@nextui-org/chip";

const GenrePlatormCard = ({
  img,
  name = "Acme camera",
  games_count = 0,
  gameName = "Game Name",
  added = 0,
  children,
}) => {
  return (
    <Card
      isFooterBlurred
      className="w-full max-w-[350px] h-[550px] col-span-12 sm:col-span-5 break-inside-avoid genre-platform-card"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          Popular items: {formatNumberWithCommas(games_count)}
        </p>
        <h4 className=" font-bold text-2xl">{name}</h4>
      </CardHeader>
      <div className="relative w-full h-full">
        <Image
          isZoomed
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full -translate-y-6 object-cover gp-image"
          src={img}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      <CardFooter className="flex flex-col gap-2 absolute bg-white/20 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        {children}

        <Button
          className="text-tiny w-full"
          color="primary"
          radius="full"
          size="sm"
        >
          View game in genre 🎮
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GenrePlatormCard;

function HighestAddedGames({ gameName = "Acme camera", games_count = 0 }) {
  return (
    <div className="w-full flex justify-between items-center">
      <span className="text-xs">{gameName}</span>
      <span className="text-xs">{formatNumberWithCommas(games_count)}</span>
    </div>
  );
}
