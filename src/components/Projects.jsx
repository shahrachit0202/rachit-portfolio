import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "DeepVerify",
      description:
        "AI-powered deepfake detection and liveness analysis system designed to identify manipulated media and improve digital identity verification.",
      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Deep Learning",
      ],
      github: "#",
    },
    {
      title: "CcureGen",
      description:
        "Android security application featuring phishing detection, security awareness, and SMS threat analysis to help users identify malicious communications.",
      technologies: [
        "Android",
        "Java",
        "Cyber Security",
        "SMS Security",
      ],
      github: "https://github.com/shailshah2757/PhishSMS",
    },
    {
      title: "Enhancing Security in a University Network Using Snort & Wireshark",
      description:
        "Network security project focused on intrusion detection, packet analysis, threat monitoring, and custom Snort rule development for university environments.",
      technologies: [
        "Snort",
        "Wireshark",
        "IDS",
        "Network Security",
        "Threat Detection",
      ],
      github: "https://github.com/shahrachit0202/snort_rules",
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
                flex
                flex-col
                justify-between
                hover:border-emerald-400
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
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
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  text-center
                  bg-emerald-500
                  text-black
                  font-semibold
                  py-3
                  rounded-lg
                  hover:bg-emerald-400
                  transition
                "
              >
                View Project →
              </a>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}