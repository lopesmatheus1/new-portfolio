"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  href: string;
  label: string;
}
const NavItem = ({ href, label }: NavItemProps) => {
  const pathname = usePathname();
  return (
    <Link href={href} key={label}>
      <span className={`${pathname === href ? "text-primary" : ""}`}>
        {label}
      </span>
    </Link>
  );
};

export default NavItem;
