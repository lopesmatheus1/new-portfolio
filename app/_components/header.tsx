"use client";

import NavItem from "./nav-item";
import HeaderTheme from "./header-theme";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import NavLink from "./nav-link";

const Header = () => {
  const NAV_ITEMS = [
    { label: "<matheuslopes />", href: "/" },
    { label: "Formações", href: "/formation" },
    { label: "Experiência", href: "/experience" },
  ];
  const NAV_LINKS = [
    {
      icon: <BsLinkedin size={18} />,
      href: "https://www.linkedin.com/in/matheus-marendino-23b039246/",
    },
    {
      icon: <BsGithub size={18} />,
      href: "https://github.com/lopesmatheus1",
    },
    {
      icon: <BsWhatsapp size={18} />,
      href: "https://wa.link/qhiq4k",
    },
  ];

  return (
    <div className="sm3:h-32 relative top-3 flex w-full items-center justify-center sm:top-0">
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-secondary p-4 sm:flex-row lg:gap-4">
        <nav className="sm2:flex-row sm3:text-base flex flex-col gap-2 text-sm sm:gap-3">
          {NAV_ITEMS.map((navItem) => (
            <NavItem {...navItem} key={navItem.label} />
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4">
          {NAV_LINKS.map((navLink) => (
            <NavLink key={navLink.href} {...navLink} />
          ))}

          <HeaderTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
