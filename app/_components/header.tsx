import { Github, Linkedin, Sun } from "lucide-react";
import Link from "next/link";
import NavItem from "./nav-item";

const Header = () => {
  const NAV_ITEMS = [
    { label: "matheuslopes", href: "/" },
    { label: "Formação", href: "/education" },
    { label: "Experiência", href: "/experience" },
  ];

  return (
    <div className="relative top-0 flex h-32 w-full items-center justify-center">
      <div className="flex space-x-10 rounded-lg bg-secondary p-4">
        <nav className="space-x-10">
          {NAV_ITEMS.map((navItem) => (
            <NavItem {...navItem} />
          ))}
        </nav>

        <div className="flex items-center justify-center gap-4">
          <Link href="#">
            <Linkedin />
          </Link>
          <Link href="#">
            <Github />
          </Link>

          <Sun />
        </div>
      </div>
    </div>
  );
};

export default Header;
