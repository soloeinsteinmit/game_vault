import React from "react";
import NavLinkCard from "../../components/NavLinkCard";

import {
  FaStar,
  FaFireFlameCurved,
  FaForwardFast,
  FaCrown,
  FaCalendarDays,
  FaRankingStar,
  FaGhost,
  FaCode,
  FaUsersLine,
  FaTags,
} from "react-icons/fa6";
import { LiaTelegramPlane } from "react-icons/lia";

import { HiMiniTrophy } from "react-icons/hi2";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";

import { User } from "@nextui-org/user";

const LeftNav = () => {
  return (
    <div className="flex flex-col gap-3 sticky top-24 w-[220px] max-w-[300px] px-5 text-xs overflow-auto h-[82vh] xl-tab:hidden">
      <User
        name="Jane Doe"
        classNames={{
          name: "text-xs",
          description: "text-[0.65rem]",
        }}
        className="items-center justify-start"
        description="Product Designer"
        avatarProps={{
          size: "sm",
          src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
        }}
      />

      <div className="flex flex-col gap-2">
        <p className="text-lg font-extrabold ">Browse</p>
        <div className="flex flex-col gap-2">
          <NavLinkCard
            to="/dashboard"
            icon={<FaRankingStar />}
            linkName="Top picks"
          />
          <NavLinkCard
            to="platforms"
            icon={<IoGameController />}
            linkName="Platforms"
          />
          <NavLinkCard to="genres" icon={<FaGhost />} linkName="Genres" />
          <NavLinkCard
            to="developers"
            icon={<FaCode />}
            linkName="Developers"
          />
          <NavLinkCard
            to="publishers"
            icon={<LiaTelegramPlane />}
            linkName="Publishers"
          />
          {/* <NavLinkCard
            to="creators"
            icon={<FaUsersLine />}
            linkName="Creators"
          /> */}
          <NavLinkCard to="tags" icon={<FaTags />} linkName="Tags" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-extrabold ">New Releases</p>
        <div className="flex flex-col gap-2">
          <NavLinkCard icon={<FaStar />} linkName="Last 30 days" />
          <NavLinkCard icon={<FaFireFlameCurved />} linkName="This week" />
          <NavLinkCard icon={<FaForwardFast />} linkName="Next week" />
          <NavLinkCard icon={<FaCalendarDays />} linkName="Release calender" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-extrabold ">Top</p>
        <div className="flex flex-col gap-2">
          <NavLinkCard icon={<HiMiniTrophy />} linkName="Best of the year" />
          <NavLinkCard
            icon={<BsFillBarChartLineFill />}
            linkName="Popular in 2023"
          />
          <NavLinkCard icon={<FaCrown />} linkName="All top 250" />
        </div>
      </div>
      {/* <p className="text-lg font-extrabold ">All Games</p> */}

      <Attribution />
    </div>
  );
};

export default LeftNav;

export function Attribution() {
  return (
    <p className="text-xs text-left text-default-500 mb-0">
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
  );
}
