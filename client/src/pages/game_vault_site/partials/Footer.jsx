import { Button } from "@nextui-org/button";
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer({
  githubAccount = "https://github.com",
  xAccount = "https://x.com",
  linkedinAccount = "https://www.linkedin.com",
  instagramAccount = "https://www.instagram.com",
  facebookAccount = "https://www.facebook.com",
  name = "Solomon Eshun",
  footerLinks = [
    { to: "/", linkName: "Login" },
    { to: "/gamevault.sign-in", linkName: "Get an Account" },
    { to: "#features", linkName: "Features" },
  ],
}) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  const socialLinks = [
    { to: githubAccount, icon: <FiGithub /> },
    { to: xAccount, icon: <FaXTwitter /> },
    { to: linkedinAccount, icon: <FiLinkedin /> },
    { to: instagramAccount, icon: <FiInstagram /> },
    { to: facebookAccount, icon: <FiFacebook /> },
  ];

  return (
    <footer className="flex flex-col gap-5">
      <div className="flex justify-between items-center gap-3 w-[80%] mx-auto">
        {footerLinks.map((footerLink, index) => (
          <Link
            key={`${footerLink}-${index}`}
            to={footerLink.to}
            onClick={handleClick}
            className="text-sm text-default-400 hover:text-default-600 transition-all duration-300"
          >
            {footerLink.linkName}
          </Link>
        ))}
      </div>
      {/* -------------------------------------------------------------------- */}
      <div className="flex justify-center items-center gap-3 w-[80%] mx-auto">
        {socialLinks.map((socialLink, index) => (
          <a
            href={socialLink.to}
            target="_blank "
            key={`${socialLink}-${index}`}
            className="text-sm text-default-500 rounded-small p-2 transition-all duration-300 hover:bg-content1 hover:text-primary-400"
          >
            {" "}
            {socialLink.icon}{" "}
          </a>
        ))}
      </div>
      <p className="text-center text-sm text-default-400">
        Copyright {year} {name}
      </p>
    </footer>
  );
}

export default Footer;
