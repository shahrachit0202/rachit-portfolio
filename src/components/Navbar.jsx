export default function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#161b22",
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1000,
      }}
    >
      <h3 style={{ color: "#00ff88" }}>
        Rachit Shah
      </h3>

      <div>
        <a href="#about" style={{ margin: "10px", color: "white" }}>About</a>
        <a href="#skills" style={{ margin: "10px", color: "white" }}>Skills</a>
        <a href="#experience" style={{ margin: "10px", color: "white" }}>Experience</a>
        <a href="#projects" style={{ margin: "10px", color: "white" }}>Projects</a>
        <a href="#contact" style={{ margin: "10px", color: "white" }}>Contact</a>
      </div>
    </nav>
  );
}