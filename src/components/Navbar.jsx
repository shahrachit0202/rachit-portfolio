export default function Navbar() {
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
        <h2
          className="
            text-xl
            font-bold
            text-emerald-400
          "
        >
          Rachit Shah
        </h2>

        <div
          className="
            hidden
            md:flex
            gap-6
            text-sm
            text-slate-300
          "
        >
          <a href="#about" className="hover:text-emerald-400">
            About
          </a>

          <a href="#skills" className="hover:text-emerald-400">
            Skills
          </a>

          <a href="#experience" className="hover:text-emerald-400">
            Experience
          </a>

          <a href="#redteam" className="hover:text-emerald-400">
            Red Team
          </a>

          <a href="#projects" className="hover:text-emerald-400">
            Projects
          </a>

          <a href="#publications" className="hover:text-emerald-400">
            Publications
          </a>

          <a href="#certifications" className="hover:text-emerald-400">
            Certifications
          </a>

          <a href="#contact" className="hover:text-emerald-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}