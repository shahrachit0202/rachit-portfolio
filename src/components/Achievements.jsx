import Container from "./Container";
import SectionTitle from "./SectionTitle";

export default function Achievements() {
  const achievements = [
    {
      title: "WESEE (Indian Navy)",
      description:
        "Completed a VAPT Internship contributing to vulnerability assessments, web application security testing, and security reporting activities.",
      icon: "⚓",
    },
    {
      title: "BHARAT NCX 2025",
      description:
        "Served as Teaching Assistant for ICS Security and Red Teaming exercises focused on SCADA systems, industrial protocols, and critical infrastructure security.",
      icon: "🏭",
    },
    {
      title: "CII SECEX 2025",
      description:
        "Participated in a national cyber range exercise performing Red Team operations, adversary simulation, reconnaissance, and attack-path analysis.",
      icon: "🎯",
    },
    {
      title: "Springer Author",
      description:
        "Published cybersecurity research covering network security, cryptography, deepfake detection, phishing detection, and AI-driven security analysis.",
      icon: "📚",
    },
  ];

  return (
    <section className="py-16">
      <Container>
        <SectionTitle title="Featured Achievements" />

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
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
              <div className="text-4xl mb-4">
                {achievement.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {achievement.title}
              </h3>

              <p className="text-slate-300 leading-7">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}