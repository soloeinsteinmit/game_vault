import { Input } from "@nextui-org/input";
import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import PasswordInput from "./PasswordInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";

function LoginForm() {
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
  return (
    <div className="flex flex-col justify-between gap-5 p-5 max-w-[500px] w-full h-dvh bg-content1">
      <div className="font-pt-sans flex justify-between ">
        <div className="flex gap-1 items-center text-primary hover:text-primary-200 transition-all duration-300">
          <Link to="gamevault.io">Learn more</Link>{" "}
          <RiInformation2Fill className="text-base mt-1" />
        </div>
        <p className="text-sm font-pt-sans text-right">
          <span className="text-default-500">HAVE AND ACCOUNT?</span>{" "}
          <Link
            to={"gamevault.sign-in"}
            className="font-bold text-primary hover:text-primary-200 transition-all duration-300"
          >
            SIGN UP
          </Link>
        </p>
      </div>

      {/* ---------------------------------------------------------------------- */}

      <div>
        <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
          <h1 className="flex flex-col font-pt-sans font-extrabold text-4xl">
            LOG IN
            <span className="font-normal text-sm text-default-400">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={2000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={words}
                cursorStyle="•"
              />
            </span>
          </h1>
          <form className="flex flex-col gap-4">
            <Input
              isClearable
              isRequired
              type="text"
              label="Username"
              className="text-xs"
              // size="sm"
            />
            <PasswordInput />

            <Link to="/dashboard" className="w-full">
              <Button
                className="font-pt-sans font-bold h-12 w-full"
                color="primary"
              >
                CONTINUE
              </Button>
            </Link>
          </form>

          {/* ---------------------------------------------------------------------- */}

          <Divider className="my-4" />

          {/* ---------------------------------------------------------------------- */}

          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm font-pt-sans">or continue with</p>
            <div className="flex gap-1 font-bold font-pt-sans ">
              <Button startContent={<FcGoogle />} className="w-full font-bold">
                GOOGLE
              </Button>
              <Button
                startContent={<FaFacebookF className="text-primary " />}
                className="w-full font-bold"
              >
                FACEBOOK
              </Button>
            </div>
            <p className="text-sm font-pt-sans text-default-400 font-bold">
              {" "}
              by registering you agree to our{" "}
              <span className="text-primary">Terms & Conditions</span>
            </p>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------------- */}

      <p className="text-sm font-pt-sans text-right text-default-500 mt-2 mb-0">
        Made with <span>❤️‍🔥</span> by <u>Solomon Eshun</u> with{" "}
        <u className="relative inline-block">
          <a
            href="https://rawg.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 no-underline hover:text-primary-700 hover:underline transition duration-300"
          >
            RAWG API
          </a>
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-500 transition-transform transform scale-x-0 origin-left hover:scale-x-100"></span>
        </u>
      </p>
    </div>
  );
}

export default LoginForm;
