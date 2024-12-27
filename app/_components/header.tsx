"use client";

import NavItem from "./nav-item";
import HeaderTheme from "./header-theme";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

import NavLink from "./nav-link";

const Header = () => {
  const NAV_ITEMS = [
    { label: "<matheuslopes />", href: "/" },
    { label: "Formação", href: "/education" },
    { label: "Experiência", href: "/experience" },
  ];
  const NAV_LINKS = [
    {
      icon: <BsLinkedin />,
      href: "https://www.linkedin.com/in/matheus-marendino-23b039246/",
    },
    {
      icon: <BsGithub />,
      href: "https://github.com/lopesmatheus1",
    },
    {
      icon: <BsWhatsapp />,
      href: "https://wa.link/qhiq4k",
    },
  ];

  return (
    <div className="relative top-3 flex h-32 w-full items-center justify-center sm:top-0">
      <div className="flex items-center justify-center gap-6 rounded-lg bg-secondary p-4">
        <nav className="flex flex-col gap-2 text-base sm:flex-row sm:gap-3">
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
