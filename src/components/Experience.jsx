export default function Experience() {
  const experiences = [
    {
      company: "WESEE (Indian Navy)",
      role: "VAPT Intern",
      duration: "Oct 2025 - Mar 2026",
    },
    {
      company: "CiberTroops Security Solutions",
      role: "VAPT Intern",
      duration: "Nov 2024 - Mar 2025",
    },
    {
      company: "Elastic Run",
      role: "SOC Analyst Intern",
      duration: "Sep 2022 - Jan 2023",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h2 style={{ color: "#00ff88" }}>
        Experience
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          style={{
            background: "#161b22",
            padding: "25px",
            borderRadius: "12px",
            marginBottom: "20px",
            border: "1px solid #30363d",
          }}
        >
          <h3>{exp.company}</h3>

          <p>{exp.role}</p>

          <p style={{ color: "#8b949e" }}>
            {exp.duration}
          </p>
        </div>
      ))}
    </section>
  );
}