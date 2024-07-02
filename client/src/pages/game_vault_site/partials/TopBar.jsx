import { Button } from "@nextui-org/button";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link, NavLink } from "react-router-dom";
import { Avatar } from "@nextui-org/avatar";

// import { ThemeSwitch } from "../../components/ThemeSwitch";
// import NavLinkCard from "../../components/NavLinkCard";
// import HoverImageNavMenu from "../../components/HoverHamburgerMenu";

function TopBar({ avatarName = "Name here..." }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", linkName: "Explore" },
    { to: "/about", linkName: "About" },

    { to: "/projects", linkName: "Projects" },
    // { to: "/education", linkName: "Education" },

    { to: "/contact", linkName: "Contact" },
  ];

  const menuItems = [
    { to: "/", linkName: "Home" },
    { to: "/about", linkName: "About" },
    { to: "/projects", linkName: "Projects" },
    { to: "/contact", linkName: "Contact" },
  ];
  return (
    <Navbar
      shouldHideOnScroll
      maxWidth="full"
      className="shadow-lg"
      isBordered
      classNames={{
        base: " justify-between px-0",
      }}
    >
      <NavbarBrand className="max-w-[50px]">
        {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        /> */}
        <p className="font-bold text-inherit ml-2 font-playwrite-fr text-xs italic">
          GameVault
        </p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 w-full"
        justify="end"
      ></NavbarContent>
      <NavbarContent justify="end" className="">
        <Link to={"/login"} className="mobile:hidden">
          <Button color="primary" size="sm">
            Get an Account
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button color="default" variant="flat" size="sm">
            Log in
          </Button>
        </Link>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="primary"
          name={avatarName}
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
          <NavLink
            key={`${item}-${index}`}
            className="w-full hover:text-primary transition-all duration-300"
            to={item.to}
            size="lg"
          >
            {item.linkName}
          </NavLink>
        ))} */}
        {/* <HoverImageNavMenu /> */}
      </NavbarMenu>
    </Navbar>
  );
}

export default TopBar;
