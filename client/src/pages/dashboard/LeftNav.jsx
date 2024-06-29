import React from "react";
import NavLinkCard from "../../components/NavLinkCard";

import {
  FaStar,
  FaFireFlameCurved,
  FaForwardFast,
  FaCrown,
  FaCalendarDays,
} from "react-icons/fa6";
import { HiMiniTrophy } from "react-icons/hi2";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { IoGameController } from "react-icons/io5";

const LeftNav = () => {
  return (
    <div className="flex flex-col gap-3 sticky top-20 w-[300px] max-w-[350px] px-5 pb-10">
      <Attribution />
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
      <p className="text-lg font-extrabold ">All Games</p>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-extrabold ">Browse</p>
        <div className="flex flex-col gap-2">
          <NavLinkCard icon={<IoGameController />} linkName="Platforms" />
        </div>
      </div>
    </div>
  );
};

export default LeftNav;

function Attribution() {
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
