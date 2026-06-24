import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skillGroups = [
    {
      title: "Offensive Security",
      skills: [
        "Burp Suite",
        "Metasploit",
        "Nmap",
        "SQLMap",
        "Nessus",
        "OpenVAS",
      ],
    },
    {
      title: "Defensive Security",
      skills: [
        "Snort",
        "Splunk",
        "Wireshark",
        "SOC Monitoring",
      ],
    },
    {
      title: "Cloud Security",
      skills: [
        "AWS",
        "Azure",
        "Google Cloud",
      ],
    },
    {
      title: "Programming",
      skills: [
        "Python",
        "JavaScript",
        "SQL",
        "Bash",
      ],
    },
  ];

  return (
    <section id="skills" className="py-16">
      <Container>

        <SectionTitle title="Core Expertise" />

        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                bg-[#161b22]
                border
                border-slate-800
                rounded-xl
                p-6
              "
            >
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
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