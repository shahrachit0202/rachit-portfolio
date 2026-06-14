export default function Skills() {
  const skills = [
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Nessus",
    "Wireshark",
    "Splunk",
    "Snort",
    "AWS",
    "Azure",
    "Python",
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 20px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h2>Skills</h2>

      <div>
        {skills.map((skill) => (
          <button
            key={skill}
            style={{
              margin: "10px",
              padding: "10px",
            }}
          >
            {skill}
          </button>
        ))}
      </div>
    </section>
  );
}