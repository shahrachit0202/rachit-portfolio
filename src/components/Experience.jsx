import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const experiences = [
    {
      company: "WESEE (Indian Navy)",
      role: "VAPT Intern",
      duration: "Oct 2025 - Mar 2026",
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
      skills: [
        "SOC Monitoring",
        "Incident Response",
        "Azure Security",
        "Trend Micro",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <Container>

        <SectionTitle title="Professional Experience" />

        <div className="space-y-6">

          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-2xl
                p-8
              "
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {exp.company}
                  </h3>

                  <p className="text-emerald-400 mt-2">
                    {exp.role}
                  </p>
                </div>

                <p className="text-slate-400 mt-4 lg:mt-0">
                  {exp.duration}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
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
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}