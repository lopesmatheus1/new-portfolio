import Link from "next/link";
import { Button } from "./ui/button";
import { BiLogoGmail } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import NavLink from "./nav-link";

const Footer = () => {
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
    <section className="container mt-10">
      <div className="flex min-h-[250px] flex-col justify-evenly">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-4xl font-extralight lg:text-5xl">
            Vamos <br /> trabalhar juntos
          </h2>

          <Button variant="outline">
            <Link
              className="flex items-center justify-center gap-2 font-light"
              href="mailto:matheusmarendino022@gmail.com"
            >
              <BiLogoGmail />
              matheusmarendino022@gmail.com
            </Link>
          </Button>
        </div>

        <hr />

        <div className="flex justify-between">
          <p className="text-xs font-light">
            © 2025 Todos os direitos reservados.
          </p>

          <div className="flex gap-3">
            {NAV_LINKS.map((navLink) => (
              <NavLink key={navLink.href} {...navLink} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
