import { useEffect, useRef, useState } from "react";

import { Input } from "@nextui-org/input";
import { CiSearch } from "react-icons/ci";
import { Kbd } from "@nextui-org/kbd";
import UserDropdown from "./partials/UserDropdown";
import { ThemeSwitch } from "../../components/ThemeSwitcher";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import {
  FaCalendarDays,
  FaCode,
  FaCrown,
  FaFireFlameCurved,
  FaForwardFast,
  FaGear,
  FaGhost,
  FaRankingStar,
  FaStar,
  FaTags,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiInformation2Fill } from "react-icons/ri";
import { Navbar, NavbarMenuToggle } from "@nextui-org/navbar";
import Hamburger from "react-hamburger-menu";
import { Avatar } from "@nextui-org/avatar";
import "./topbar.css";
import NavLinkCard from "../../components/NavLinkCard";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoGameController } from "react-icons/io5";
import { HiMiniTrophy } from "react-icons/hi2";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { Attribution } from "./LeftNav";

const TopNav = () => {
  const inputRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (
        (event.ctrlKey && event.code === "KeyK") ||
        (event.altKey && event.code === "Enter")
      ) {
        event.preventDefault();
        inputRef.current.focus();
      } else if (event.code === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between mobile:px-5  sm-scard-tab:px-10 gap-5 px-5 h-20 sticky bg-content1 top-0 z-50 shadow-medium">
      <div className="flex gap-2 items-center">
        <Link
          to={"/dashboard"}
          className="font-playwrite-fr text-xs lg-tab:text-tiny font-extrabold italic"
        >
          GameVault{" "}
        </Link>
        <Chip color="warning" variant="dot" size="sm" className="mobile:hidden">
          v1.0.0🚀
        </Chip>
      </div>

      <Input
        ref={inputRef}
        placeholder="Search over 800,000+ games..."
        radius="full"
        startContent={<CiSearch />}
        endContent={
          <div className="flex items-center gap-1 sm-scard-tab:hidden">
            <Kbd keys={["ctrl"]}>K</Kbd>{" "}
            <span className="text-xs font-bold">or</span>{" "}
            <Kbd keys={["alt", "enter"]}>Enter</Kbd>
          </div>
        }
        className="max-w-[700px] w-full sm-scard-tab:hidden"
      />
      <div className="flex gap-4  ">
        <ThemeSwitch className="" />
        <Link to="/gamevault.io" className="lg-tab:hidden">
          <Button isIconOnly variant="light" className="lg-tab:hidden">
            <RiInformation2Fill className="text-lg" />
          </Button>
        </Link>
        <Button isIconOnly variant="light" className="lg-tab:hidden">
          <FaGear />
        </Button>

        <div className="flex gap-4 items-center justify-between">
          <UserDropdown />
          <div className="hidden xl-tab:flex ">
            <Hamburger
              isOpen={menuOpen}
              menuClicked={handleMenuToggle}
              width={20}
              height={15}
              strokeWidth={2}
              rotate={0}
              color="hsl(var(--nextui-foreground) / var(--nextui-foreground-opacity, var(--tw-text-opacity)))"
              borderRadius={0}
              animationDuration={0.5}
              className={" text-foreground"}
            />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          // ref={menuRef}
          className="flex flex-col gap-3 absolute top-20 right-0 w-full bg-content1 shadow-lg p-5 slide-in pb-5"
        >
          <div className="blur-overlay" />
          <Input
            ref={inputRef}
            placeholder="Search over 800,000+ games..."
            radius="full"
            startContent={<CiSearch />}
            endContent={
              <div className="flex items-center gap-1 xs-tab:hidden">
                <Kbd keys={["ctrl"]}>K</Kbd>{" "}
                <span className="text-xs font-bold">or</span>{" "}
                <Kbd keys={["alt", "enter"]}>Enter</Kbd>
              </div>
            }
            className="max-w-[700px] w-full hidden sm-scard-tab:flex"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-extrabold flex-wrap ">Browse</p>
              <div className="flex flex-wrap gap-3">
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
            <div className="flex flex-col gap-2 ">
              <p className="text-lg font-extrabold ">New Releases</p>
              <div className="flex  gap-3 flex-wrap">
                <NavLinkCard icon={<FaStar />} linkName="Last 30 days" />
                <NavLinkCard
                  icon={<FaFireFlameCurved />}
                  linkName="This week"
                />
                <NavLinkCard icon={<FaForwardFast />} linkName="Next week" />
                <NavLinkCard
                  icon={<FaCalendarDays />}
                  linkName="Release calender"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-lg font-extrabold ">Top</p>
              <div className="flex flex-wrap gap-3">
                <NavLinkCard
                  icon={<HiMiniTrophy />}
                  linkName="Best of the year"
                />
                <NavLinkCard
                  icon={<BsFillBarChartLineFill />}
                  linkName="Popular in 2023"
                />
                <NavLinkCard icon={<FaCrown />} linkName="All top 250" />
              </div>
            </div>
          </div>
          <Attribution />
        </div>
      )}
    </div>
  );
};

export default TopNav;
