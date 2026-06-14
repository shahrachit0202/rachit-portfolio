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
      }}
    >
      <h1
        style={{
          fontSize: "5rem",
          marginBottom: "10px",
        }}
      >
        Rachit Shah
      </h1>

      <h2 style={{ color: "#00ff88" }}>
        Cyber Security Engineer
      </h2>

      <p
        style={{
          maxWidth: "700px",
          marginTop: "20px",
        }}
      >
        M.Tech Cyber Security student specializing in
        Vulnerability Assessment & Penetration Testing,
        Red Teaming, SOC Operations, Cloud Security and
        Industrial Control System Security.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            background: "#00ff88",
            padding: "12px 20px",
            border: "none",
            marginRight: "10px",
            cursor: "pointer",
          }}
        >
          Download Resume
        </button>

        <button
          style={{
            background: "transparent",
            color: "white",
            border: "1px solid #00ff88",
            padding: "12px 20px",
            cursor: "pointer",
          }}
        >
          View Projects
        </button>
      </div>
    </section>
  );
}