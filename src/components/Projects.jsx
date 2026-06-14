export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h2 style={{ color: "#00ff88" }}>
        Projects
      </h2>

      <div
        style={{
          background: "#161b22",
          padding: "25px",
          borderRadius: "12px",
          border: "1px solid #30363d",
        }}
      >
        <h3>CcureGen</h3>

        <p>
          Android security application featuring
          intrusion detection, file integrity verification,
          and steganography analysis.
        </p>

        <p>
          Android • Snort • Cyber Security
        </p>
      </div>
    </section>
  );
}