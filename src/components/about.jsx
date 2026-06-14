export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h2
        style={{
          color: "#00ff88",
          marginBottom: "30px",
        }}
      >
        About Me
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: "1.8",
          color: "#c9d1d9",
        }}
      >
        I am an M.Tech Cyber Security student at Rashtriya Raksha University
        with practical experience in Vulnerability Assessment & Penetration
        Testing (VAPT), Red Team Operations, SOC Monitoring, Cloud Security,
        and ICS/SCADA Security.

        Through internships at WESEE (Indian Navy), CiberTroops Security
        Solutions, and Elastic Run, I have worked on identifying security
        weaknesses, performing penetration testing, analyzing threats, and
        strengthening organizational security posture.
      </p>
    </section>
  );
}