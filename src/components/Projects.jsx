import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "DeepVerify",
      description:
        "AI-powered deepfake detection and liveness verification solution developed to identify manipulated media and strengthen digital identity verification. The project leverages deep learning techniques for authenticity analysis in security-sensitive environments.",

      technologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "CNN",
        "Deep Learning",
      ],

      github: "#",

      publication:
        "https://link.springer.com/chapter/10.1007/978-981-97-8605-3_18",
    },

    {
      title:
        "Enhancing Security in a University Network Using Snort & Wireshark",

      description:
        "Designed and implemented a university network security monitoring solution using Snort IDS and Wireshark. Developed custom intrusion detection rules, analyzed network traffic, and identified potential threats through packet inspection and security monitoring.",

      technologies: [
        "Snort",
        "Wireshark",
        "IDS",
        "Network Security",
        "Threat Detection",
      ],

      github:
        "https://github.com/shahrachit0202/snort_rules",

      publication:
        "https://link.springer.com/chapter/10.1007/978-981-97-6675-8_11",
    },

    {
      title: "CcureGen",

      description:
        "Android-based security application focused on phishing awareness and SMS threat detection. The application assists users in identifying potentially malicious communications and improving mobile security awareness.",

      technologies: [
        "Android",
        "Java",
        "Cyber Security",
        "SMS Security",
      ],

      github:
        "https://github.com/shailshah2757/PhishSMS",
    },
  ];

  return (
    <section id="projects" className="py-16">
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

                <div className="flex flex-wrap gap-2 mb-8">
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

              <div className="flex flex-col gap-3">

                {project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
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
                )}

                {project.publication && (
                  <a
                    href={project.publication}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      text-center
                      border
                      border-emerald-500
                      text-emerald-400
                      font-semibold
                      py-3
                      rounded-lg
                      hover:bg-emerald-500
                      hover:text-black
                      transition
                    "
                  >
                    View Publication →
                  </a>
                )}

              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}