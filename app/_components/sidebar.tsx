import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineInstagram,
} from "react-icons/ai";

const links = [
  {
    label: "LinkedIn",
    icon: <AiOutlineLinkedin size={25} />,
    href: "https://www.linkedin.com",
  },
  {
    label: "GitHub",
    icon: <AiOutlineGithub size={25} />,
    href: "https://www.github.com",
  },
  {
    label: "E-mail",
    icon: <AiOutlineMail />,
    href: "mailto:example@email.com",
  },
  { label: "Contato", icon: <AiOutlineUser size={25} />, href: "#" },
  {
    label: "Instagram",
    icon: <AiOutlineInstagram size={25} />,
    href: "https://www.instagram.com",
  },
];

const Sidebar = () => {
  return (
    <div className="fixed left-0 top-1/4 mr-4 hidden flex-col rounded-t-lg sm:flex">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center"
        >
          {/* Contêiner que cresce ao passar o mouse */}
          <div
            className={` ${link.label === "LinkedIn" ? "rounded-t-sm" : ""} ${link.label === "Instagram" ? "rounded-b-sm" : ""} flex h-12 w-11 items-center gap-2 overflow-hidden bg-secondary px-2 py-2 transition-all duration-300 hover:rounded-r-lg hover:text-primary group-hover:w-40`}
          >
            {/* Ícone */}
            <div className="text-2xl">{link.icon}</div>

            {/* Texto (aparece com a expansão) */}
            <span className="text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {link.label}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Sidebar;