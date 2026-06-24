import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const experiences = [
    {
      company: "WESEE (Indian Navy)",
      role: "VAPT Intern",
      duration: "Oct 2025 - Mar 2026",

      achievements: [
        "Conducted web application vulnerability assessments and security testing.",
        "Performed vulnerability identification and validation using industry-standard tools.",
        "Documented security findings and remediation recommendations.",
        "Supported security evaluation activities within defense-oriented environments.",
      ],

      skills: [
        "VAPT",
        "Burp Suite",
        "Nessus",
        "Metasploit",
        "OWASP Top 10",
        "Reporting",
      ],
    },

    {
      company: "CiberTroops Security Solutions",
      role: "VAPT Intern",
      duration: "Nov 2024 - Mar 2025",

      achievements: [
        "Performed web application security assessments and vulnerability testing.",
        "Identified SQL Injection, XSS, and authentication weaknesses.",
        "Conducted security validation and remediation verification.",
        "Prepared technical vulnerability assessment reports.",
      ],

      skills: [
        "Web Pentesting",
        "Network Security",
        "SQL Injection",
        "XSS",
        "Nessus",
      ],
    },

    {
      company: "Elastic Run",
      role: "SOC Analyst Intern",
      duration: "Sep 2022 - Jan 2023",

      achievements: [
        "Monitored security alerts and investigated suspicious activities.",
        "Supported incident response and threat analysis activities.",
        "Worked with endpoint and cloud security monitoring solutions.",
        "Assisted in identifying and escalating security incidents.",
      ],

      skills: [
        "SOC Monitoring",
        "Incident Response",
        "Azure Security",
        "Trend Micro",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <Container>
        <SectionTitle title="Professional Experience" />

        <div className="relative border-l-2 border-emerald-400 ml-4">

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="relative ml-10 mb-12"
            >
              {/* Timeline Dot */}
              <div
                className="
                  absolute
                  -left-[49px]
                  top-6
                  w-5
                  h-5
                  rounded-full
                  bg-emerald-400
                  border-4
                  border-[#0d1117]
                "
              />

              {/* Experience Card */}
              <div
                className="
                  bg-[#161b22]
                  border
                  border-slate-800
                  rounded-2xl
                  p-8
                  hover:border-emerald-400
                  transition-all
                  duration-300
                "
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.company}
                    </h3>

                    <p className="text-emerald-400 mt-2 font-medium">
                      {exp.role}
                    </p>
                  </div>

                  <p className="text-slate-400 mt-4 lg:mt-0">
                    {exp.duration}
                  </p>
                </div>

                {/* Achievement Bullets */}
                <div className="mt-6 space-y-3">
                  {exp.achievements.map((item) => (
                    <p
                      key={item}
                      className="text-slate-300 leading-7"
                    >
                      • {item}
                    </p>
                  ))}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-3 mt-8">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        border
                        border-slate-700
                        rounded-full
                        px-3
                        py-2
                        text-slate-300
                        text-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>
      </Container>
    </section>
  );
}