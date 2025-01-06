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
    <div className="relative top-3 z-50 flex w-full items-center justify-center sm3:h-32 sm:top-0">
      <div className="flex flex-col items-center justify-center gap-2 rounded-lg bg-secondary p-4 sm:flex-row lg:gap-4">
        <nav className="flex flex-col gap-2 text-sm sm2:flex-row sm3:text-base sm:gap-3">
          {NAV_ITEMS.map((navItem) => (
            <NavItem {...navItem} key={navItem.label} />
          ))}
        </nav>
        <div className="flex gap-4">
          <div className="flex items-center justify-center gap-4 sm:hidden">
            {NAV_LINKS.map((navLink) => (
              <NavLink key={navLink.href} {...navLink} />
            ))}
          </div>
          <HeaderTheme />
        </div>
      </div>
    </div>
  );
};

export default Header;
