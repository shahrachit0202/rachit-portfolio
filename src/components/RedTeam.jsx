import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function RedTeam() {
  const activities = [
    {
      title: "WESEE (Indian Navy)",
      subtitle: "VAPT Internship",
      items: [
        "Vulnerability Assessment",
        "Web Application Security",
        "Network Penetration Testing",
        "Burp Suite",
        "Nessus",
        "Metasploit",
      ],
    },
    {
      title: "CII SECEX 2025",
      subtitle: "Red Team Member",
      items: [
        "Reconnaissance",
        "Privilege Escalation",
        "Lateral Movement",
        "Persistence",
        "Red Team Operations",
      ],
    },
    {
      title: "BHARAT NCX 2025",
      subtitle: "ICS Security Trainer Assistant",
      items: [
        "ICS Security",
        "SCADA Security",
        "Modbus Analysis",
        "Snort Rules",
        "Industrial Network Security",
      ],
    },
  ];

  return (
    <section id="redteam" className="py-24">
      <Container>

        <SectionTitle title="Red Team Operations" />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {activities.map((activity) => (
            <div
              key={activity.title}
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
              <h3 className="text-2xl font-bold text-white mb-2">
                {activity.title}
              </h3>

              <p className="text-emerald-400 mb-6">
                {activity.subtitle}
              </p>

              <div className="flex flex-wrap gap-3">

                {activity.items.map((item) => (
                  <span
                    key={item}
                    className="
                      border
                      border-slate-700
                      rounded-full
                      px-3
                      py-2
                      text-sm
                      text-slate-300
                    "
                  >
                    {item}
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