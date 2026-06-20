import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "CcureGen",
      description:
        "Android security application featuring intrusion detection, file integrity verification, and steganography analysis.",
      tech: ["Android", "Snort", "Cyber Security"],
      link: "#",
    },
    {
      title: "Snort Rules Repository",
      description:
        "Custom Snort IDS rules developed for intrusion detection, network monitoring, and security testing scenarios.",
      tech: ["Snort", "IDS", "Network Security"],
      link: "https://github.com/shahrachit0202/snort_rules",
    },
    {
      title: "TryHackMe Journey",
      description:
        "Hands-on cybersecurity learning through offensive security, web security, privilege escalation, and penetration testing labs.",
      tech: ["TryHackMe", "Red Team", "Pentesting"],
      link: "https://tryhackme.com/p/R2Shah",
    },
  ];

  return (
    <section id="projects" className="py-24">
      <Container>

        <SectionTitle title="Featured Projects" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-2xl
                p-8
                hover:border-emerald-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-7 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      border
                      border-slate-700
                      rounded-full
                      px-3
                      py-1
                      text-sm
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    text-emerald-400
                    font-medium
                    hover:underline
                  "
                >
                  View Project →
                </a>
              )}
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}