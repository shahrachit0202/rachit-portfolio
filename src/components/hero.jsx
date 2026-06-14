export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          marginBottom: "10px",
          color: "#ffffff",
        }}
      >
        Rachit Shah
      </h1>

      <h2
        style={{
          color: "#00ff88",
          fontSize: "2rem",
          marginBottom: "20px",
        }}
      >
        Cyber Security Engineer | VAPT Analyst
      </h2>

      <p
        style={{
          maxWidth: "800px",
          color: "#c9d1d9",
          fontSize: "1.1rem",
          lineHeight: "1.8",
        }}
      >
        M.Tech Cyber Security student at Rashtriya Raksha University with
        hands-on experience in Vulnerability Assessment & Penetration Testing,
        Red Team Operations, SOC Monitoring, Cloud Security, and ICS/SCADA
        Security. Experienced in security assessments, threat detection,
        offensive security exercises, and cybersecurity research.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#00ff88",
            color: "#000",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Download Resume
        </a>

        <a
          href="#experience"
          style={{
            border: "1px solid #00ff88",
            color: "#00ff88",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          View Experience
        </a>
      </div>

      <div
        style={{
          marginTop: "50px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            border: "1px solid #30363d",
            padding: "10px 15px",
            borderRadius: "20px",
          }}
        >
          VAPT
        </span>

        <span
          style={{
            border: "1px solid #30363d",
            padding: "10px 15px",
            borderRadius: "20px",
          }}
        >
          Red Teaming
        </span>

        <span
          style={{
            border: "1px solid #30363d",
            padding: "10px 15px",
            borderRadius: "20px",
          }}
        >
          SOC Operations
        </span>

        <span
          style={{
            border: "1px solid #30363d",
            padding: "10px 15px",
            borderRadius: "20px",
          }}
        >
          Cloud Security
        </span>

        <span
          style={{
            border: "1px solid #30363d",
            padding: "10px 15px",
            borderRadius: "20px",
          }}
        >
          ICS Security
        </span>
      </div>
    </section>
  );
}