import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Red Team", href: "#redteam" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-[#0d1117]/90
        backdrop-blur-md
        border-b
        border-slate-800
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >
        {/* Logo */}
        <a
          href="#"
          className="
            text-xl
            font-bold
            text-emerald-400
          "
        >
          Rachit Shah
        </a>

        {/* Desktop Menu */}
        <div
          className="
            hidden
            md:flex
            items-center
            gap-6
            text-sm
            text-slate-300
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                hover:text-emerald-400
                transition
              "
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
            text-xl
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
            md:hidden
            bg-[#161b22]
            border-t
            border-slate-800
            px-6
            py-4
            flex
            flex-col
            gap-4
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="
                text-slate-300
                hover:text-emerald-400
                transition
              "
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}