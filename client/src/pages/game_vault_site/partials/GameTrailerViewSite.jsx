import { Button } from "@nextui-org/button";
import React, { useEffect, useState, useRef } from "react";
import "../../../css/game_trailers.css";
import { Progress } from "@nextui-org/progress";
import { FaPlay, FaPause } from "react-icons/fa6";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

import { PiSpeakerHighFill, PiSpeakerSlash } from "react-icons/pi";
import Logotext from "../../../components/Logotext";
import { Tooltip } from "@nextui-org/tooltip";
import { Input } from "@nextui-org/input";
import { CiSearch } from "react-icons/ci";
import { Typewriter } from "react-simple-typewriter";

function GameTrailersViewSite() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const words = [
    "Get Started with GameVault🎮",
    "Discover Your Next Favorite Game🕹️",
    "Unleash Epic Adventures with GameVault🌟",
    "Find Games Tailored Just for You🎯",
    "Dive Into New Worlds and Challenges🌍",
    "Level Up Your Game Discovery🔝",
    "Where Gamers Find Their Next Quest🗺️",
    "Play, Explore, Repeat♻️",
    "GameVault: Your Ultimate Game Guide📖",
    "Join the GameVault Community👾",
    "Unlock a Universe of Games with GameVault🔓",
  ];

  const trailers = [
    "client/src/assets/trailer1.mp4",
    "client/src/assets/trailer2.mp4",
    "client/src/assets/trailer3.mp4",
    // "client/src/assets/trailer4.mp4",
    "client/src/assets/trailer6.mp4",
    "client/src/assets/trailer7.mp4",
  ];

  useEffect(() => {
    /**
     * Handle keydown events and perform specific actions based on the key pressed.
     *
     * @param {Event} event - The keydown event object.
     */
    const handleKeydown = (event) => {
      switch (event.code) {
        case "ArrowRight":
          event.preventDefault();
          handleNextVideo();
          break;
        case "ArrowLeft":
          event.preventDefault();
          handlePreviousVideo();
          break;
        case "Space":
          event.preventDefault();
          setIsPlaying((prev) => !prev);
          break;
        case "KeyM":
          event.preventDefault();
          setIsMuted((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, currentVideoIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setProgress((currentTime / duration) * 100);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [currentVideoIndex, isPlaying]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % trailers.length);
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % trailers.length);
  };

  const handlePreviousVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + trailers.length) % trailers.length
    );
  };

  return (
    <div className=" relative overflow-hidden w-full rounded-large">
      <div className="h-[500px] max-w-[1000px] w-full mx-auto mobile:h-[380px]">
        <video
          ref={videoRef}
          src={trailers[currentVideoIndex]}
          muted={isMuted}
          onEnded={handleVideoEnded}
          // autoPlay
          controls
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            scale: "1.4",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="video-overlay"></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col gap-5 z-20  px-10 mobile:px-5 mobile:gap-3">
        <span className="text-white text-5xl font-bold text-center mx-5 sm-tab:text-4xl sm-scard-tab:text-3xl xs-tab:text-2xl mobile:text-xl">
          <Typewriter
            cursor
            cursorBlinking
            delaySpeed={120}
            deleteSpeed={25}
            loop={0}
            typeSpeed={55}
            words={words}
            cursorStyle="•"
          />
        </span>
        <span className="text-center text-default-500 text-xl mobile:text-sm">
          Hi👋, Welcome to GameVault. This world 🌍 awaits you🫵
        </span>
        <Input
          placeholder="Find a game..."
          className="w-[70%] sm-scard-tab:w-[95%] "
          size="lg"
          startContent={<CiSearch className="text-2xl" />}
          endContent={
            <Button size="sm" color="primary">
              Search
            </Button>
          }
        />
      </div>
      // TODO: Optimize controls code
      <div className="absolute top-5 right-5 z-30 flex gap-2">
        <Tooltip showArrow={true} content="Previous trailer">
          <Button
            variant="flat"
            onClick={handlePreviousVideo}
            isIconOnly
            size="sm"
          >
            <TbPlayerTrackPrevFilled />
          </Button>
        </Tooltip>

        <Tooltip showArrow={true} content={isPlaying ? "Pause" : "Play"}>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="flat"
            isIconOnly
            size="sm"
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
        </Tooltip>
        <Tooltip showArrow={true} content={isPlaying ? "Mute" : "Unmute"}>
          <Button
            variant="flat"
            onClick={() => setIsMuted(!isMuted)}
            isIconOnly
            size="sm"
          >
            {isMuted ? <PiSpeakerSlash /> : <PiSpeakerHighFill />}
          </Button>
        </Tooltip>

        <Tooltip showArrow={true} content="Next trailer">
          <Button variant="flat" onClick={handleNextVideo} isIconOnly size="sm">
            <TbPlayerTrackNextFilled />
          </Button>
        </Tooltip>
      </div>
      <div className="progress-bars ">
        {trailers.map((_, index) => (
          <div key={index} className="progress-bar">
            <Progress
              size="sm"
              color="default"
              aria-label={`Loading video ${index + 1}`}
              value={index === currentVideoIndex ? progress : 0}
              className="progress"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameTrailersViewSite;
