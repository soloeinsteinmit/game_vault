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

function GameTrailersView() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const trailers = [
    "client/src/assets/trailer1.mp4",
    "client/src/assets/trailer2.mp4",
    "client/src/assets/trailer3.mp4",
    "client/src/assets/trailer4.mp4",
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
    <div className="video-container overflow-hidden">
      <Logotext className="logoText text-sm font-bold" />
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
      <div className="video-overlay"></div>
      // TODO: Optimize controls code
      <div className="controls">
        <Tooltip showArrow={true} content="Previous trailer">
          <Button variant="flat" onClick={handlePreviousVideo} isIconOnly>
            <TbPlayerTrackPrevFilled />
          </Button>
        </Tooltip>

        <Tooltip showArrow={true} content={isPlaying ? "Pause" : "Play"}>
          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            variant="flat"
            isIconOnly
          >
            {isPlaying ? <FaPause /> : <FaPlay />}
          </Button>
        </Tooltip>
        <Tooltip showArrow={true} content={isPlaying ? "Mute" : "Unmute"}>
          <Button
            variant="flat"
            onClick={() => setIsMuted(!isMuted)}
            isIconOnly
          >
            {isMuted ? <PiSpeakerSlash /> : <PiSpeakerHighFill />}
          </Button>
        </Tooltip>

        <Tooltip showArrow={true} content="Next trailer">
          <Button variant="flat" onClick={handleNextVideo} isIconOnly>
            <TbPlayerTrackNextFilled />
          </Button>
        </Tooltip>
      </div>
      <p className="flex flex-col wText font-pt-sans text-4xl font-black">
        <span>THIS WORLD🌍</span> <span>AWAITS YOU🫵</span>
      </p>
      <div className="progress-bars">
        {trailers.map((_, index) => (
          <div key={index} className="progress-bar">
            <Progress
              size="sm"
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

export default GameTrailersView;
