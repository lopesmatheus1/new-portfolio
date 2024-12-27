import Link from "next/link";
interface NavLinkProps {
  icon: JSX.Element;
  href: string;
}
const NavLink = ({ icon, href }: NavLinkProps) => {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      className="transition ease-in-out hover:text-primary/40"
      href={href}
    >
      {icon}
    </Link>
  );
};

export default NavLink;
