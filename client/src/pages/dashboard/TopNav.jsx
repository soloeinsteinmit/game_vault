import React, { useEffect, useRef } from "react";

import { Input } from "@nextui-org/input";
import { CiSearch } from "react-icons/ci";
import { Kbd } from "@nextui-org/kbd";
import UserDropdown from "./partials/UserDropdown";
import { ThemeSwitch } from "../../components/ThemeSwitcher";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { FaGear } from "react-icons/fa6";

const TopNav = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    /**
     * Handle keydown events and perform specific actions based on the key pressed.
     *
     * @param {Event} event - The keydown event object.
     */
    const handleKeydown = (event) => {
      if (
        (event.ctrlKey && event.code === "KeyK") ||
        (event.altKey && event.code === "Enter")
      ) {
        event.preventDefault();
        console.log("Shortcut key pressed");
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="flex items-center justify-between gap-5 px-5 h-20 sticky bg-content1 top-0 z-50 shadow-medium">
      <div className="flex gap-2 items-center">
        <p className="font-playwrite-fr text-xs font-extrabold italic">
          GameVault{" "}
        </p>
        <Chip color="warning" variant="dot">
          v1.0.0🚀
        </Chip>
      </div>

      <Input
        ref={inputRef}
        placeholder="Search over 800,000+ games..."
        radius="full"
        startContent={<CiSearch />}
        endContent={
          <div className="flex items-center gap-1">
            <Kbd keys={["ctrl"]}>K</Kbd>{" "}
            <span className="text-xs font-bold">or</span>{" "}
            <Kbd keys={["alt", "enter"]}>Enter</Kbd>
          </div>
        }
        className="max-w-[700px]"
      />
      <div className="flex gap-4">
        <ThemeSwitch />
        <Button isIconOnly variant="light">
          <FaGear />
        </Button>
        <UserDropdown />
      </div>
    </div>
  );
};

export default TopNav;
